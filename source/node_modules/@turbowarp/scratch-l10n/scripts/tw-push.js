#!/usr/bin/env babel-node

import fs from 'node:fs';
import pathUtil from 'node:path';
import {txPush} from '../lib/transifex.js';

/* eslint-disable valid-jsdoc */

/**
 * @param {string} path
 * @returns {boolean}
 */
const isDirectorySync = (path) => {
    try {
        const stat = fs.statSync(path);
        return stat.isDirectory();
    } catch (e) {
        if (e.code === 'ENOENT') {
            return false;
        }
        throw e;
    }
};

/**
 * @param {string} directory
 * @returns {string[]}
 */
const recursiveReadDirectory = (directory) => {
    const children = fs.readdirSync(directory);
    const result = [];
    for (const name of children) {
        const path = pathUtil.join(directory, name);
        if (isDirectorySync(path)) {
            const directoryChildren = recursiveReadDirectory(path);
            for (const childName of directoryChildren) {
                result.push(pathUtil.join(name, childName));
            }
        } else {
            result.push(name);
        }
    }
    return result;
};

const scratchGui = pathUtil.join(__dirname, '..', '..', 'scratch-gui');
const scratchGuiTranslations = pathUtil.join(scratchGui, 'translations');
const scratchVm = pathUtil.join(__dirname, '..', '..', 'scratch-vm');
if (!isDirectorySync(scratchGui)) throw new Error('Cannot find scratch-gui');
if (!isDirectorySync(scratchGuiTranslations)) throw new Error('Cannot find scratch-gui translations');
if (!isDirectorySync(scratchVm)) throw new Error('Cannot find scratch-vm');

/**
 * @typedef StructuredMessage
 * @property {string} string
 * @property {string} context
 * @property {string} developer_comment
 */

/**
 * @param {string} sourceString
 * @param {string} [description] Defaults to empty string.
 * @returns {StructuredMessage}
 */
const makeStructuredMessage = (sourceString, description) => {
    description = description || '';
    return {
        string: sourceString,
        // We set context because that's what we used to use in the past and removing it now would reset translations.
        // However, we also set developer_comment because Transifex makes this string much more visible in the
        // interface than the context.
        context: description,
        developer_comment: description
    };
};

/**
 * @returns {{messages: Record<string, StructuredMessage>, allUsedIds: string[]}}
 */
const parseSourceGuiMessages = () => {
    const reactTranslationFiles = recursiveReadDirectory(scratchGuiTranslations)
        .filter((file) => file.endsWith('.json'));

    const messages = {};
    for (const file of reactTranslationFiles) {
        const path = pathUtil.join(scratchGuiTranslations, file);
        const json = JSON.parse(fs.readFileSync(path, 'utf-8'));
        for (const {id, defaultMessage, description} of json) {
            messages[id] = makeStructuredMessage(defaultMessage, description);
        }
    }

    return messages;
};

/**
 * Parse an object like:
 * {
 *   id: 'something',
 *   description: "something else"
 * }
 * @param {string} object
 * @returns {unknown}
 */
const parseJsonLike = object => {
    const result = {};
    // Remove comments
    object = object.replace(/\/\/[^\n]*/g, '');
    for (const lineMatch of object.matchAll(/(\w+):[\s\S]*?(?:'|")(.*)(?:'|")/gm)) {
        const [_, id, value] = lineMatch;
        result[id] = value;
    }
    return result;
};

/**
 * @returns {Record<string, StructuredMessage>}
 */
const parseSourceVmMessages = () => {
    // Parse all calls to formatMessage()
    const messages = {};
    const extensionDirectory = pathUtil.join(scratchVm, 'src');
    for (const relativePath of recursiveReadDirectory(extensionDirectory)) {
        const path = pathUtil.join(extensionDirectory, relativePath);
        const contents = fs.readFileSync(path, 'utf-8');
        for (const formatMatch of contents.matchAll(/(?:formatMessage|maybeFormatMessage)\({([\s\S]+?)}/g)) {
            const object = parseJsonLike(formatMatch[1]);
            if (typeof object.id !== 'string' || typeof object.default !== 'string') {
                throw new Error('Error parsing formatMessage() string; missing either id or default.');
            }
            messages[object.id] = makeStructuredMessage(object.default, object.description);
        }
    }
    return messages;
};

const guiMessages = parseSourceGuiMessages();
const vmMessages = parseSourceVmMessages();
const allMessages = {
    ...guiMessages,
    ...vmMessages
};

const allMessageIds = Object.keys(allMessages).sort();
fs.writeFileSync(
    pathUtil.join(__dirname, 'tw-all-used-ids.json'),
    JSON.stringify(allMessageIds, null, 4)
);

const twMessages = {};
for (const [id, message] of Object.entries(allMessages)) {
    if (id.startsWith('tw.')) {
        twMessages[id] = message;
    }
}

const push = async () => {
    try {
        console.log('UPLOADING to Transifex...');
        const PROJECT = 'turbowarp';
        const RESOURCE = 'guijson';
        await txPush(PROJECT, RESOURCE, twMessages);
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

push();
