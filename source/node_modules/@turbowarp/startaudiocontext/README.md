# @turbowarp/startaudiocontext

a replacement for https://github.com/tambien/StartAudioContext/ for TurboWarp. it doesn't use any loops so no log spam.

```js
const StartAudioContext = require('@turbowarp/startaudiocontext');
const audioContext = new AudioContext();
StartAudioContext(audioContext);
```
