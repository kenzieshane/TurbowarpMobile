#!/usr/bin/env babel-node

import pathUtil from 'node:path';
import fs from 'node:fs';
import {txPull, txGetResourceStatistics} from '../lib/transifex';
import {supportedLocales, scratchToTransifex} from './tw-locales';
import {batchMap} from '../lib/batch.js';

/* eslint-disable valid-jsdoc */

const PROJECT = 'turbowarp';
const CONCURRENCY_LIMIT = 36;
const SOURCE_LOCALE = 'en';

/**
 * Not sure how to do this in JSDoc
 * @template T
 * @typedef {Record<string, T>} NestedRecord<T>
 */

/**
 * Normalizes messages in the following ways by converting objects with context to just strings,
 * and ensures that the order of keys is consistent.
 * @param {NestedRecord<string | {string: string}>} messages
 * @returns {NestedRecord<string>}
 */
const normalizeMessages = messages => {
    const result = {};
    for (const id of Object.keys(messages).sort()) {
        const string = messages[id];
        if (typeof string === 'string') {
            // Don't touch normal strings.
            result[id] = string;
        } else if (typeof string.string === 'string') {
            // Convert structured strings with context to normal strings.
            result[id] = string.string;
        } else {
            // Recurse into nested message objects.
            result[id] = normalizeMessages(string);
        }
    }
    return result;
};

/**
 * @param {NestedRecord<string>} localeMessages
 * @param {NestedRecord<string>} sourceMessages
 * @returns {NestedRecord<string>}
 */
const removeRedundantMessages = (localeMessages, sourceMessages) => {
    const result = {};
    for (const [messageId, messageContent] of Object.entries(localeMessages)) {
        const string = messageContent;
        const sourceString = sourceMessages[messageId];
        if (typeof string === 'string') {
            // Copy strings that do not exactly match their English counterpart.
            if (string !== sourceString) {
                result[messageId] = string;
            }
        } else {
            // Recurse into nested objects.
            const nested = removeRedundantMessages(string, sourceString);
            if (Object.keys(nested).length !== 0) {
                result[messageId] = nested;
            }
        }
    }
    return result;
};

/**
 * @param {string[]} locales
 */
const createProgressPrinter = locales => {
    const RESET = `\u001b[0m`;
    const BOLD = `\u001b[1m`;
    const GRAY = '\u001b[90m';
    const BLUE = `\u001b[34m`;
    const GREEN = '\u001b[32m';
    const CLEAR = '\u001b[0k';

    const NOT_STARTED = 0;
    const STARTED = 1;
    const FINISHED = 2;

    let ended = false;
    const states = {};
    for (const locale of locales) {
        states[locale] = NOT_STARTED;
    }

    const print = () => {
        if (ended) {
            return;
        }
        const items = Object.entries(states).map(([locale, state]) => {
            let color = '??';
            if (state === NOT_STARTED) color = GRAY;
            if (state === STARTED) color = BLUE;
            if (state === FINISHED) color = BOLD + GREEN;
            return `${color}${locale}${RESET}`;
        });
        const total = locales.length;
        const totalFinished = Object.values(states).filter(i => i === FINISHED).length;
        process.stdout.write(`\r${CLEAR}${items.join(' ')}${RESET} ${totalFinished}/${total}`);
    };

    const startedItem = locale => {
        states[locale] = STARTED;
        print();
    };

    const finishedItem = locale => {
        states[locale] = FINISHED;
        print();
    };

    const end = () => {
        ended = true;
        // Move cursor to own line.
        console.log('');
    };

    print();
    return {
        startedItem,
        finishedItem,
        end
    };
};

/**
 * @param {string} resource Name of Transifex resource
 * @param {number} requiredCompletion Number from 0-1 indicating what % of strings must be translated.
 *  Locales that do not meet this threshold will not be included in the result.
 * @returns {Promise<Record<string, Record<string, string>>} Does not include source messages.
 */
const pullResource = async (resource, requiredCompletion) => {
    console.log(`Pulling ${resource}...`);

    const transifexStatistics = await txGetResourceStatistics(PROJECT, resource);
    const totalStrings = transifexStatistics[SOURCE_LOCALE];
    const threshold = Math.max(1, Math.round(totalStrings * requiredCompletion));
    const localesToFetch = Object.keys(supportedLocales).filter(locale => {
        const transifexLocale = scratchToTransifex[locale] || locale;
        const translatedStrings = transifexStatistics[transifexLocale];
        if (typeof translatedStrings !== 'number') {
            throw new Error(`Missing locale ${supportedLocales[locale].name} (${locale}) in ${resource}`);
        }
        return translatedStrings >= threshold;
    });

    const progress = createProgressPrinter(localesToFetch);

    const values = await batchMap(localesToFetch, CONCURRENCY_LIMIT, async locale => {
        progress.startedItem(locale);
        try {
            const messages = await txPull(PROJECT, resource, scratchToTransifex[locale] || locale);
            progress.finishedItem(locale);
            return {
                scratchLocale: locale,
                messages: normalizeMessages(messages)
            };
        } catch (error) {
            progress.end();
            // Transifex's error messages sometimes lack enough detail, so we will include
            // some extra information.
            console.error(`Could not fetch messages for locale: ${locale}`);
            throw error;
        }
    });

    const sourceMessages = values.find(i => i.scratchLocale === SOURCE_LOCALE).messages;
    const result = {};
    for (const pulled of values) {
        const slimmedMessages = removeRedundantMessages(pulled.messages, sourceMessages);
        if (Object.keys(slimmedMessages).length > 0) {
            result[pulled.scratchLocale.toLowerCase()] = slimmedMessages;
        }
    }

    progress.end();
    return result;
};

/**
 * @param {string} path
 * @returns {boolean}
 */
const isDirectorySync = path => {
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
 * @param {NestedRecord<string, string>} messages
 * @returns {Record<string, string>}
 */
const generateSmallestLocaleNamesMap = messages => {
    const lowercaseSupportedLocales = {};
    for (const [locale, value] of Object.entries(supportedLocales)) {
        lowercaseSupportedLocales[locale.toLowerCase()] = value;
    }
    const result = {
        [SOURCE_LOCALE]: supportedLocales[SOURCE_LOCALE].name
    };
    for (const locale of Object.keys(messages)) {
        result[locale] = lowercaseSupportedLocales[locale].name;
    }
    return result;
};

const pullGui = async () => {
    const scratchGui = pathUtil.join(__dirname, '../../scratch-gui');
    if (!isDirectorySync(scratchGui)) {
        console.log('Skipping editor; could not find scratch-gui.');
        return;
    }

    const guiTranslationsFile = pathUtil.join(scratchGui, 'src/lib/tw-translations/generated-translations.json');
    // These translations build upon scratch-l10n, so the threshold should be 0.
    const guiTranslations = await pullResource('guijson', 0);
    fs.writeFileSync(guiTranslationsFile, JSON.stringify(guiTranslations, null, 4));

    const addonsTranslationsFile = pathUtil.join(scratchGui, 'src/addons/settings/translations.json');
    const addonsTranslations = await pullResource('addonsjson', 0.7);
    fs.writeFileSync(addonsTranslationsFile, JSON.stringify(addonsTranslations, null, 4));
};

const pullPackager = async () => {
    const packager = pathUtil.join(__dirname, '../../packager');
    if (!isDirectorySync(packager)) {
        console.log('Skipping packager; could not find packager.');
        return;
    }

    const translations = await pullResource('packagerjson', 0.5);

    // Delete old JSON files. Some languages that were previously supported might no longer be.
    const localesDirectory = pathUtil.join(packager, 'src', 'locales');
    for (const name of fs.readdirSync(localesDirectory)) {
        if (name.endsWith('.json') && name !== 'en.json') {
            fs.unlinkSync(pathUtil.join(localesDirectory, name));
        }
    }

    // Write the individual JSON files
    for (const [locale, messages] of Object.entries(translations)) {
        const path = pathUtil.join(localesDirectory, `${locale}.json`);
        fs.writeFileSync(path, JSON.stringify(messages, null, 4));
    }

    // Write the index.js manifest
    const index = pathUtil.join(localesDirectory, 'index.js');
    const oldContent = fs.readFileSync(index, 'utf-8');
    const newContent = oldContent.replace(/\/\*===\*\/[\s\S]+\/\*===\*\//m, `/*===*/\n${
        Object.keys(translations)
            .map(i => `  ${JSON.stringify(i)}: () => require(${JSON.stringify(`./${i}.json`)})`)
            .join(',\n')
    },\n  /*===*/`);
    fs.writeFileSync(index, newContent);

    // Write locale-names.json
    const localeNames = generateSmallestLocaleNamesMap(translations);
    fs.writeFileSync(pathUtil.join(localesDirectory, 'locale-names.json'), JSON.stringify(localeNames, null, 4));
};

const pullDesktop = async () => {
    const desktop = pathUtil.join(__dirname, '../../turbowarp-desktop');
    if (!isDirectorySync(desktop)) {
        console.log('Skipping desktop; could not find turbowarp-desktop.');
        return;
    }

    // Desktop app translations
    const desktopTranslations = await pullResource('desktopnewjson', 0.5);
    fs.writeFileSync(
        pathUtil.join(desktop, 'src-main/l10n/generated-translations.json'),
        JSON.stringify(desktopTranslations, null, 4)
    );

    // Website translations
    const webTranslations = await pullResource('desktopturbowarporg-redesign', 0.7);
    const localeNames = generateSmallestLocaleNamesMap(webTranslations);
    const indexHtml = pathUtil.join(desktop, 'docs', 'index.html');
    const oldContent = fs.readFileSync(indexHtml, 'utf-8');
    const newContent = oldContent
        .replace(
            / *<!-- L10N_START -->[\s\S]*?<!-- L10N_END -->/gm,
            [
                '<!-- L10N_START -->',
                ...Object.entries(webTranslations).map(([locale, data]) => (
                    `<script type="generated-translations" data-locale="${locale}">${JSON.stringify(data)}</script>`
                )),
                '<!-- L10N_END -->'
            ].map(line => `    ${line}`).join('\n')
        )
        .replace(
            /<script type="generated-locale-names">[\s\S]+?<\/script>/,
            `<script type="generated-locale-names">${JSON.stringify(localeNames)}</script>`
        );
    fs.writeFileSync(indexHtml, newContent);

    const storeListings = await pullResource('store-listingsyaml', 1);
    fs.writeFileSync(
        pathUtil.join(desktop, 'store-listings/imported.json'),
        JSON.stringify(storeListings, null, 4)
    );
};

const pullExtensions = async () => {
    const extensions = pathUtil.join(__dirname, '../../extensions');
    if (!isDirectorySync(extensions)) {
        console.log('Skipping extensions; could not find extensions.');
        return;
    }

    const metadataTranslations = await pullResource('extension-metadata', 0);
    fs.writeFileSync(
        pathUtil.join(extensions, 'translations/extension-metadata.json'),
        JSON.stringify(metadataTranslations, null, 4)
    );

    const runtimeTranslations = await pullResource('extensions', 0);
    fs.writeFileSync(
        pathUtil.join(extensions, 'translations/extension-runtime.json'),
        JSON.stringify(runtimeTranslations, null, 4)
    );
};

const pullEverything = async () => {
    try {
        console.log('DOWNLOADING from Transifex...');
        await pullGui();
        await pullPackager();
        await pullDesktop();
        await pullExtensions();
    } catch (e) {
        console.error(e);
        process.exit(1);
    }
};

pullEverything();
