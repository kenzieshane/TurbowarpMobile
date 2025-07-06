const DOCUMENT_EVENTS = [
    'mousedown',
    'mouseup',
    'keydown',
    'keyup',
    'touchstart',
    'touchend'
];

/**
 * @param {AudioContext} context
 */
const startAudioContext = (context) => {
    if (context.state === 'running') {
        // nothing to do
        return;
    }

    const dispose = () => {
        context.removeEventListener('statechange', onStateChange);
        for (const event of DOCUMENT_EVENTS) {
            document.body.removeEventListener(event, onUserGesture);
        }
    };

    const onStateChange = () => {
        if (context.state === 'running') {
            dispose();
        }
    };
    context.addEventListener('statechange', onStateChange);

    const onUserGesture = () => {
        context.resume();
    };
    for (const event of DOCUMENT_EVENTS) {
        document.body.addEventListener(event, onUserGesture);
    }
};

module.exports = startAudioContext;
