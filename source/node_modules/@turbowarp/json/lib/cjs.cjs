'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 * @param {string} source
 * @returns {unknown}
 */
const _parse = (source) => {
  let index = 0;

  const lineInfo = () => {
    let line = 0;
    let column = 0;
    for (let i = 0; i < index; i++) {
      if (source[i] === '\n') {
        line++;
        column = 0;
      } else {
        column++;
      }
    }
    return { line: line + 1, column: column + 1 };
  };

  const error = (message) => {
    const { line, column } = lineInfo();
    throw new SyntaxError(
      `${message} (Line ${line} Column ${column})`
    );
  };

  const charAt = (index) => {
    if (index >= source.length) {
      error('Unexpected end of input');
    }
    return source[index];
  };

  const currentChar = () => charAt(index);

  const next = () => {
    index++;
  };

  const expect = (char) => {
    if (currentChar() !== char) {
      error(`Expected '${char}' but found '${currentChar()}'`);
    }
    next();
  };

  const peek = (length = 1, offset = 1) => {
    if (index + offset + length > source.length) {
      return '';
    }
    if (length === 1) {
      return charAt(index + offset);
    }
    let result = '';
    for (let i = 0; i < length; i++) {
      result += charAt(index + offset + i);
    }
    return result;
  };

  const skipWhitespaceAndComments = () => {
    while (true) {
      if (/\s/.test(currentChar())) {
        next();
      } else {
        const next2 = peek(2, 0);
        if (next2 === '//') {
          next(); // consume /
          next(); // consume /
          while (currentChar() !== '\n') {
            next();
          }
        } else if (next2 === '/*') {
          next(); // consume /
          next(); // consume *
          while (peek(2, 0) !== '*/') {
            next();
          }
          next(); // consume *
          next(); // consume /
        } else {
          break;
        }
      }
    }
  };

  const parseValue = () => {
    skipWhitespaceAndComments();
    const char = currentChar();
    switch (char) {
      case '"':
        return parseString();
      case '{':
        return parseObject();
      case '[':
        return parseList();
      case '0':
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
      case '-':
        return parseNumber();
      default:
        return parseWord();
    }
  };

  const parseWord = () => {
    if (peek(4, 0) === 'null') {
      for (let i = 0; i < 4; i++) {
        next();
      }
      return null;
    }
    if (peek(4, 0) === 'true') {
      for (let i = 0; i < 4; i++) {
        next();
      }
      return true;
    }
    if (peek(5, 0) === 'false') {
      for (let i = 0; i < 5; i++) {
        next();
      }
      return false;
    }
    // Non-standard extensions
    if (peek(8, 0) === 'Infinity') {
      for (let i = 0; i < 8; i++) {
        next();
      }
      return Infinity;
    }
    if (peek(3, 0) === 'NaN') {
      for (let i = 0; i < 3; i++) {
        next();
      }
      return NaN;
    }
    error(`Unexpected character '${currentChar()}'`);
  };

  const parseNumber = () => {
    // Non-standard extension
    if (peek(9, 0) === '-Infinity') {
      for (let i = 0; i < 9; i++) {
        next();
      }
      return -Infinity;
    }
    let number = '';
    while (true) {
      number += currentChar();
      if (/[\d.e+-]/i.test(peek())) {
        next();
      } else {
        break;
      }
    }
    next();
    const value = +number;
    if (Number.isNaN(value)) {
      error(`Not a number: ${number}`);
    }
    return value;    
  };

  const parseString = () => {
    expect('"');
    let result = '';
    while (true) {
      const char = currentChar();
      if (char === '"') {
        break;
      } else if (char === '\\') {
        next();
        switch (currentChar()) {
          case '"':
            result += '"';
            break;
          case '/':
            result += '/';
            break;
          case '\\':
            result += '\\';
            break;
          case 'b':
            result += '\b';
            break;
          case 'f':
            result += '\f';
            break;
          case 'n':
            result += '\n';
            break;
          case 'r':
            result += '\r';
            break;
          case 't':
            result += '\t';
            break;
          case 'u': {
            let hexString = '';
            for (let i = 0; i < 4; i++) {
              next();
              const nextChar = currentChar();
              if (!/[0-9a-f]/i.test(nextChar)) {
                error(`Invalid hex code: ${nextChar}`);
              }
              hexString += nextChar;
            }
            const hexNumber = Number.parseInt(hexString, 16);
            const letter = String.fromCharCode(hexNumber);
            result += letter;
            break;
          }
          default:
            error(`Invalid escape code: \\${currentChar()}`);
        }
      } else {
        result += char;
      }
      next();
    }
    expect('"');
    return result;
  };

  const parseList = () => {
    expect('[');
    skipWhitespaceAndComments();
    const result = [];
    while (true) {
      skipWhitespaceAndComments();
      if (currentChar() === ']') {
        break;
      }
      const value = parseValue();
      result.push(value);
      skipWhitespaceAndComments();
      if (currentChar() === ',') {
        next();
      } else {
        break;
      }
    }
    expect(']');
    return result;
  };

  const parseObject = () => {
    expect('{');
    skipWhitespaceAndComments();
    const result = {};
    while (true) {
      skipWhitespaceAndComments();
      if (currentChar() === '}') {
        break;
      }
      const key = parseString();
      skipWhitespaceAndComments();
      expect(':');
      const value = parseValue();
      result[key] = value;
      skipWhitespaceAndComments();
      if (currentChar() === ',') {
        next();
      } else {
        break;
      }
    }
    expect('}');
    return result;
  };

  return parseValue();
};

/**
 * @param {string} source
 * @returns {unknown}
 */
const parse = (source) => {
  try {
    return JSON.parse(source);
  } catch (e1) {
    try {
      return _parse(source);
    } catch (e2) {
      // The error from JSON.parse is probably more useful.
      throw e1;
    }
  }
};

/**
 * @param {unknown} object
 * @returns {string}
 */
const stringify = (object) => {
  if (typeof object === 'string') {
    return JSON.stringify(object);
  }
  if (typeof object === 'number' || typeof object === 'boolean') {
    // Difference from regular JSON: [-]Infinity and NaN will be sanitized as-is
    return object.toString();
  }
  if (object === null || typeof object === 'undefined' || typeof object === 'symbol') {
    return 'null';
  }
  if (Array.isArray(object)) {
    return `[${object.map((i) => stringify(i)).join(',')}]`;
  }
  if (typeof object === 'object') {
    let result = '{';
    let isFirstItem = true;
    const keys = Object.keys(object);
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      const value = object[key];
      if (typeof value !== 'undefined') {
        if (!isFirstItem) {
          result += ',';
        }
        result += `${JSON.stringify(key)}:${stringify(value)}`;
        isFirstItem = false;
      }
    }
    result += '}';
    return result;
  }
  if (typeof object === 'bigint') {
    throw new TypeError('Can not stringify bigint');
  }
  throw new TypeError(`Can not stringify: ${object}`);
};

exports._parse = _parse;
exports.parse = parse;
exports.stringify = stringify;
