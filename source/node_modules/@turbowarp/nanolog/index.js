// only use colors in non-browser environments
const addColors = typeof document === 'undefined';

const RESET = addColors ? '\u001b[0m' : '';
const GRAY = addColors ? '\u001b[90m' : '';
const BLUE = addColors ? '\u001b[34m' : '';
const CYAN = addColors ? '\u001b[36m' : '';
const YELLOW = addColors ? '\u001b[33m' : '';
const RED = addColors ? '\u001b[31m' : '';

const DEBUG = `${BLUE}debug${RESET}`;
const INFO = `${CYAN}info${RESET}`;
const WARN = `${YELLOW}warn${RESET}`;
const ERROR = `${RED}error${RESET}`;

const createLog = (namespace = '') => {
    const log = (childNamespace) => createLog(namespace ? `${namespace} ${childNamespace}` : childNamespace);

    const formattedNamespace = namespace ? [`${GRAY}${namespace}${RESET}`] : [];

    log.debug = log.log = console.debug.bind(console, ...formattedNamespace, DEBUG);
    log.info = console.log.bind(console, ...formattedNamespace, INFO)
    log.warn = log.warning = console.warn.bind(console, ...formattedNamespace, WARN)
    log.error = console.error.bind(console, ...formattedNamespace, ERROR);

    return log;
};

/**
 * @deprecated does nothing
 */
createLog.enable = createLog.disable = () => {};

module.exports = createLog;
