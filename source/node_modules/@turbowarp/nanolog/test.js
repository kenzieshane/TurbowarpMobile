const nanolog = require('./index');

const root = nanolog();
root.debug('debug');
root.info('info');
root.log('log');
root.warn('warn');
root.error('error');

const child1 = root('abc');
child1.debug('debug');
child1.info('info');
child1.log('log');
child1.warn('warn');
child1.error('error');

const child2 = child1('def');
child2.debug('debug');
child2.info('info');
child2.log('log');
child2.warn('warn');
child2.error('error');
