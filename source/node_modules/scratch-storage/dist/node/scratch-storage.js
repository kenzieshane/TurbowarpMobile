module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/arraybuffer-loader/index.js!./src/builtins/defaultBitmap.png":
/*!**************************************************************************!*\
  !*** ./node_modules/arraybuffer-loader!./src/builtins/defaultBitmap.png ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ../../node_modules/arraybuffer-loader/lib/to-array-buffer.js */ "./node_modules/arraybuffer-loader/lib/to-array-buffer.js")("iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAAAAADmVT4XAAADZElEQVR42u3a70vbQBgH8O/7vOibvsmbFUEEWUGGUhQ25nDuhSKIUFDxlYi0SAd94atRmFiHCH2x4W8iiNtwowXRgd1QipJYY3N/1F4kTQ6XLKS9yyHcvWyO8MnT5y53Tw5EcIMESIAESIAESIAESIAEPFVAq/6l8G4oAQCp4aniwbUVJ6BVzafwqKXy1VZMgNb+CHzbyK4ZB+Bi0nnk0VyhsDiSoAmvvnMHmGUVAF6UG+0ffsxRhsRHky/AyCsAUpumX0wAAIs6T4CxDADDtcdZsal6gjmdH8AsAEC6+s8Fa48SFExeAKusAEju+V367AmUCi9ANQ0AU3pwcOw2cMEH0FwAAKz5X228pRLR5AI4TgIAtIDL24oLUE94AB6W7LsH/cONN14Ilh44AOqD9s2LQR1KHiB9zgGgOSGeuA3ocPrME1Q4ANaceyePAzrcjHmAZYs9IBeW4/fzHiAwTCwAgTle9ACZK44ALDT9e6x7gL4aT0BQCHb4AqgA5/1TTOMLoJ7vZSMM0H/GHnCeDnu+CrU8vGYPcN5FADBYD0vCaYPDy+i0p337GSMsS1Z4vA3t9QgAZTt0IuIxFRPSKicAQHlvhk3FXF5GhBByMa8qo/sBO6BarwuYbYrYnFKDYEvE7phKgcxvEQBqnvhgiQCUOgoAO4C3JOS3L/hv23UXxVldBECfcueAqpAa0WGy/QeULREAY6aTXRFDgBuA13+ElOncAERMAGaA9hBQD4gQQHsIRE1AZoD2xrgQS5nOZyHgFKmWDSIG4GRAVidiAE4GRB6AzAB2AKIPQFaA5myHA5AV4ESNugZhC7BLR50lIBPAebrzBGQCKAFQNSIMcDvRTQIwAHxNApM3RBygGK0uyhxwOwGsPAgEnPWj5ycRCNiJtBHlAChGKQVwANzPY+CXSMDNWISiLA9AfRA5IhJQ68UnoQAt+AtOPIBKhJosF8B6UM0yLkAxQk2WCyDX9SiUh1gkQAIkoCuAvjGuquMbuijAtwG7MPL8yBICOHSPk3W8Ne8KcEUdmBi6FADYos+QleIH0N/ogOxd7AD6uAS6WRU8WcBdlgZMG/EnYUlwEpLLoQ4PjzGbiA5UsRMRsbQ+5ziDJmYqJuR6NaMomdXuFuZyPSABEiABEiABEiABEiAc8Bd6VyvCEKGqcQAAAABJRU5ErkJggg==")

/***/ }),

/***/ "./node_modules/arraybuffer-loader/index.js!./src/builtins/defaultSound.wav":
/*!*************************************************************************!*\
  !*** ./node_modules/arraybuffer-loader!./src/builtins/defaultSound.wav ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ../../node_modules/arraybuffer-loader/lib/to-array-buffer.js */ "./node_modules/arraybuffer-loader/lib/to-array-buffer.js")("UklGRiYAAABXQVZFZm10IBAAAAABAAEAIlYAAESsAAACABAAZGF0YQIAAAAAAA==")

/***/ }),

/***/ "./node_modules/arraybuffer-loader/index.js!./src/builtins/defaultVector.svg":
/*!**************************************************************************!*\
  !*** ./node_modules/arraybuffer-loader!./src/builtins/defaultVector.svg ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ../../node_modules/arraybuffer-loader/lib/to-array-buffer.js */ "./node_modules/arraybuffer-loader/lib/to-array-buffer.js")("PD94bWwgdmVyc2lvbj0iMS4wIj8+Cjxzdmcgd2lkdGg9IjEyOCIgaGVpZ2h0PSIxMjgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8Zz4KICA8cmVjdCBmaWxsPSIjQ0NDIiBoZWlnaHQ9IjEyOCIgd2lkdGg9IjEyOCIvPgogIDx0ZXh0IGZpbGw9ImJsYWNrIiB5PSIxMDciIHg9IjM1LjUiIGZvbnQtc2l6ZT0iMTI4Ij4/PC90ZXh0PgogPC9nPgo8L3N2Zz4K")

/***/ }),

/***/ "./node_modules/arraybuffer-loader/lib/to-array-buffer.js":
/*!****************************************************************!*\
  !*** ./node_modules/arraybuffer-loader/lib/to-array-buffer.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (base64Data) {
  var isBrowser = typeof window !== 'undefined' && typeof window.atob === 'function'
  var binary = isBrowser ? window.atob(base64Data) : Buffer.from(base64Data, 'base64').toString('binary')
  var bytes = new Uint8Array(binary.length)

  for (var i = 0; i < binary.length; ++i) {
    bytes[i] = binary.charCodeAt(i)
  }

  return bytes.buffer
}


/***/ }),

/***/ "./node_modules/fastestsmallesttextencoderdecoder/NodeJS/EncoderAndDecoderNodeJS.min.mjs":
/*!***********************************************************************************************!*\
  !*** ./node_modules/fastestsmallesttextencoderdecoder/NodeJS/EncoderAndDecoderNodeJS.min.mjs ***!
  \***********************************************************************************************/
/*! exports provided: TextDecoder, TextEncoder, decode, encode */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextDecoder", function() { return TextDecoder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextEncoder", function() { return TextEncoder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decode", function() { return decode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "encode", function() { return encode; });
var a="undefined"==typeof global?"undefined"===typeof self?{}:self:global,p=String.fromCharCode,q={}.toString,r=a.SharedArrayBuffer,v=r?q.call(r):"",w=a.Uint8Array,x=w?q.call(ArrayBuffer.prototype):"",y=a.Buffer;try{!y&&a.require&&(y=a.require("Buffer"));var z=y.prototype,A=q.call(z)}catch(g){}var B=y.allocUnsafe,C=!!w&&!y,D=new Uint16Array(32),E=!y||!!w&&w.prototype.isPrototypeOf(z),G=F.prototype;function H(){}
function I(g){var h=g&&g.buffer||g,c=q.call(h);if(c!==x&&c!==A&&c!==v&&"[object ArrayBuffer]"!==c&&void 0!==g)throw TypeError("Failed to execute 'decode' on 'TextDecoder': The provided value is not of type '(ArrayBuffer or ArrayBufferView)'");g=E?new w(h):h||[];c=h="";for(var b=0,d=g.length|0,u=d-32|0,f,e,k=0,t=0,m,l=0,n=-1;b<d;){for(f=b<=u?32:d-b|0;l<f;b=b+1|0,l=l+1|0){e=g[b]&255;switch(e>>4){case 15:m=g[b=b+1|0]&255;if(2!==m>>6||247<e){b=b-1|0;break}k=(e&7)<<6|m&63;t=5;e=256;case 14:m=g[b=b+1|0]&
255,k<<=6,k|=(e&15)<<6|m&63,t=2===m>>6?t+4|0:24,e=e+256&768;case 13:case 12:m=g[b=b+1|0]&255,k<<=6,k|=(e&31)<<6|m&63,t=t+7|0,b<d&&2===m>>6&&k>>t&&1114112>k?(e=k,k=k-65536|0,0<=k&&(n=(k>>10)+55296|0,e=(k&1023)+56320|0,31>l?(D[l]=n,l=l+1|0,n=-1):(m=n,n=e,e=m))):(e>>=8,b=b-e-1|0,e=65533),k=t=0,f=b<=u?32:d-b|0;default:D[l]=e;continue;case 11:case 10:case 9:case 8:}D[l]=65533}c+=p(D[0],D[1],D[2],D[3],D[4],D[5],D[6],D[7],D[8],D[9],D[10],D[11],D[12],D[13],D[14],D[15],D[16],D[17],D[18],D[19],D[20],D[21],
D[22],D[23],D[24],D[25],D[26],D[27],D[28],D[29],D[30],D[31]);32>l&&(c=c.slice(0,l-32|0));if(b<d){if(D[0]=n,l=~n>>>31,n=-1,c.length<h.length)continue}else-1!==n&&(c+=p(n));h+=c;c=""}return h}H.prototype.decode=I;function F(){}
function J(g){g=void 0===g?"":""+g;var h=g.length|0,c=C?new w((h<<1)+8|0):B?B((h<<1)+8|0):new y((h<<1)+8|0),b,d=0,u=!1;for(b=0;b<h;b=b+1|0,d=d+1|0){var f=g.charCodeAt(b)|0;if(127>=f)c[d]=f;else{if(2047>=f)c[d]=192|f>>6;else{a:{if(55296<=f)if(56320>f){var e=g.charCodeAt(b=b+1|0)|0;if(56320<=e&&57343>=e){f=(f<<10)+e-56613888|0;if(65535<f){c[d]=240|f>>18;c[d=d+1|0]=128|f>>12&63;c[d=d+1|0]=128|f>>6&63;c[d=d+1|0]=128|f&63;continue}break a}f=65533}else 57343>=f&&(f=65533);!u&&b<<1<d&&b<<1<(d-7|0)&&(u=!0,
e=C?new w(3*h):B?B(3*h):new y(3*h),e.set(c),c=e)}c[d]=224|f>>12;c[d=d+1|0]=128|f>>6&63}c[d=d+1|0]=128|f&63}}return c.subarray(0,d)}G.encode=J;function K(g,h){var c=g[h];return function(){return c.apply(g,arguments)}}var L=a.TextDecoder,M=a.TextEncoder;var TextDecoder=L||H,TextEncoder=M||F,decode=L?K(new L,"decode"):I,encode=M?K(new M,"encode"):J;//AnonyCo
//# sourceMappingURL=https://cdn.jsdelivr.net/gh/AnonyCo/FastestSmallestTextEncoderDecoder/NodeJS/EncoderAndDecoderNodeJS.min.mjs.map


/***/ }),

/***/ "./node_modules/microee/index.js":
/*!***************************************!*\
  !*** ./node_modules/microee/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function M() { this._events = {}; }
M.prototype = {
  on: function(ev, cb) {
    this._events || (this._events = {});
    var e = this._events;
    (e[ev] || (e[ev] = [])).push(cb);
    return this;
  },
  removeListener: function(ev, cb) {
    var e = this._events[ev] || [], i;
    for(i = e.length-1; i >= 0 && e[i]; i--){
      if(e[i] === cb || e[i].cb === cb) { e.splice(i, 1); }
    }
  },
  removeAllListeners: function(ev) {
    if(!ev) { this._events = {}; }
    else { this._events[ev] && (this._events[ev] = []); }
  },
  listeners: function(ev) {
    return (this._events ? this._events[ev] || [] : []);
  },
  emit: function(ev) {
    this._events || (this._events = {});
    var args = Array.prototype.slice.call(arguments, 1), i, e = this._events[ev] || [];
    for(i = e.length-1; i >= 0 && e[i]; i--){
      e[i].apply(this, args);
    }
    return this;
  },
  when: function(ev, cb) {
    return this.once(ev, cb, true);
  },
  once: function(ev, cb, when) {
    if(!cb) return this;
    function c() {
      if(!when) this.removeListener(ev, c);
      if(cb.apply(this, arguments) && when) this.removeListener(ev, c);
    }
    c.cb = cb;
    this.on(ev, c);
    return this;
  }
};
M.mixin = function(dest) {
  var o = M.prototype, k;
  for (k in o) {
    o.hasOwnProperty(k) && (dest.prototype[k] = o[k]);
  }
};
module.exports = M;


/***/ }),

/***/ "./node_modules/minilog/lib/common/filter.js":
/*!***************************************************!*\
  !*** ./node_modules/minilog/lib/common/filter.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// default filter
var Transform = __webpack_require__(/*! ./transform.js */ "./node_modules/minilog/lib/common/transform.js");

var levelMap = { debug: 1, info: 2, warn: 3, error: 4 };

function Filter() {
  this.enabled = true;
  this.defaultResult = true;
  this.clear();
}

Transform.mixin(Filter);

// allow all matching, with level >= given level
Filter.prototype.allow = function(name, level) {
  this._white.push({ n: name, l: levelMap[level] });
  return this;
};

// deny all matching, with level <= given level
Filter.prototype.deny = function(name, level) {
  this._black.push({ n: name, l: levelMap[level] });
  return this;
};

Filter.prototype.clear = function() {
  this._white = [];
  this._black = [];
  return this;
};

function test(rule, name) {
  // use .test for RegExps
  return (rule.n.test ? rule.n.test(name) : rule.n == name);
};

Filter.prototype.test = function(name, level) {
  var i, len = Math.max(this._white.length, this._black.length);
  for(i = 0; i < len; i++) {
    if(this._white[i] && test(this._white[i], name) && levelMap[level] >= this._white[i].l) {
      return true;
    }
    if(this._black[i] && test(this._black[i], name) && levelMap[level] <= this._black[i].l) {
      return false;
    }
  }
  return this.defaultResult;
};

Filter.prototype.write = function(name, level, args) {
  if(!this.enabled || this.test(name, level)) {
    return this.emit('item', name, level, args);
  }
};

module.exports = Filter;


/***/ }),

/***/ "./node_modules/minilog/lib/common/minilog.js":
/*!****************************************************!*\
  !*** ./node_modules/minilog/lib/common/minilog.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Transform = __webpack_require__(/*! ./transform.js */ "./node_modules/minilog/lib/common/transform.js"),
    Filter = __webpack_require__(/*! ./filter.js */ "./node_modules/minilog/lib/common/filter.js");

var log = new Transform(),
    slice = Array.prototype.slice;

exports = module.exports = function create(name) {
  var o   = function() { log.write(name, undefined, slice.call(arguments)); return o; };
  o.debug = function() { log.write(name, 'debug', slice.call(arguments)); return o; };
  o.info  = function() { log.write(name, 'info',  slice.call(arguments)); return o; };
  o.warn  = function() { log.write(name, 'warn',  slice.call(arguments)); return o; };
  o.error = function() { log.write(name, 'error', slice.call(arguments)); return o; };
  o.log   = o.debug; // for interface compliance with Node and browser consoles
  o.suggest = exports.suggest;
  o.format = log.format;
  return o;
};

// filled in separately
exports.defaultBackend = exports.defaultFormatter = null;

exports.pipe = function(dest) {
  return log.pipe(dest);
};

exports.end = exports.unpipe = exports.disable = function(from) {
  return log.unpipe(from);
};

exports.Transform = Transform;
exports.Filter = Filter;
// this is the default filter that's applied when .enable() is called normally
// you can bypass it completely and set up your own pipes
exports.suggest = new Filter();

exports.enable = function() {
  if(exports.defaultFormatter) {
    return log.pipe(exports.suggest) // filter
              .pipe(exports.defaultFormatter) // formatter
              .pipe(exports.defaultBackend); // backend
  }
  return log.pipe(exports.suggest) // filter
            .pipe(exports.defaultBackend); // formatter
};



/***/ }),

/***/ "./node_modules/minilog/lib/common/transform.js":
/*!******************************************************!*\
  !*** ./node_modules/minilog/lib/common/transform.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var microee = __webpack_require__(/*! microee */ "./node_modules/microee/index.js");

// Implements a subset of Node's stream.Transform - in a cross-platform manner.
function Transform() {}

microee.mixin(Transform);

// The write() signature is different from Node's
// --> makes it much easier to work with objects in logs.
// One of the lessons from v1 was that it's better to target
// a good browser rather than the lowest common denominator
// internally.
// If you want to use external streams, pipe() to ./stringify.js first.
Transform.prototype.write = function(name, level, args) {
  this.emit('item', name, level, args);
};

Transform.prototype.end = function() {
  this.emit('end');
  this.removeAllListeners();
};

Transform.prototype.pipe = function(dest) {
  var s = this;
  // prevent double piping
  s.emit('unpipe', dest);
  // tell the dest that it's being piped to
  dest.emit('pipe', s);

  function onItem() {
    dest.write.apply(dest, Array.prototype.slice.call(arguments));
  }
  function onEnd() { !dest._isStdio && dest.end(); }

  s.on('item', onItem);
  s.on('end', onEnd);

  s.when('unpipe', function(from) {
    var match = (from === dest) || typeof from == 'undefined';
    if(match) {
      s.removeListener('item', onItem);
      s.removeListener('end', onEnd);
      dest.emit('unpipe');
    }
    return match;
  });

  return dest;
};

Transform.prototype.unpipe = function(from) {
  this.emit('unpipe', from);
  return this;
};

Transform.prototype.format = function(dest) {
  throw new Error([
    'Warning: .format() is deprecated in Minilog v2! Use .pipe() instead. For example:',
    'var Minilog = require(\'minilog\');',
    'Minilog',
    '  .pipe(Minilog.backends.console.formatClean)',
    '  .pipe(Minilog.backends.console);'].join('\n'));
};

Transform.mixin = function(dest) {
  var o = Transform.prototype, k;
  for (k in o) {
    o.hasOwnProperty(k) && (dest.prototype[k] = o[k]);
  }
};

module.exports = Transform;


/***/ }),

/***/ "./node_modules/minilog/lib/index.js":
/*!*******************************************!*\
  !*** ./node_modules/minilog/lib/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./common/minilog.js */ "./node_modules/minilog/lib/common/minilog.js");

var consoleLogger = __webpack_require__(/*! ./node/console.js */ "./node_modules/minilog/lib/node/console.js");

// if we are running inside Electron then use the web version of console.js
var isElectron = (typeof window !== 'undefined' && window.process && window.process.type === 'renderer');
if (isElectron) {
  consoleLogger = __webpack_require__(/*! ./web/console.js */ "./node_modules/minilog/lib/web/console.js").minilog;
}

// intercept the pipe method and transparently wrap the stringifier, if the
// destination is a Node core stream

module.exports.Stringifier = __webpack_require__(/*! ./node/stringify.js */ "./node_modules/minilog/lib/node/stringify.js");

var oldPipe = module.exports.pipe;
module.exports.pipe = function(dest) {
  if(dest instanceof __webpack_require__(/*! stream */ "stream")) {
    return oldPipe.call(module.exports, new (module.exports.Stringifier)).pipe(dest);
  } else {
    return oldPipe.call(module.exports, dest);
  }
};

module.exports.defaultBackend = consoleLogger;
module.exports.defaultFormatter = consoleLogger.formatMinilog;

module.exports.backends = {
  redis: __webpack_require__(/*! ./node/redis.js */ "./node_modules/minilog/lib/node/redis.js"),
  nodeConsole: consoleLogger,
  console: consoleLogger
};


/***/ }),

/***/ "./node_modules/minilog/lib/node/console.js":
/*!**************************************************!*\
  !*** ./node_modules/minilog/lib/node/console.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Transform = __webpack_require__(/*! ../common/transform.js */ "./node_modules/minilog/lib/common/transform.js");

function ConsoleBackend() { }

Transform.mixin(ConsoleBackend);

ConsoleBackend.prototype.write = function() {
  console.log.apply(console, arguments);
};

var e = new ConsoleBackend();

var levelMap = __webpack_require__(/*! ./formatters/util.js */ "./node_modules/minilog/lib/node/formatters/util.js").levelMap;

e.filterEnv = function() {
  console.error('Minilog.backends.console.filterEnv is deprecated in Minilog v2.');
  // return the instance of Minilog
  return __webpack_require__(/*! ../common/minilog.js */ "./node_modules/minilog/lib/common/minilog.js");
};

e.formatters = [
    'formatClean', 'formatColor', 'formatNpm',
    'formatLearnboost', 'formatMinilog', 'formatWithStack', 'formatTime'
];

e.formatClean = new (__webpack_require__(/*! ./formatters/clean.js */ "./node_modules/minilog/lib/node/formatters/clean.js"));
e.formatColor = new (__webpack_require__(/*! ./formatters/color.js */ "./node_modules/minilog/lib/node/formatters/color.js"));
e.formatNpm = new (__webpack_require__(/*! ./formatters/npm.js */ "./node_modules/minilog/lib/node/formatters/npm.js"));
e.formatLearnboost = new (__webpack_require__(/*! ./formatters/learnboost.js */ "./node_modules/minilog/lib/node/formatters/learnboost.js"));
e.formatMinilog = new (__webpack_require__(/*! ./formatters/minilog.js */ "./node_modules/minilog/lib/node/formatters/minilog.js"));
e.formatWithStack = new (__webpack_require__(/*! ./formatters/withstack.js */ "./node_modules/minilog/lib/node/formatters/withstack.js"));
e.formatTime = new (__webpack_require__(/*! ./formatters/time.js */ "./node_modules/minilog/lib/node/formatters/time.js"));

module.exports = e;


/***/ }),

/***/ "./node_modules/minilog/lib/node/formatters/clean.js":
/*!***********************************************************!*\
  !*** ./node_modules/minilog/lib/node/formatters/clean.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Transform = __webpack_require__(/*! ../../common/transform.js */ "./node_modules/minilog/lib/common/transform.js");

function FormatClean() {}

Transform.mixin(FormatClean);

FormatClean.prototype.write = function(name, level, args) {
  function pad(s) { return (s.toString().length == 1? '0'+s : s); }
  this.emit('item', (name ? name + ' ' : '') + (level ? level + ' ' : '') + args.join(' '));
};

module.exports = FormatClean;


/***/ }),

/***/ "./node_modules/minilog/lib/node/formatters/color.js":
/*!***********************************************************!*\
  !*** ./node_modules/minilog/lib/node/formatters/color.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Transform = __webpack_require__(/*! ../../common/transform.js */ "./node_modules/minilog/lib/common/transform.js"),
    style = __webpack_require__(/*! ./util.js */ "./node_modules/minilog/lib/node/formatters/util.js").style;

function FormatColor() {}

Transform.mixin(FormatColor);

FormatColor.prototype.write = function(name, level, args) {
  var colors = { debug: 'magenta', info: 'cyan', warn: 'yellow', error: 'red' };
  function pad(s) { return (s.toString().length == 4? ' '+s : s); }
  this.emit('item', (name ? name + ' ' : '')
          + (level ? style('- ' + pad(level.toUpperCase()) + ' -', colors[level]) + ' ' : '')
          + args.join(' '));
};

module.exports = FormatColor;


/***/ }),

/***/ "./node_modules/minilog/lib/node/formatters/learnboost.js":
/*!****************************************************************!*\
  !*** ./node_modules/minilog/lib/node/formatters/learnboost.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Transform = __webpack_require__(/*! ../../common/transform.js */ "./node_modules/minilog/lib/common/transform.js"),
    style = __webpack_require__(/*! ./util.js */ "./node_modules/minilog/lib/node/formatters/util.js").style;

function FormatLearnboost() {}

Transform.mixin(FormatLearnboost);

FormatLearnboost.prototype.write = function(name, level, args) {
  var colors = { debug: 'grey', info: 'cyan', warn: 'yellow', error: 'red' };
  this.emit('item', (name ? style(name +' ', 'grey') : '')
          + (level ? style(level, colors[level]) + ' ' : '')
          + args.join(' '));
};

module.exports = FormatLearnboost;


/***/ }),

/***/ "./node_modules/minilog/lib/node/formatters/minilog.js":
/*!*************************************************************!*\
  !*** ./node_modules/minilog/lib/node/formatters/minilog.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Transform = __webpack_require__(/*! ../../common/transform.js */ "./node_modules/minilog/lib/common/transform.js"),
    style = __webpack_require__(/*! ./util.js */ "./node_modules/minilog/lib/node/formatters/util.js").style,
    util = __webpack_require__(/*! util */ "util");

function FormatMinilog() {}

Transform.mixin(FormatMinilog);

FormatMinilog.prototype.write = function(name, level, args) {
  var colors = { debug: 'blue', info: 'cyan', warn: 'yellow', error: 'red' };
  this.emit('item', (name ? style(name +' ', 'grey') : '')
            + (level ? style(level, colors[level]) + ' ' : '')
            + args.map(function(item) {
              return (typeof item == 'string' ? item : util.inspect(item, null, 3, true));
            }).join(' '));
};

module.exports = FormatMinilog;


/***/ }),

/***/ "./node_modules/minilog/lib/node/formatters/npm.js":
/*!*********************************************************!*\
  !*** ./node_modules/minilog/lib/node/formatters/npm.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Transform = __webpack_require__(/*! ../../common/transform.js */ "./node_modules/minilog/lib/common/transform.js");

function FormatNpm() {}

Transform.mixin(FormatNpm);

FormatNpm.prototype.write = function(name, level, args) {
  var out = {
        debug: '\033[34;40m' + 'debug' + '\033[39m ',
        info: '\033[32m' + 'info'  + '\033[39m  ',
        warn: '\033[30;41m' + 'WARN' + '\033[0m  ',
        error: '\033[31;40m' + 'ERR!' + '\033[0m  '
      };
  this.emit('item', (name ? '\033[37;40m'+ name +'\033[0m ' : '')
          + (level && out[level]? out[level] : '')
          + args.join(' '));
};

module.exports = FormatNpm;


/***/ }),

/***/ "./node_modules/minilog/lib/node/formatters/time.js":
/*!**********************************************************!*\
  !*** ./node_modules/minilog/lib/node/formatters/time.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Transform = __webpack_require__(/*! ../../common/transform.js */ "./node_modules/minilog/lib/common/transform.js"),
    style = __webpack_require__(/*! ./util.js */ "./node_modules/minilog/lib/node/formatters/util.js").style,
    util = __webpack_require__(/*! util */ "util");

function FormatTime() {}

function timestamp() {
  var d = new Date();
  return ('0' + d.getDate()).slice(-2) + '-' +
    ('0' + (d.getMonth() + 1)).slice(-2) + '-' +
    d.getFullYear() + ' ' +
    ('0' + d.getHours()).slice(-2) + ':' +
    ('0' + d.getMinutes()).slice(-2) + ':' +
    ('0' + d.getSeconds()).slice(-2) + '.' +
    ('00' + d.getMilliseconds()).slice(-3);
}

Transform.mixin(FormatTime);

FormatTime.prototype.write = function(name, level, args) {
  var colors = { debug: 'blue', info: 'cyan', warn: 'yellow', error: 'red' };
  this.emit('item', style(timestamp() +' ', 'grey')
            + (name ? style(name +' ', 'grey') : '')
            + (level ? style(level, colors[level]) + ' ' : '')
            + args.map(function(item) {
              return (typeof item == 'string' ? item : util.inspect(item, null, 3, true));
            }).join(' '));
};

module.exports = FormatTime;


/***/ }),

/***/ "./node_modules/minilog/lib/node/formatters/util.js":
/*!**********************************************************!*\
  !*** ./node_modules/minilog/lib/node/formatters/util.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var styles = {
    //styles
    'bold'      : ['\033[1m',  '\033[22m'],
    'italic'    : ['\033[3m',  '\033[23m'],
    'underline' : ['\033[4m',  '\033[24m'],
    'inverse'   : ['\033[7m',  '\033[27m'],
    //grayscale
    'white'     : ['\033[37m', '\033[39m'],
    'grey'      : ['\033[90m', '\033[39m'],
    'black'     : ['\033[30m', '\033[39m'],
    //colors
    'blue'      : ['\033[34m', '\033[39m'],
    'cyan'      : ['\033[36m', '\033[39m'],
    'green'     : ['\033[32m', '\033[39m'],
    'magenta'   : ['\033[35m', '\033[39m'],
    'red'       : ['\033[31m', '\033[39m'],
    'yellow'    : ['\033[33m', '\033[39m']
  };

exports.levelMap = { debug: 1, info: 2, warn: 3, error: 4 };

exports.style = function(str, style) {
  return styles[style][0] + str + styles[style][1];
}



/***/ }),

/***/ "./node_modules/minilog/lib/node/formatters/withstack.js":
/*!***************************************************************!*\
  !*** ./node_modules/minilog/lib/node/formatters/withstack.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Transform = __webpack_require__(/*! ../../common/transform.js */ "./node_modules/minilog/lib/common/transform.js"),
    style = __webpack_require__(/*! ./util.js */ "./node_modules/minilog/lib/node/formatters/util.js").style;

function FormatNpm() {}

Transform.mixin(FormatNpm);

function noop(a){
  return a;
}

var types = {
  string: noop,
  number: noop,
  default: JSON.stringify.bind(JSON)
};

function stringify(args) {
  return args.map(function(arg) {
    return (types[typeof arg] || types.default)(arg);
  });
}

FormatNpm.prototype.write = function(name, level, args) {
  var colors = { debug: 'magenta', info: 'cyan', warn: 'yellow', error: 'red' };
  function pad(s) { return (s.toString().length == 4? ' '+s : s); }
  function getStack() {
    var orig = Error.prepareStackTrace;
    Error.prepareStackTrace = function (err, stack) {
      return stack;
    };
    var err = new Error;
    Error.captureStackTrace(err, arguments.callee);
    var stack = err.stack;
    Error.prepareStackTrace = orig;
    return stack;
  }

  var frame = getStack()[5],
      fileName = FormatNpm.fullPath ? frame.getFileName() : frame.getFileName().replace(/^.*\/(.+)$/, '/$1');

  this.emit('item', (name ? name + ' ' : '')
          + (level ? style(pad(level), colors[level]) + ' ' : '')
          + style(fileName + ":" + frame.getLineNumber(), 'grey')
          + ' '
          + stringify(args).join(' '));
};

FormatNpm.fullPath = true;

module.exports = FormatNpm;



/***/ }),

/***/ "./node_modules/minilog/lib/node/redis.js":
/*!************************************************!*\
  !*** ./node_modules/minilog/lib/node/redis.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function RedisBackend(options) {
  this.client = options.client;
  this.key = options.key;
}

RedisBackend.prototype.write = function(str) {
  this.client.rpush(this.key, str);
};

RedisBackend.prototype.end = function() {};

RedisBackend.prototype.clear = function(cb) {
  this.client.del(this.key, cb);
};

module.exports = RedisBackend;


/***/ }),

/***/ "./node_modules/minilog/lib/node/stringify.js":
/*!****************************************************!*\
  !*** ./node_modules/minilog/lib/node/stringify.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Transform = __webpack_require__(/*! ../common/transform.js */ "./node_modules/minilog/lib/common/transform.js");

function Stringify() {}

Transform.mixin(Stringify);

Stringify.prototype.write = function(name, level, args) {
  var result = [];
  if(name) result.push(name);
  if(level) result.push(level);
  result = result.concat(args);
  for(var i = 0; i < result.length; i++) {
    if(result[i] && typeof result[i] == 'object') {
      // Buffers in Node.js look bad when stringified
      if(result[i].constructor && result[i].constructor.isBuffer) {
        result[i] = result[i].toString();
      } else {
        try {
          result[i] = JSON.stringify(result[i]);
        } catch(stringifyError) {
          // happens when an object has a circular structure
          // do not throw an error, when printing, the toString() method of the object will be used
        }
      }
    } else {
      result[i] = result[i];
    }
  }
  this.emit('item',  result.join(' ') + '\n');
};

module.exports = Stringify;


/***/ }),

/***/ "./node_modules/minilog/lib/web/console.js":
/*!*************************************************!*\
  !*** ./node_modules/minilog/lib/web/console.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Transform = __webpack_require__(/*! ../common/transform.js */ "./node_modules/minilog/lib/common/transform.js");

var newlines = /\n+$/,
    logger = new Transform();

logger.write = function(name, level, args) {
  var i = args.length-1;
  if (typeof console === 'undefined' || !console.log) {
    return;
  }
  if(console.log.apply) {
    return console.log.apply(console, [name, level].concat(args));
  } else if(JSON && JSON.stringify) {
    // console.log.apply is undefined in IE8 and IE9
    // for IE8/9: make console.log at least a bit less awful
    if(args[i] && typeof args[i] == 'string') {
      args[i] = args[i].replace(newlines, '');
    }
    try {
      for(i = 0; i < args.length; i++) {
        args[i] = JSON.stringify(args[i]);
      }
    } catch(e) {}
    console.log(args.join(' '));
  }
};

logger.formatters = ['color', 'minilog'];
logger.color = __webpack_require__(/*! ./formatters/color.js */ "./node_modules/minilog/lib/web/formatters/color.js");
logger.minilog = __webpack_require__(/*! ./formatters/minilog.js */ "./node_modules/minilog/lib/web/formatters/minilog.js");

module.exports = logger;


/***/ }),

/***/ "./node_modules/minilog/lib/web/formatters/color.js":
/*!**********************************************************!*\
  !*** ./node_modules/minilog/lib/web/formatters/color.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Transform = __webpack_require__(/*! ../../common/transform.js */ "./node_modules/minilog/lib/common/transform.js"),
    color = __webpack_require__(/*! ./util.js */ "./node_modules/minilog/lib/web/formatters/util.js");

var colors = { debug: ['cyan'], info: ['purple' ], warn: [ 'yellow', true ], error: [ 'red', true ] },
    logger = new Transform();

logger.write = function(name, level, args) {
  var fn = console.log;
  if(console[level] && console[level].apply) {
    fn = console[level];
    fn.apply(console, [ '%c'+name+' %c'+level, color('gray'), color.apply(color, colors[level])].concat(args));
  }
};

// NOP, because piping the formatted logs can only cause trouble.
logger.pipe = function() { };

module.exports = logger;


/***/ }),

/***/ "./node_modules/minilog/lib/web/formatters/minilog.js":
/*!************************************************************!*\
  !*** ./node_modules/minilog/lib/web/formatters/minilog.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Transform = __webpack_require__(/*! ../../common/transform.js */ "./node_modules/minilog/lib/common/transform.js"),
    color = __webpack_require__(/*! ./util.js */ "./node_modules/minilog/lib/web/formatters/util.js"),
    colors = { debug: ['gray'], info: ['purple' ], warn: [ 'yellow', true ], error: [ 'red', true ] },
    logger = new Transform();

logger.write = function(name, level, args) {
  var fn = console.log;
  if(level != 'debug' && console[level]) {
    fn = console[level];
  }

  var subset = [], i = 0;
  if(level != 'info') {
    for(; i < args.length; i++) {
      if(typeof args[i] != 'string') break;
    }
    fn.apply(console, [ '%c'+name +' '+ args.slice(0, i).join(' '), color.apply(color, colors[level]) ].concat(args.slice(i)));
  } else {
    fn.apply(console, [ '%c'+name, color.apply(color, colors[level]) ].concat(args));
  }
};

// NOP, because piping the formatted logs can only cause trouble.
logger.pipe = function() { };

module.exports = logger;


/***/ }),

/***/ "./node_modules/minilog/lib/web/formatters/util.js":
/*!*********************************************************!*\
  !*** ./node_modules/minilog/lib/web/formatters/util.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hex = {
  black: '#000',
  red: '#c23621',
  green: '#25bc26',
  yellow: '#bbbb00',
  blue:  '#492ee1',
  magenta: '#d338d3',
  cyan: '#33bbc8',
  gray: '#808080',
  purple: '#708'
};
function color(fg, isInverse) {
  if(isInverse) {
    return 'color: #fff; background: '+hex[fg]+';';
  } else {
    return 'color: '+hex[fg]+';';
  }
}

module.exports = color;


/***/ }),

/***/ "./node_modules/node-fetch/lib/index.mjs":
/*!***********************************************!*\
  !*** ./node_modules/node-fetch/lib/index.mjs ***!
  \***********************************************/
/*! exports provided: default, Headers, Request, Response, FetchError */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Headers", function() { return Headers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Request", function() { return Request; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Response", function() { return Response; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchError", function() { return FetchError; });
/* harmony import */ var stream__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! stream */ "stream");
/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! http */ "http");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! url */ "url");
/* harmony import */ var https__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! https */ "https");
/* harmony import */ var zlib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! zlib */ "zlib");






// Based on https://github.com/tmpvar/jsdom/blob/aa85b2abf07766ff7bf5c1f6daafb3726f2f2db5/lib/jsdom/living/blob.js

// fix for "Readable" isn't a named export issue
const Readable = stream__WEBPACK_IMPORTED_MODULE_0__.Readable;

const BUFFER = Symbol('buffer');
const TYPE = Symbol('type');

class Blob {
	constructor() {
		this[TYPE] = '';

		const blobParts = arguments[0];
		const options = arguments[1];

		const buffers = [];
		let size = 0;

		if (blobParts) {
			const a = blobParts;
			const length = Number(a.length);
			for (let i = 0; i < length; i++) {
				const element = a[i];
				let buffer;
				if (element instanceof Buffer) {
					buffer = element;
				} else if (ArrayBuffer.isView(element)) {
					buffer = Buffer.from(element.buffer, element.byteOffset, element.byteLength);
				} else if (element instanceof ArrayBuffer) {
					buffer = Buffer.from(element);
				} else if (element instanceof Blob) {
					buffer = element[BUFFER];
				} else {
					buffer = Buffer.from(typeof element === 'string' ? element : String(element));
				}
				size += buffer.length;
				buffers.push(buffer);
			}
		}

		this[BUFFER] = Buffer.concat(buffers);

		let type = options && options.type !== undefined && String(options.type).toLowerCase();
		if (type && !/[^\u0020-\u007E]/.test(type)) {
			this[TYPE] = type;
		}
	}
	get size() {
		return this[BUFFER].length;
	}
	get type() {
		return this[TYPE];
	}
	text() {
		return Promise.resolve(this[BUFFER].toString());
	}
	arrayBuffer() {
		const buf = this[BUFFER];
		const ab = buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength);
		return Promise.resolve(ab);
	}
	stream() {
		const readable = new Readable();
		readable._read = function () {};
		readable.push(this[BUFFER]);
		readable.push(null);
		return readable;
	}
	toString() {
		return '[object Blob]';
	}
	slice() {
		const size = this.size;

		const start = arguments[0];
		const end = arguments[1];
		let relativeStart, relativeEnd;
		if (start === undefined) {
			relativeStart = 0;
		} else if (start < 0) {
			relativeStart = Math.max(size + start, 0);
		} else {
			relativeStart = Math.min(start, size);
		}
		if (end === undefined) {
			relativeEnd = size;
		} else if (end < 0) {
			relativeEnd = Math.max(size + end, 0);
		} else {
			relativeEnd = Math.min(end, size);
		}
		const span = Math.max(relativeEnd - relativeStart, 0);

		const buffer = this[BUFFER];
		const slicedBuffer = buffer.slice(relativeStart, relativeStart + span);
		const blob = new Blob([], { type: arguments[2] });
		blob[BUFFER] = slicedBuffer;
		return blob;
	}
}

Object.defineProperties(Blob.prototype, {
	size: { enumerable: true },
	type: { enumerable: true },
	slice: { enumerable: true }
});

Object.defineProperty(Blob.prototype, Symbol.toStringTag, {
	value: 'Blob',
	writable: false,
	enumerable: false,
	configurable: true
});

/**
 * fetch-error.js
 *
 * FetchError interface for operational errors
 */

/**
 * Create FetchError instance
 *
 * @param   String      message      Error message for human
 * @param   String      type         Error type for machine
 * @param   String      systemError  For Node.js system error
 * @return  FetchError
 */
function FetchError(message, type, systemError) {
  Error.call(this, message);

  this.message = message;
  this.type = type;

  // when err.type is `system`, err.code contains system error code
  if (systemError) {
    this.code = this.errno = systemError.code;
  }

  // hide custom error implementation details from end-users
  Error.captureStackTrace(this, this.constructor);
}

FetchError.prototype = Object.create(Error.prototype);
FetchError.prototype.constructor = FetchError;
FetchError.prototype.name = 'FetchError';

let convert;
try {
	convert = require('encoding').convert;
} catch (e) {}

const INTERNALS = Symbol('Body internals');

// fix an issue where "PassThrough" isn't a named export for node <10
const PassThrough = stream__WEBPACK_IMPORTED_MODULE_0__.PassThrough;

/**
 * Body mixin
 *
 * Ref: https://fetch.spec.whatwg.org/#body
 *
 * @param   Stream  body  Readable stream
 * @param   Object  opts  Response options
 * @return  Void
 */
function Body(body) {
	var _this = this;

	var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
	    _ref$size = _ref.size;

	let size = _ref$size === undefined ? 0 : _ref$size;
	var _ref$timeout = _ref.timeout;
	let timeout = _ref$timeout === undefined ? 0 : _ref$timeout;

	if (body == null) {
		// body is undefined or null
		body = null;
	} else if (isURLSearchParams(body)) {
		// body is a URLSearchParams
		body = Buffer.from(body.toString());
	} else if (isBlob(body)) ; else if (Buffer.isBuffer(body)) ; else if (Object.prototype.toString.call(body) === '[object ArrayBuffer]') {
		// body is ArrayBuffer
		body = Buffer.from(body);
	} else if (ArrayBuffer.isView(body)) {
		// body is ArrayBufferView
		body = Buffer.from(body.buffer, body.byteOffset, body.byteLength);
	} else if (body instanceof stream__WEBPACK_IMPORTED_MODULE_0__) ; else {
		// none of the above
		// coerce to string then buffer
		body = Buffer.from(String(body));
	}
	this[INTERNALS] = {
		body,
		disturbed: false,
		error: null
	};
	this.size = size;
	this.timeout = timeout;

	if (body instanceof stream__WEBPACK_IMPORTED_MODULE_0__) {
		body.on('error', function (err) {
			const error = err.name === 'AbortError' ? err : new FetchError(`Invalid response body while trying to fetch ${_this.url}: ${err.message}`, 'system', err);
			_this[INTERNALS].error = error;
		});
	}
}

Body.prototype = {
	get body() {
		return this[INTERNALS].body;
	},

	get bodyUsed() {
		return this[INTERNALS].disturbed;
	},

	/**
  * Decode response as ArrayBuffer
  *
  * @return  Promise
  */
	arrayBuffer() {
		return consumeBody.call(this).then(function (buf) {
			return buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength);
		});
	},

	/**
  * Return raw response as Blob
  *
  * @return Promise
  */
	blob() {
		let ct = this.headers && this.headers.get('content-type') || '';
		return consumeBody.call(this).then(function (buf) {
			return Object.assign(
			// Prevent copying
			new Blob([], {
				type: ct.toLowerCase()
			}), {
				[BUFFER]: buf
			});
		});
	},

	/**
  * Decode response as json
  *
  * @return  Promise
  */
	json() {
		var _this2 = this;

		return consumeBody.call(this).then(function (buffer) {
			try {
				return JSON.parse(buffer.toString());
			} catch (err) {
				return Body.Promise.reject(new FetchError(`invalid json response body at ${_this2.url} reason: ${err.message}`, 'invalid-json'));
			}
		});
	},

	/**
  * Decode response as text
  *
  * @return  Promise
  */
	text() {
		return consumeBody.call(this).then(function (buffer) {
			return buffer.toString();
		});
	},

	/**
  * Decode response as buffer (non-spec api)
  *
  * @return  Promise
  */
	buffer() {
		return consumeBody.call(this);
	},

	/**
  * Decode response as text, while automatically detecting the encoding and
  * trying to decode to UTF-8 (non-spec api)
  *
  * @return  Promise
  */
	textConverted() {
		var _this3 = this;

		return consumeBody.call(this).then(function (buffer) {
			return convertBody(buffer, _this3.headers);
		});
	}
};

// In browsers, all properties are enumerable.
Object.defineProperties(Body.prototype, {
	body: { enumerable: true },
	bodyUsed: { enumerable: true },
	arrayBuffer: { enumerable: true },
	blob: { enumerable: true },
	json: { enumerable: true },
	text: { enumerable: true }
});

Body.mixIn = function (proto) {
	for (const name of Object.getOwnPropertyNames(Body.prototype)) {
		// istanbul ignore else: future proof
		if (!(name in proto)) {
			const desc = Object.getOwnPropertyDescriptor(Body.prototype, name);
			Object.defineProperty(proto, name, desc);
		}
	}
};

/**
 * Consume and convert an entire Body to a Buffer.
 *
 * Ref: https://fetch.spec.whatwg.org/#concept-body-consume-body
 *
 * @return  Promise
 */
function consumeBody() {
	var _this4 = this;

	if (this[INTERNALS].disturbed) {
		return Body.Promise.reject(new TypeError(`body used already for: ${this.url}`));
	}

	this[INTERNALS].disturbed = true;

	if (this[INTERNALS].error) {
		return Body.Promise.reject(this[INTERNALS].error);
	}

	let body = this.body;

	// body is null
	if (body === null) {
		return Body.Promise.resolve(Buffer.alloc(0));
	}

	// body is blob
	if (isBlob(body)) {
		body = body.stream();
	}

	// body is buffer
	if (Buffer.isBuffer(body)) {
		return Body.Promise.resolve(body);
	}

	// istanbul ignore if: should never happen
	if (!(body instanceof stream__WEBPACK_IMPORTED_MODULE_0__)) {
		return Body.Promise.resolve(Buffer.alloc(0));
	}

	// body is stream
	// get ready to actually consume the body
	let accum = [];
	let accumBytes = 0;
	let abort = false;

	return new Body.Promise(function (resolve, reject) {
		let resTimeout;

		// allow timeout on slow response body
		if (_this4.timeout) {
			resTimeout = setTimeout(function () {
				abort = true;
				reject(new FetchError(`Response timeout while trying to fetch ${_this4.url} (over ${_this4.timeout}ms)`, 'body-timeout'));
			}, _this4.timeout);
		}

		// handle stream errors
		body.on('error', function (err) {
			if (err.name === 'AbortError') {
				// if the request was aborted, reject with this Error
				abort = true;
				reject(err);
			} else {
				// other errors, such as incorrect content-encoding
				reject(new FetchError(`Invalid response body while trying to fetch ${_this4.url}: ${err.message}`, 'system', err));
			}
		});

		body.on('data', function (chunk) {
			if (abort || chunk === null) {
				return;
			}

			if (_this4.size && accumBytes + chunk.length > _this4.size) {
				abort = true;
				reject(new FetchError(`content size at ${_this4.url} over limit: ${_this4.size}`, 'max-size'));
				return;
			}

			accumBytes += chunk.length;
			accum.push(chunk);
		});

		body.on('end', function () {
			if (abort) {
				return;
			}

			clearTimeout(resTimeout);

			try {
				resolve(Buffer.concat(accum, accumBytes));
			} catch (err) {
				// handle streams that have accumulated too much data (issue #414)
				reject(new FetchError(`Could not create Buffer from response body for ${_this4.url}: ${err.message}`, 'system', err));
			}
		});
	});
}

/**
 * Detect buffer encoding and convert to target encoding
 * ref: http://www.w3.org/TR/2011/WD-html5-20110113/parsing.html#determining-the-character-encoding
 *
 * @param   Buffer  buffer    Incoming buffer
 * @param   String  encoding  Target encoding
 * @return  String
 */
function convertBody(buffer, headers) {
	if (typeof convert !== 'function') {
		throw new Error('The package `encoding` must be installed to use the textConverted() function');
	}

	const ct = headers.get('content-type');
	let charset = 'utf-8';
	let res, str;

	// header
	if (ct) {
		res = /charset=([^;]*)/i.exec(ct);
	}

	// no charset in content type, peek at response body for at most 1024 bytes
	str = buffer.slice(0, 1024).toString();

	// html5
	if (!res && str) {
		res = /<meta.+?charset=(['"])(.+?)\1/i.exec(str);
	}

	// html4
	if (!res && str) {
		res = /<meta[\s]+?http-equiv=(['"])content-type\1[\s]+?content=(['"])(.+?)\2/i.exec(str);
		if (!res) {
			res = /<meta[\s]+?content=(['"])(.+?)\1[\s]+?http-equiv=(['"])content-type\3/i.exec(str);
			if (res) {
				res.pop(); // drop last quote
			}
		}

		if (res) {
			res = /charset=(.*)/i.exec(res.pop());
		}
	}

	// xml
	if (!res && str) {
		res = /<\?xml.+?encoding=(['"])(.+?)\1/i.exec(str);
	}

	// found charset
	if (res) {
		charset = res.pop();

		// prevent decode issues when sites use incorrect encoding
		// ref: https://hsivonen.fi/encoding-menu/
		if (charset === 'gb2312' || charset === 'gbk') {
			charset = 'gb18030';
		}
	}

	// turn raw buffers into a single utf-8 buffer
	return convert(buffer, 'UTF-8', charset).toString();
}

/**
 * Detect a URLSearchParams object
 * ref: https://github.com/bitinn/node-fetch/issues/296#issuecomment-307598143
 *
 * @param   Object  obj     Object to detect by type or brand
 * @return  String
 */
function isURLSearchParams(obj) {
	// Duck-typing as a necessary condition.
	if (typeof obj !== 'object' || typeof obj.append !== 'function' || typeof obj.delete !== 'function' || typeof obj.get !== 'function' || typeof obj.getAll !== 'function' || typeof obj.has !== 'function' || typeof obj.set !== 'function') {
		return false;
	}

	// Brand-checking and more duck-typing as optional condition.
	return obj.constructor.name === 'URLSearchParams' || Object.prototype.toString.call(obj) === '[object URLSearchParams]' || typeof obj.sort === 'function';
}

/**
 * Check if `obj` is a W3C `Blob` object (which `File` inherits from)
 * @param  {*} obj
 * @return {boolean}
 */
function isBlob(obj) {
	return typeof obj === 'object' && typeof obj.arrayBuffer === 'function' && typeof obj.type === 'string' && typeof obj.stream === 'function' && typeof obj.constructor === 'function' && typeof obj.constructor.name === 'string' && /^(Blob|File)$/.test(obj.constructor.name) && /^(Blob|File)$/.test(obj[Symbol.toStringTag]);
}

/**
 * Clone body given Res/Req instance
 *
 * @param   Mixed  instance  Response or Request instance
 * @return  Mixed
 */
function clone(instance) {
	let p1, p2;
	let body = instance.body;

	// don't allow cloning a used body
	if (instance.bodyUsed) {
		throw new Error('cannot clone body after it is used');
	}

	// check that body is a stream and not form-data object
	// note: we can't clone the form-data object without having it as a dependency
	if (body instanceof stream__WEBPACK_IMPORTED_MODULE_0__ && typeof body.getBoundary !== 'function') {
		// tee instance body
		p1 = new PassThrough();
		p2 = new PassThrough();
		body.pipe(p1);
		body.pipe(p2);
		// set instance body to teed body and return the other teed body
		instance[INTERNALS].body = p1;
		body = p2;
	}

	return body;
}

/**
 * Performs the operation "extract a `Content-Type` value from |object|" as
 * specified in the specification:
 * https://fetch.spec.whatwg.org/#concept-bodyinit-extract
 *
 * This function assumes that instance.body is present.
 *
 * @param   Mixed  instance  Any options.body input
 */
function extractContentType(body) {
	if (body === null) {
		// body is null
		return null;
	} else if (typeof body === 'string') {
		// body is string
		return 'text/plain;charset=UTF-8';
	} else if (isURLSearchParams(body)) {
		// body is a URLSearchParams
		return 'application/x-www-form-urlencoded;charset=UTF-8';
	} else if (isBlob(body)) {
		// body is blob
		return body.type || null;
	} else if (Buffer.isBuffer(body)) {
		// body is buffer
		return null;
	} else if (Object.prototype.toString.call(body) === '[object ArrayBuffer]') {
		// body is ArrayBuffer
		return null;
	} else if (ArrayBuffer.isView(body)) {
		// body is ArrayBufferView
		return null;
	} else if (typeof body.getBoundary === 'function') {
		// detect form data input from form-data module
		return `multipart/form-data;boundary=${body.getBoundary()}`;
	} else if (body instanceof stream__WEBPACK_IMPORTED_MODULE_0__) {
		// body is stream
		// can't really do much about this
		return null;
	} else {
		// Body constructor defaults other things to string
		return 'text/plain;charset=UTF-8';
	}
}

/**
 * The Fetch Standard treats this as if "total bytes" is a property on the body.
 * For us, we have to explicitly get it with a function.
 *
 * ref: https://fetch.spec.whatwg.org/#concept-body-total-bytes
 *
 * @param   Body    instance   Instance of Body
 * @return  Number?            Number of bytes, or null if not possible
 */
function getTotalBytes(instance) {
	const body = instance.body;


	if (body === null) {
		// body is null
		return 0;
	} else if (isBlob(body)) {
		return body.size;
	} else if (Buffer.isBuffer(body)) {
		// body is buffer
		return body.length;
	} else if (body && typeof body.getLengthSync === 'function') {
		// detect form data input from form-data module
		if (body._lengthRetrievers && body._lengthRetrievers.length == 0 || // 1.x
		body.hasKnownLength && body.hasKnownLength()) {
			// 2.x
			return body.getLengthSync();
		}
		return null;
	} else {
		// body is stream
		return null;
	}
}

/**
 * Write a Body to a Node.js WritableStream (e.g. http.Request) object.
 *
 * @param   Body    instance   Instance of Body
 * @return  Void
 */
function writeToStream(dest, instance) {
	const body = instance.body;


	if (body === null) {
		// body is null
		dest.end();
	} else if (isBlob(body)) {
		body.stream().pipe(dest);
	} else if (Buffer.isBuffer(body)) {
		// body is buffer
		dest.write(body);
		dest.end();
	} else {
		// body is stream
		body.pipe(dest);
	}
}

// expose Promise
Body.Promise = global.Promise;

/**
 * headers.js
 *
 * Headers class offers convenient helpers
 */

const invalidTokenRegex = /[^\^_`a-zA-Z\-0-9!#$%&'*+.|~]/;
const invalidHeaderCharRegex = /[^\t\x20-\x7e\x80-\xff]/;

function validateName(name) {
	name = `${name}`;
	if (invalidTokenRegex.test(name) || name === '') {
		throw new TypeError(`${name} is not a legal HTTP header name`);
	}
}

function validateValue(value) {
	value = `${value}`;
	if (invalidHeaderCharRegex.test(value)) {
		throw new TypeError(`${value} is not a legal HTTP header value`);
	}
}

/**
 * Find the key in the map object given a header name.
 *
 * Returns undefined if not found.
 *
 * @param   String  name  Header name
 * @return  String|Undefined
 */
function find(map, name) {
	name = name.toLowerCase();
	for (const key in map) {
		if (key.toLowerCase() === name) {
			return key;
		}
	}
	return undefined;
}

const MAP = Symbol('map');
class Headers {
	/**
  * Headers class
  *
  * @param   Object  headers  Response headers
  * @return  Void
  */
	constructor() {
		let init = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;

		this[MAP] = Object.create(null);

		if (init instanceof Headers) {
			const rawHeaders = init.raw();
			const headerNames = Object.keys(rawHeaders);

			for (const headerName of headerNames) {
				for (const value of rawHeaders[headerName]) {
					this.append(headerName, value);
				}
			}

			return;
		}

		// We don't worry about converting prop to ByteString here as append()
		// will handle it.
		if (init == null) ; else if (typeof init === 'object') {
			const method = init[Symbol.iterator];
			if (method != null) {
				if (typeof method !== 'function') {
					throw new TypeError('Header pairs must be iterable');
				}

				// sequence<sequence<ByteString>>
				// Note: per spec we have to first exhaust the lists then process them
				const pairs = [];
				for (const pair of init) {
					if (typeof pair !== 'object' || typeof pair[Symbol.iterator] !== 'function') {
						throw new TypeError('Each header pair must be iterable');
					}
					pairs.push(Array.from(pair));
				}

				for (const pair of pairs) {
					if (pair.length !== 2) {
						throw new TypeError('Each header pair must be a name/value tuple');
					}
					this.append(pair[0], pair[1]);
				}
			} else {
				// record<ByteString, ByteString>
				for (const key of Object.keys(init)) {
					const value = init[key];
					this.append(key, value);
				}
			}
		} else {
			throw new TypeError('Provided initializer must be an object');
		}
	}

	/**
  * Return combined header value given name
  *
  * @param   String  name  Header name
  * @return  Mixed
  */
	get(name) {
		name = `${name}`;
		validateName(name);
		const key = find(this[MAP], name);
		if (key === undefined) {
			return null;
		}

		return this[MAP][key].join(', ');
	}

	/**
  * Iterate over all headers
  *
  * @param   Function  callback  Executed for each item with parameters (value, name, thisArg)
  * @param   Boolean   thisArg   `this` context for callback function
  * @return  Void
  */
	forEach(callback) {
		let thisArg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

		let pairs = getHeaders(this);
		let i = 0;
		while (i < pairs.length) {
			var _pairs$i = pairs[i];
			const name = _pairs$i[0],
			      value = _pairs$i[1];

			callback.call(thisArg, value, name, this);
			pairs = getHeaders(this);
			i++;
		}
	}

	/**
  * Overwrite header values given name
  *
  * @param   String  name   Header name
  * @param   String  value  Header value
  * @return  Void
  */
	set(name, value) {
		name = `${name}`;
		value = `${value}`;
		validateName(name);
		validateValue(value);
		const key = find(this[MAP], name);
		this[MAP][key !== undefined ? key : name] = [value];
	}

	/**
  * Append a value onto existing header
  *
  * @param   String  name   Header name
  * @param   String  value  Header value
  * @return  Void
  */
	append(name, value) {
		name = `${name}`;
		value = `${value}`;
		validateName(name);
		validateValue(value);
		const key = find(this[MAP], name);
		if (key !== undefined) {
			this[MAP][key].push(value);
		} else {
			this[MAP][name] = [value];
		}
	}

	/**
  * Check for header name existence
  *
  * @param   String   name  Header name
  * @return  Boolean
  */
	has(name) {
		name = `${name}`;
		validateName(name);
		return find(this[MAP], name) !== undefined;
	}

	/**
  * Delete all header values given name
  *
  * @param   String  name  Header name
  * @return  Void
  */
	delete(name) {
		name = `${name}`;
		validateName(name);
		const key = find(this[MAP], name);
		if (key !== undefined) {
			delete this[MAP][key];
		}
	}

	/**
  * Return raw headers (non-spec api)
  *
  * @return  Object
  */
	raw() {
		return this[MAP];
	}

	/**
  * Get an iterator on keys.
  *
  * @return  Iterator
  */
	keys() {
		return createHeadersIterator(this, 'key');
	}

	/**
  * Get an iterator on values.
  *
  * @return  Iterator
  */
	values() {
		return createHeadersIterator(this, 'value');
	}

	/**
  * Get an iterator on entries.
  *
  * This is the default iterator of the Headers object.
  *
  * @return  Iterator
  */
	[Symbol.iterator]() {
		return createHeadersIterator(this, 'key+value');
	}
}
Headers.prototype.entries = Headers.prototype[Symbol.iterator];

Object.defineProperty(Headers.prototype, Symbol.toStringTag, {
	value: 'Headers',
	writable: false,
	enumerable: false,
	configurable: true
});

Object.defineProperties(Headers.prototype, {
	get: { enumerable: true },
	forEach: { enumerable: true },
	set: { enumerable: true },
	append: { enumerable: true },
	has: { enumerable: true },
	delete: { enumerable: true },
	keys: { enumerable: true },
	values: { enumerable: true },
	entries: { enumerable: true }
});

function getHeaders(headers) {
	let kind = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'key+value';

	const keys = Object.keys(headers[MAP]).sort();
	return keys.map(kind === 'key' ? function (k) {
		return k.toLowerCase();
	} : kind === 'value' ? function (k) {
		return headers[MAP][k].join(', ');
	} : function (k) {
		return [k.toLowerCase(), headers[MAP][k].join(', ')];
	});
}

const INTERNAL = Symbol('internal');

function createHeadersIterator(target, kind) {
	const iterator = Object.create(HeadersIteratorPrototype);
	iterator[INTERNAL] = {
		target,
		kind,
		index: 0
	};
	return iterator;
}

const HeadersIteratorPrototype = Object.setPrototypeOf({
	next() {
		// istanbul ignore if
		if (!this || Object.getPrototypeOf(this) !== HeadersIteratorPrototype) {
			throw new TypeError('Value of `this` is not a HeadersIterator');
		}

		var _INTERNAL = this[INTERNAL];
		const target = _INTERNAL.target,
		      kind = _INTERNAL.kind,
		      index = _INTERNAL.index;

		const values = getHeaders(target, kind);
		const len = values.length;
		if (index >= len) {
			return {
				value: undefined,
				done: true
			};
		}

		this[INTERNAL].index = index + 1;

		return {
			value: values[index],
			done: false
		};
	}
}, Object.getPrototypeOf(Object.getPrototypeOf([][Symbol.iterator]())));

Object.defineProperty(HeadersIteratorPrototype, Symbol.toStringTag, {
	value: 'HeadersIterator',
	writable: false,
	enumerable: false,
	configurable: true
});

/**
 * Export the Headers object in a form that Node.js can consume.
 *
 * @param   Headers  headers
 * @return  Object
 */
function exportNodeCompatibleHeaders(headers) {
	const obj = Object.assign({ __proto__: null }, headers[MAP]);

	// http.request() only supports string as Host header. This hack makes
	// specifying custom Host header possible.
	const hostHeaderKey = find(headers[MAP], 'Host');
	if (hostHeaderKey !== undefined) {
		obj[hostHeaderKey] = obj[hostHeaderKey][0];
	}

	return obj;
}

/**
 * Create a Headers object from an object of headers, ignoring those that do
 * not conform to HTTP grammar productions.
 *
 * @param   Object  obj  Object of headers
 * @return  Headers
 */
function createHeadersLenient(obj) {
	const headers = new Headers();
	for (const name of Object.keys(obj)) {
		if (invalidTokenRegex.test(name)) {
			continue;
		}
		if (Array.isArray(obj[name])) {
			for (const val of obj[name]) {
				if (invalidHeaderCharRegex.test(val)) {
					continue;
				}
				if (headers[MAP][name] === undefined) {
					headers[MAP][name] = [val];
				} else {
					headers[MAP][name].push(val);
				}
			}
		} else if (!invalidHeaderCharRegex.test(obj[name])) {
			headers[MAP][name] = [obj[name]];
		}
	}
	return headers;
}

const INTERNALS$1 = Symbol('Response internals');

// fix an issue where "STATUS_CODES" aren't a named export for node <10
const STATUS_CODES = http__WEBPACK_IMPORTED_MODULE_1__.STATUS_CODES;

/**
 * Response class
 *
 * @param   Stream  body  Readable stream
 * @param   Object  opts  Response options
 * @return  Void
 */
class Response {
	constructor() {
		let body = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
		let opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

		Body.call(this, body, opts);

		const status = opts.status || 200;
		const headers = new Headers(opts.headers);

		if (body != null && !headers.has('Content-Type')) {
			const contentType = extractContentType(body);
			if (contentType) {
				headers.append('Content-Type', contentType);
			}
		}

		this[INTERNALS$1] = {
			url: opts.url,
			status,
			statusText: opts.statusText || STATUS_CODES[status],
			headers,
			counter: opts.counter
		};
	}

	get url() {
		return this[INTERNALS$1].url || '';
	}

	get status() {
		return this[INTERNALS$1].status;
	}

	/**
  * Convenience property representing if the request ended normally
  */
	get ok() {
		return this[INTERNALS$1].status >= 200 && this[INTERNALS$1].status < 300;
	}

	get redirected() {
		return this[INTERNALS$1].counter > 0;
	}

	get statusText() {
		return this[INTERNALS$1].statusText;
	}

	get headers() {
		return this[INTERNALS$1].headers;
	}

	/**
  * Clone this response
  *
  * @return  Response
  */
	clone() {
		return new Response(clone(this), {
			url: this.url,
			status: this.status,
			statusText: this.statusText,
			headers: this.headers,
			ok: this.ok,
			redirected: this.redirected
		});
	}
}

Body.mixIn(Response.prototype);

Object.defineProperties(Response.prototype, {
	url: { enumerable: true },
	status: { enumerable: true },
	ok: { enumerable: true },
	redirected: { enumerable: true },
	statusText: { enumerable: true },
	headers: { enumerable: true },
	clone: { enumerable: true }
});

Object.defineProperty(Response.prototype, Symbol.toStringTag, {
	value: 'Response',
	writable: false,
	enumerable: false,
	configurable: true
});

const INTERNALS$2 = Symbol('Request internals');

// fix an issue where "format", "parse" aren't a named export for node <10
const parse_url = url__WEBPACK_IMPORTED_MODULE_2__.parse;
const format_url = url__WEBPACK_IMPORTED_MODULE_2__.format;

const streamDestructionSupported = 'destroy' in stream__WEBPACK_IMPORTED_MODULE_0__.Readable.prototype;

/**
 * Check if a value is an instance of Request.
 *
 * @param   Mixed   input
 * @return  Boolean
 */
function isRequest(input) {
	return typeof input === 'object' && typeof input[INTERNALS$2] === 'object';
}

function isAbortSignal(signal) {
	const proto = signal && typeof signal === 'object' && Object.getPrototypeOf(signal);
	return !!(proto && proto.constructor.name === 'AbortSignal');
}

/**
 * Request class
 *
 * @param   Mixed   input  Url or Request instance
 * @param   Object  init   Custom options
 * @return  Void
 */
class Request {
	constructor(input) {
		let init = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

		let parsedURL;

		// normalize input
		if (!isRequest(input)) {
			if (input && input.href) {
				// in order to support Node.js' Url objects; though WHATWG's URL objects
				// will fall into this branch also (since their `toString()` will return
				// `href` property anyway)
				parsedURL = parse_url(input.href);
			} else {
				// coerce input to a string before attempting to parse
				parsedURL = parse_url(`${input}`);
			}
			input = {};
		} else {
			parsedURL = parse_url(input.url);
		}

		let method = init.method || input.method || 'GET';
		method = method.toUpperCase();

		if ((init.body != null || isRequest(input) && input.body !== null) && (method === 'GET' || method === 'HEAD')) {
			throw new TypeError('Request with GET/HEAD method cannot have body');
		}

		let inputBody = init.body != null ? init.body : isRequest(input) && input.body !== null ? clone(input) : null;

		Body.call(this, inputBody, {
			timeout: init.timeout || input.timeout || 0,
			size: init.size || input.size || 0
		});

		const headers = new Headers(init.headers || input.headers || {});

		if (inputBody != null && !headers.has('Content-Type')) {
			const contentType = extractContentType(inputBody);
			if (contentType) {
				headers.append('Content-Type', contentType);
			}
		}

		let signal = isRequest(input) ? input.signal : null;
		if ('signal' in init) signal = init.signal;

		if (signal != null && !isAbortSignal(signal)) {
			throw new TypeError('Expected signal to be an instanceof AbortSignal');
		}

		this[INTERNALS$2] = {
			method,
			redirect: init.redirect || input.redirect || 'follow',
			headers,
			parsedURL,
			signal
		};

		// node-fetch-only options
		this.follow = init.follow !== undefined ? init.follow : input.follow !== undefined ? input.follow : 20;
		this.compress = init.compress !== undefined ? init.compress : input.compress !== undefined ? input.compress : true;
		this.counter = init.counter || input.counter || 0;
		this.agent = init.agent || input.agent;
	}

	get method() {
		return this[INTERNALS$2].method;
	}

	get url() {
		return format_url(this[INTERNALS$2].parsedURL);
	}

	get headers() {
		return this[INTERNALS$2].headers;
	}

	get redirect() {
		return this[INTERNALS$2].redirect;
	}

	get signal() {
		return this[INTERNALS$2].signal;
	}

	/**
  * Clone this request
  *
  * @return  Request
  */
	clone() {
		return new Request(this);
	}
}

Body.mixIn(Request.prototype);

Object.defineProperty(Request.prototype, Symbol.toStringTag, {
	value: 'Request',
	writable: false,
	enumerable: false,
	configurable: true
});

Object.defineProperties(Request.prototype, {
	method: { enumerable: true },
	url: { enumerable: true },
	headers: { enumerable: true },
	redirect: { enumerable: true },
	clone: { enumerable: true },
	signal: { enumerable: true }
});

/**
 * Convert a Request to Node.js http request options.
 *
 * @param   Request  A Request instance
 * @return  Object   The options object to be passed to http.request
 */
function getNodeRequestOptions(request) {
	const parsedURL = request[INTERNALS$2].parsedURL;
	const headers = new Headers(request[INTERNALS$2].headers);

	// fetch step 1.3
	if (!headers.has('Accept')) {
		headers.set('Accept', '*/*');
	}

	// Basic fetch
	if (!parsedURL.protocol || !parsedURL.hostname) {
		throw new TypeError('Only absolute URLs are supported');
	}

	if (!/^https?:$/.test(parsedURL.protocol)) {
		throw new TypeError('Only HTTP(S) protocols are supported');
	}

	if (request.signal && request.body instanceof stream__WEBPACK_IMPORTED_MODULE_0__.Readable && !streamDestructionSupported) {
		throw new Error('Cancellation of streamed requests with AbortSignal is not supported in node < 8');
	}

	// HTTP-network-or-cache fetch steps 2.4-2.7
	let contentLengthValue = null;
	if (request.body == null && /^(POST|PUT)$/i.test(request.method)) {
		contentLengthValue = '0';
	}
	if (request.body != null) {
		const totalBytes = getTotalBytes(request);
		if (typeof totalBytes === 'number') {
			contentLengthValue = String(totalBytes);
		}
	}
	if (contentLengthValue) {
		headers.set('Content-Length', contentLengthValue);
	}

	// HTTP-network-or-cache fetch step 2.11
	if (!headers.has('User-Agent')) {
		headers.set('User-Agent', 'node-fetch/1.0 (+https://github.com/bitinn/node-fetch)');
	}

	// HTTP-network-or-cache fetch step 2.15
	if (request.compress && !headers.has('Accept-Encoding')) {
		headers.set('Accept-Encoding', 'gzip,deflate');
	}

	let agent = request.agent;
	if (typeof agent === 'function') {
		agent = agent(parsedURL);
	}

	if (!headers.has('Connection') && !agent) {
		headers.set('Connection', 'close');
	}

	// HTTP-network fetch step 4.2
	// chunked encoding is handled by Node.js

	return Object.assign({}, parsedURL, {
		method: request.method,
		headers: exportNodeCompatibleHeaders(headers),
		agent
	});
}

/**
 * abort-error.js
 *
 * AbortError interface for cancelled requests
 */

/**
 * Create AbortError instance
 *
 * @param   String      message      Error message for human
 * @return  AbortError
 */
function AbortError(message) {
  Error.call(this, message);

  this.type = 'aborted';
  this.message = message;

  // hide custom error implementation details from end-users
  Error.captureStackTrace(this, this.constructor);
}

AbortError.prototype = Object.create(Error.prototype);
AbortError.prototype.constructor = AbortError;
AbortError.prototype.name = 'AbortError';

// fix an issue where "PassThrough", "resolve" aren't a named export for node <10
const PassThrough$1 = stream__WEBPACK_IMPORTED_MODULE_0__.PassThrough;
const resolve_url = url__WEBPACK_IMPORTED_MODULE_2__.resolve;

/**
 * Fetch function
 *
 * @param   Mixed    url   Absolute url or Request instance
 * @param   Object   opts  Fetch options
 * @return  Promise
 */
function fetch(url, opts) {

	// allow custom promise
	if (!fetch.Promise) {
		throw new Error('native promise missing, set fetch.Promise to your favorite alternative');
	}

	Body.Promise = fetch.Promise;

	// wrap http.request into fetch
	return new fetch.Promise(function (resolve, reject) {
		// build request object
		const request = new Request(url, opts);
		const options = getNodeRequestOptions(request);

		const send = (options.protocol === 'https:' ? https__WEBPACK_IMPORTED_MODULE_3__ : http__WEBPACK_IMPORTED_MODULE_1__).request;
		const signal = request.signal;

		let response = null;

		const abort = function abort() {
			let error = new AbortError('The user aborted a request.');
			reject(error);
			if (request.body && request.body instanceof stream__WEBPACK_IMPORTED_MODULE_0__.Readable) {
				request.body.destroy(error);
			}
			if (!response || !response.body) return;
			response.body.emit('error', error);
		};

		if (signal && signal.aborted) {
			abort();
			return;
		}

		const abortAndFinalize = function abortAndFinalize() {
			abort();
			finalize();
		};

		// send request
		const req = send(options);
		let reqTimeout;

		if (signal) {
			signal.addEventListener('abort', abortAndFinalize);
		}

		function finalize() {
			req.abort();
			if (signal) signal.removeEventListener('abort', abortAndFinalize);
			clearTimeout(reqTimeout);
		}

		if (request.timeout) {
			req.once('socket', function (socket) {
				reqTimeout = setTimeout(function () {
					reject(new FetchError(`network timeout at: ${request.url}`, 'request-timeout'));
					finalize();
				}, request.timeout);
			});
		}

		req.on('error', function (err) {
			reject(new FetchError(`request to ${request.url} failed, reason: ${err.message}`, 'system', err));
			finalize();
		});

		req.on('response', function (res) {
			clearTimeout(reqTimeout);

			const headers = createHeadersLenient(res.headers);

			// HTTP fetch step 5
			if (fetch.isRedirect(res.statusCode)) {
				// HTTP fetch step 5.2
				const location = headers.get('Location');

				// HTTP fetch step 5.3
				const locationURL = location === null ? null : resolve_url(request.url, location);

				// HTTP fetch step 5.5
				switch (request.redirect) {
					case 'error':
						reject(new FetchError(`uri requested responds with a redirect, redirect mode is set to error: ${request.url}`, 'no-redirect'));
						finalize();
						return;
					case 'manual':
						// node-fetch-specific step: make manual redirect a bit easier to use by setting the Location header value to the resolved URL.
						if (locationURL !== null) {
							// handle corrupted header
							try {
								headers.set('Location', locationURL);
							} catch (err) {
								// istanbul ignore next: nodejs server prevent invalid response headers, we can't test this through normal request
								reject(err);
							}
						}
						break;
					case 'follow':
						// HTTP-redirect fetch step 2
						if (locationURL === null) {
							break;
						}

						// HTTP-redirect fetch step 5
						if (request.counter >= request.follow) {
							reject(new FetchError(`maximum redirect reached at: ${request.url}`, 'max-redirect'));
							finalize();
							return;
						}

						// HTTP-redirect fetch step 6 (counter increment)
						// Create a new Request object.
						const requestOpts = {
							headers: new Headers(request.headers),
							follow: request.follow,
							counter: request.counter + 1,
							agent: request.agent,
							compress: request.compress,
							method: request.method,
							body: request.body,
							signal: request.signal,
							timeout: request.timeout,
							size: request.size
						};

						// HTTP-redirect fetch step 9
						if (res.statusCode !== 303 && request.body && getTotalBytes(request) === null) {
							reject(new FetchError('Cannot follow redirect with body being a readable stream', 'unsupported-redirect'));
							finalize();
							return;
						}

						// HTTP-redirect fetch step 11
						if (res.statusCode === 303 || (res.statusCode === 301 || res.statusCode === 302) && request.method === 'POST') {
							requestOpts.method = 'GET';
							requestOpts.body = undefined;
							requestOpts.headers.delete('content-length');
						}

						// HTTP-redirect fetch step 15
						resolve(fetch(new Request(locationURL, requestOpts)));
						finalize();
						return;
				}
			}

			// prepare response
			res.once('end', function () {
				if (signal) signal.removeEventListener('abort', abortAndFinalize);
			});
			let body = res.pipe(new PassThrough$1());

			const response_options = {
				url: request.url,
				status: res.statusCode,
				statusText: res.statusMessage,
				headers: headers,
				size: request.size,
				timeout: request.timeout,
				counter: request.counter
			};

			// HTTP-network fetch step 12.1.1.3
			const codings = headers.get('Content-Encoding');

			// HTTP-network fetch step 12.1.1.4: handle content codings

			// in following scenarios we ignore compression support
			// 1. compression support is disabled
			// 2. HEAD request
			// 3. no Content-Encoding header
			// 4. no content response (204)
			// 5. content not modified response (304)
			if (!request.compress || request.method === 'HEAD' || codings === null || res.statusCode === 204 || res.statusCode === 304) {
				response = new Response(body, response_options);
				resolve(response);
				return;
			}

			// For Node v6+
			// Be less strict when decoding compressed responses, since sometimes
			// servers send slightly invalid responses that are still accepted
			// by common browsers.
			// Always using Z_SYNC_FLUSH is what cURL does.
			const zlibOptions = {
				flush: zlib__WEBPACK_IMPORTED_MODULE_4__.Z_SYNC_FLUSH,
				finishFlush: zlib__WEBPACK_IMPORTED_MODULE_4__.Z_SYNC_FLUSH
			};

			// for gzip
			if (codings == 'gzip' || codings == 'x-gzip') {
				body = body.pipe(zlib__WEBPACK_IMPORTED_MODULE_4__.createGunzip(zlibOptions));
				response = new Response(body, response_options);
				resolve(response);
				return;
			}

			// for deflate
			if (codings == 'deflate' || codings == 'x-deflate') {
				// handle the infamous raw deflate response from old servers
				// a hack for old IIS and Apache servers
				const raw = res.pipe(new PassThrough$1());
				raw.once('data', function (chunk) {
					// see http://stackoverflow.com/questions/37519828
					if ((chunk[0] & 0x0F) === 0x08) {
						body = body.pipe(zlib__WEBPACK_IMPORTED_MODULE_4__.createInflate());
					} else {
						body = body.pipe(zlib__WEBPACK_IMPORTED_MODULE_4__.createInflateRaw());
					}
					response = new Response(body, response_options);
					resolve(response);
				});
				return;
			}

			// for br
			if (codings == 'br' && typeof zlib__WEBPACK_IMPORTED_MODULE_4__.createBrotliDecompress === 'function') {
				body = body.pipe(zlib__WEBPACK_IMPORTED_MODULE_4__.createBrotliDecompress());
				response = new Response(body, response_options);
				resolve(response);
				return;
			}

			// otherwise, use response as-is
			response = new Response(body, response_options);
			resolve(response);
		});

		writeToStream(req, request);
	});
}
/**
 * Redirect code matching
 *
 * @param   Number   code  Status code
 * @return  Boolean
 */
fetch.isRedirect = function (code) {
	return code === 301 || code === 302 || code === 303 || code === 307 || code === 308;
};

// expose Promise
fetch.Promise = global.Promise;

/* harmony default export */ __webpack_exports__["default"] = (fetch);



/***/ }),

/***/ "./node_modules/worker-loader/dist/cjs.js?{\"inline\":true,\"fallback\":true}!./src/FetchWorkerTool.worker.js":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/worker-loader/dist/cjs.js?{"inline":true,"fallback":true}!./src/FetchWorkerTool.worker.js ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function() {
  return __webpack_require__(/*! !./node_modules/worker-loader/dist/workers/InlineWorker.js */ "./node_modules/worker-loader/dist/workers/InlineWorker.js")("/******/ (function(modules) { // webpackBootstrap\n/******/ \t// The module cache\n/******/ \tvar installedModules = {};\n/******/\n/******/ \t// The require function\n/******/ \tfunction __webpack_require__(moduleId) {\n/******/\n/******/ \t\t// Check if module is in cache\n/******/ \t\tif(installedModules[moduleId]) {\n/******/ \t\t\treturn installedModules[moduleId].exports;\n/******/ \t\t}\n/******/ \t\t// Create a new module (and put it into the cache)\n/******/ \t\tvar module = installedModules[moduleId] = {\n/******/ \t\t\ti: moduleId,\n/******/ \t\t\tl: false,\n/******/ \t\t\texports: {}\n/******/ \t\t};\n/******/\n/******/ \t\t// Execute the module function\n/******/ \t\tmodules[moduleId].call(module.exports, module, module.exports, __webpack_require__);\n/******/\n/******/ \t\t// Flag the module as loaded\n/******/ \t\tmodule.l = true;\n/******/\n/******/ \t\t// Return the exports of the module\n/******/ \t\treturn module.exports;\n/******/ \t}\n/******/\n/******/\n/******/ \t// expose the modules object (__webpack_modules__)\n/******/ \t__webpack_require__.m = modules;\n/******/\n/******/ \t// expose the module cache\n/******/ \t__webpack_require__.c = installedModules;\n/******/\n/******/ \t// define getter function for harmony exports\n/******/ \t__webpack_require__.d = function(exports, name, getter) {\n/******/ \t\tif(!__webpack_require__.o(exports, name)) {\n/******/ \t\t\tObject.defineProperty(exports, name, { enumerable: true, get: getter });\n/******/ \t\t}\n/******/ \t};\n/******/\n/******/ \t// define __esModule on exports\n/******/ \t__webpack_require__.r = function(exports) {\n/******/ \t\tif(typeof Symbol !== 'undefined' && Symbol.toStringTag) {\n/******/ \t\t\tObject.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });\n/******/ \t\t}\n/******/ \t\tObject.defineProperty(exports, '__esModule', { value: true });\n/******/ \t};\n/******/\n/******/ \t// create a fake namespace object\n/******/ \t// mode & 1: value is a module id, require it\n/******/ \t// mode & 2: merge all properties of value into the ns\n/******/ \t// mode & 4: return value when already ns object\n/******/ \t// mode & 8|1: behave like require\n/******/ \t__webpack_require__.t = function(value, mode) {\n/******/ \t\tif(mode & 1) value = __webpack_require__(value);\n/******/ \t\tif(mode & 8) return value;\n/******/ \t\tif((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;\n/******/ \t\tvar ns = Object.create(null);\n/******/ \t\t__webpack_require__.r(ns);\n/******/ \t\tObject.defineProperty(ns, 'default', { enumerable: true, value: value });\n/******/ \t\tif(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));\n/******/ \t\treturn ns;\n/******/ \t};\n/******/\n/******/ \t// getDefaultExport function for compatibility with non-harmony modules\n/******/ \t__webpack_require__.n = function(module) {\n/******/ \t\tvar getter = module && module.__esModule ?\n/******/ \t\t\tfunction getDefault() { return module['default']; } :\n/******/ \t\t\tfunction getModuleExports() { return module; };\n/******/ \t\t__webpack_require__.d(getter, 'a', getter);\n/******/ \t\treturn getter;\n/******/ \t};\n/******/\n/******/ \t// Object.prototype.hasOwnProperty.call\n/******/ \t__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };\n/******/\n/******/ \t// __webpack_public_path__\n/******/ \t__webpack_require__.p = \"\";\n/******/\n/******/\n/******/ \t// Load entry module and return exports\n/******/ \treturn __webpack_require__(__webpack_require__.s = \"./node_modules/babel-loader/lib/index.js?!./src/FetchWorkerTool.worker.js\");\n/******/ })\n/************************************************************************/\n/******/ ({\n\n/***/ \"./node_modules/babel-loader/lib/index.js?!./src/FetchWorkerTool.worker.js\":\n/*!*******************************************************************************!*\\\n  !*** ./node_modules/babel-loader/lib??ref--4!./src/FetchWorkerTool.worker.js ***!\n  \\*******************************************************************************/\n/*! no static exports found */\n/***/ (function(module, exports, __webpack_require__) {\n\n/* WEBPACK VAR INJECTION */(function(fetch) {/* eslint-env worker */\nvar jobsActive = 0;\nvar complete = [];\nvar intervalId = null;\n/**\n * Register a step function.\n *\n * Step checks if there are completed jobs and if there are sends them to the\n * parent. Then it checks the jobs count. If there are no further jobs, clear\n * the step.\n */\n\nvar registerStep = function registerStep() {\n  intervalId = setInterval(function () {\n    if (complete.length) {\n      // Send our chunk of completed requests and instruct postMessage to\n      // transfer the buffers instead of copying them.\n      postMessage(complete.slice(), // Instruct postMessage that these buffers in the sent message\n      // should use their Transferable trait. After the postMessage\n      // call the \"buffers\" will still be in complete if you looked,\n      // but they will all be length 0 as the data they reference has\n      // been sent to the window. This lets us send a lot of data\n      // without the normal postMessage behaviour of making a copy of\n      // all of the data for the window.\n      complete.map(function (response) {\n        return response.buffer;\n      }).filter(Boolean));\n      complete.length = 0;\n    }\n\n    if (jobsActive === 0) {\n      clearInterval(intervalId);\n      intervalId = null;\n    }\n  }, 1);\n};\n/**\n * Receive a job from the parent and fetch the requested data.\n * @param {object} options.job A job id, url, and options descriptor to perform.\n */\n\n\nvar onMessage = function onMessage(_ref) {\n  var job = _ref.data;\n\n  if (jobsActive === 0 && !intervalId) {\n    registerStep();\n  }\n\n  jobsActive++;\n  fetch(job.url, job.options).then(function (response) {\n    return response.arrayBuffer();\n  }).then(function (buffer) {\n    return complete.push({\n      id: job.id,\n      buffer: buffer\n    });\n  }).catch(function (error) {\n    return complete.push({\n      id: job.id,\n      error: error\n    });\n  }).then(function () {\n    return jobsActive--;\n  });\n};\n\nif (self.fetch) {\n  postMessage({\n    support: {\n      fetch: true\n    }\n  });\n  self.addEventListener('message', onMessage);\n} else {\n  postMessage({\n    support: {\n      fetch: false\n    }\n  });\n  self.addEventListener('message', function (_ref2) {\n    var job = _ref2.data;\n    postMessage([{\n      id: job.id,\n      error: new Error('fetch is unavailable')\n    }]);\n  });\n}\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! node-fetch */ \"./node_modules/node-fetch/lib/index.mjs\")[\"default\"]))\n\n/***/ }),\n\n/***/ \"./node_modules/node-fetch/lib/index.mjs\":\n/*!***********************************************!*\\\n  !*** ./node_modules/node-fetch/lib/index.mjs ***!\n  \\***********************************************/\n/*! exports provided: default, Headers, Request, Response, FetchError */\n/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {\n\n\"use strict\";\n__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Headers\", function() { return Headers; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Request\", function() { return Request; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Response\", function() { return Response; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FetchError\", function() { return FetchError; });\n/* harmony import */ var stream__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! stream */ \"stream\");\n/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! http */ \"http\");\n/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! url */ \"url\");\n/* harmony import */ var https__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! https */ \"https\");\n/* harmony import */ var zlib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! zlib */ \"zlib\");\n\n\n\n\n\n\n// Based on https://github.com/tmpvar/jsdom/blob/aa85b2abf07766ff7bf5c1f6daafb3726f2f2db5/lib/jsdom/living/blob.js\n\n// fix for \"Readable\" isn't a named export issue\nconst Readable = stream__WEBPACK_IMPORTED_MODULE_0__.Readable;\n\nconst BUFFER = Symbol('buffer');\nconst TYPE = Symbol('type');\n\nclass Blob {\n\tconstructor() {\n\t\tthis[TYPE] = '';\n\n\t\tconst blobParts = arguments[0];\n\t\tconst options = arguments[1];\n\n\t\tconst buffers = [];\n\t\tlet size = 0;\n\n\t\tif (blobParts) {\n\t\t\tconst a = blobParts;\n\t\t\tconst length = Number(a.length);\n\t\t\tfor (let i = 0; i < length; i++) {\n\t\t\t\tconst element = a[i];\n\t\t\t\tlet buffer;\n\t\t\t\tif (element instanceof Buffer) {\n\t\t\t\t\tbuffer = element;\n\t\t\t\t} else if (ArrayBuffer.isView(element)) {\n\t\t\t\t\tbuffer = Buffer.from(element.buffer, element.byteOffset, element.byteLength);\n\t\t\t\t} else if (element instanceof ArrayBuffer) {\n\t\t\t\t\tbuffer = Buffer.from(element);\n\t\t\t\t} else if (element instanceof Blob) {\n\t\t\t\t\tbuffer = element[BUFFER];\n\t\t\t\t} else {\n\t\t\t\t\tbuffer = Buffer.from(typeof element === 'string' ? element : String(element));\n\t\t\t\t}\n\t\t\t\tsize += buffer.length;\n\t\t\t\tbuffers.push(buffer);\n\t\t\t}\n\t\t}\n\n\t\tthis[BUFFER] = Buffer.concat(buffers);\n\n\t\tlet type = options && options.type !== undefined && String(options.type).toLowerCase();\n\t\tif (type && !/[^\\u0020-\\u007E]/.test(type)) {\n\t\t\tthis[TYPE] = type;\n\t\t}\n\t}\n\tget size() {\n\t\treturn this[BUFFER].length;\n\t}\n\tget type() {\n\t\treturn this[TYPE];\n\t}\n\ttext() {\n\t\treturn Promise.resolve(this[BUFFER].toString());\n\t}\n\tarrayBuffer() {\n\t\tconst buf = this[BUFFER];\n\t\tconst ab = buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength);\n\t\treturn Promise.resolve(ab);\n\t}\n\tstream() {\n\t\tconst readable = new Readable();\n\t\treadable._read = function () {};\n\t\treadable.push(this[BUFFER]);\n\t\treadable.push(null);\n\t\treturn readable;\n\t}\n\ttoString() {\n\t\treturn '[object Blob]';\n\t}\n\tslice() {\n\t\tconst size = this.size;\n\n\t\tconst start = arguments[0];\n\t\tconst end = arguments[1];\n\t\tlet relativeStart, relativeEnd;\n\t\tif (start === undefined) {\n\t\t\trelativeStart = 0;\n\t\t} else if (start < 0) {\n\t\t\trelativeStart = Math.max(size + start, 0);\n\t\t} else {\n\t\t\trelativeStart = Math.min(start, size);\n\t\t}\n\t\tif (end === undefined) {\n\t\t\trelativeEnd = size;\n\t\t} else if (end < 0) {\n\t\t\trelativeEnd = Math.max(size + end, 0);\n\t\t} else {\n\t\t\trelativeEnd = Math.min(end, size);\n\t\t}\n\t\tconst span = Math.max(relativeEnd - relativeStart, 0);\n\n\t\tconst buffer = this[BUFFER];\n\t\tconst slicedBuffer = buffer.slice(relativeStart, relativeStart + span);\n\t\tconst blob = new Blob([], { type: arguments[2] });\n\t\tblob[BUFFER] = slicedBuffer;\n\t\treturn blob;\n\t}\n}\n\nObject.defineProperties(Blob.prototype, {\n\tsize: { enumerable: true },\n\ttype: { enumerable: true },\n\tslice: { enumerable: true }\n});\n\nObject.defineProperty(Blob.prototype, Symbol.toStringTag, {\n\tvalue: 'Blob',\n\twritable: false,\n\tenumerable: false,\n\tconfigurable: true\n});\n\n/**\n * fetch-error.js\n *\n * FetchError interface for operational errors\n */\n\n/**\n * Create FetchError instance\n *\n * @param   String      message      Error message for human\n * @param   String      type         Error type for machine\n * @param   String      systemError  For Node.js system error\n * @return  FetchError\n */\nfunction FetchError(message, type, systemError) {\n  Error.call(this, message);\n\n  this.message = message;\n  this.type = type;\n\n  // when err.type is `system`, err.code contains system error code\n  if (systemError) {\n    this.code = this.errno = systemError.code;\n  }\n\n  // hide custom error implementation details from end-users\n  Error.captureStackTrace(this, this.constructor);\n}\n\nFetchError.prototype = Object.create(Error.prototype);\nFetchError.prototype.constructor = FetchError;\nFetchError.prototype.name = 'FetchError';\n\nlet convert;\ntry {\n\tconvert = require('encoding').convert;\n} catch (e) {}\n\nconst INTERNALS = Symbol('Body internals');\n\n// fix an issue where \"PassThrough\" isn't a named export for node <10\nconst PassThrough = stream__WEBPACK_IMPORTED_MODULE_0__.PassThrough;\n\n/**\n * Body mixin\n *\n * Ref: https://fetch.spec.whatwg.org/#body\n *\n * @param   Stream  body  Readable stream\n * @param   Object  opts  Response options\n * @return  Void\n */\nfunction Body(body) {\n\tvar _this = this;\n\n\tvar _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},\n\t    _ref$size = _ref.size;\n\n\tlet size = _ref$size === undefined ? 0 : _ref$size;\n\tvar _ref$timeout = _ref.timeout;\n\tlet timeout = _ref$timeout === undefined ? 0 : _ref$timeout;\n\n\tif (body == null) {\n\t\t// body is undefined or null\n\t\tbody = null;\n\t} else if (isURLSearchParams(body)) {\n\t\t// body is a URLSearchParams\n\t\tbody = Buffer.from(body.toString());\n\t} else if (isBlob(body)) ; else if (Buffer.isBuffer(body)) ; else if (Object.prototype.toString.call(body) === '[object ArrayBuffer]') {\n\t\t// body is ArrayBuffer\n\t\tbody = Buffer.from(body);\n\t} else if (ArrayBuffer.isView(body)) {\n\t\t// body is ArrayBufferView\n\t\tbody = Buffer.from(body.buffer, body.byteOffset, body.byteLength);\n\t} else if (body instanceof stream__WEBPACK_IMPORTED_MODULE_0__) ; else {\n\t\t// none of the above\n\t\t// coerce to string then buffer\n\t\tbody = Buffer.from(String(body));\n\t}\n\tthis[INTERNALS] = {\n\t\tbody,\n\t\tdisturbed: false,\n\t\terror: null\n\t};\n\tthis.size = size;\n\tthis.timeout = timeout;\n\n\tif (body instanceof stream__WEBPACK_IMPORTED_MODULE_0__) {\n\t\tbody.on('error', function (err) {\n\t\t\tconst error = err.name === 'AbortError' ? err : new FetchError(`Invalid response body while trying to fetch ${_this.url}: ${err.message}`, 'system', err);\n\t\t\t_this[INTERNALS].error = error;\n\t\t});\n\t}\n}\n\nBody.prototype = {\n\tget body() {\n\t\treturn this[INTERNALS].body;\n\t},\n\n\tget bodyUsed() {\n\t\treturn this[INTERNALS].disturbed;\n\t},\n\n\t/**\n  * Decode response as ArrayBuffer\n  *\n  * @return  Promise\n  */\n\tarrayBuffer() {\n\t\treturn consumeBody.call(this).then(function (buf) {\n\t\t\treturn buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength);\n\t\t});\n\t},\n\n\t/**\n  * Return raw response as Blob\n  *\n  * @return Promise\n  */\n\tblob() {\n\t\tlet ct = this.headers && this.headers.get('content-type') || '';\n\t\treturn consumeBody.call(this).then(function (buf) {\n\t\t\treturn Object.assign(\n\t\t\t// Prevent copying\n\t\t\tnew Blob([], {\n\t\t\t\ttype: ct.toLowerCase()\n\t\t\t}), {\n\t\t\t\t[BUFFER]: buf\n\t\t\t});\n\t\t});\n\t},\n\n\t/**\n  * Decode response as json\n  *\n  * @return  Promise\n  */\n\tjson() {\n\t\tvar _this2 = this;\n\n\t\treturn consumeBody.call(this).then(function (buffer) {\n\t\t\ttry {\n\t\t\t\treturn JSON.parse(buffer.toString());\n\t\t\t} catch (err) {\n\t\t\t\treturn Body.Promise.reject(new FetchError(`invalid json response body at ${_this2.url} reason: ${err.message}`, 'invalid-json'));\n\t\t\t}\n\t\t});\n\t},\n\n\t/**\n  * Decode response as text\n  *\n  * @return  Promise\n  */\n\ttext() {\n\t\treturn consumeBody.call(this).then(function (buffer) {\n\t\t\treturn buffer.toString();\n\t\t});\n\t},\n\n\t/**\n  * Decode response as buffer (non-spec api)\n  *\n  * @return  Promise\n  */\n\tbuffer() {\n\t\treturn consumeBody.call(this);\n\t},\n\n\t/**\n  * Decode response as text, while automatically detecting the encoding and\n  * trying to decode to UTF-8 (non-spec api)\n  *\n  * @return  Promise\n  */\n\ttextConverted() {\n\t\tvar _this3 = this;\n\n\t\treturn consumeBody.call(this).then(function (buffer) {\n\t\t\treturn convertBody(buffer, _this3.headers);\n\t\t});\n\t}\n};\n\n// In browsers, all properties are enumerable.\nObject.defineProperties(Body.prototype, {\n\tbody: { enumerable: true },\n\tbodyUsed: { enumerable: true },\n\tarrayBuffer: { enumerable: true },\n\tblob: { enumerable: true },\n\tjson: { enumerable: true },\n\ttext: { enumerable: true }\n});\n\nBody.mixIn = function (proto) {\n\tfor (const name of Object.getOwnPropertyNames(Body.prototype)) {\n\t\t// istanbul ignore else: future proof\n\t\tif (!(name in proto)) {\n\t\t\tconst desc = Object.getOwnPropertyDescriptor(Body.prototype, name);\n\t\t\tObject.defineProperty(proto, name, desc);\n\t\t}\n\t}\n};\n\n/**\n * Consume and convert an entire Body to a Buffer.\n *\n * Ref: https://fetch.spec.whatwg.org/#concept-body-consume-body\n *\n * @return  Promise\n */\nfunction consumeBody() {\n\tvar _this4 = this;\n\n\tif (this[INTERNALS].disturbed) {\n\t\treturn Body.Promise.reject(new TypeError(`body used already for: ${this.url}`));\n\t}\n\n\tthis[INTERNALS].disturbed = true;\n\n\tif (this[INTERNALS].error) {\n\t\treturn Body.Promise.reject(this[INTERNALS].error);\n\t}\n\n\tlet body = this.body;\n\n\t// body is null\n\tif (body === null) {\n\t\treturn Body.Promise.resolve(Buffer.alloc(0));\n\t}\n\n\t// body is blob\n\tif (isBlob(body)) {\n\t\tbody = body.stream();\n\t}\n\n\t// body is buffer\n\tif (Buffer.isBuffer(body)) {\n\t\treturn Body.Promise.resolve(body);\n\t}\n\n\t// istanbul ignore if: should never happen\n\tif (!(body instanceof stream__WEBPACK_IMPORTED_MODULE_0__)) {\n\t\treturn Body.Promise.resolve(Buffer.alloc(0));\n\t}\n\n\t// body is stream\n\t// get ready to actually consume the body\n\tlet accum = [];\n\tlet accumBytes = 0;\n\tlet abort = false;\n\n\treturn new Body.Promise(function (resolve, reject) {\n\t\tlet resTimeout;\n\n\t\t// allow timeout on slow response body\n\t\tif (_this4.timeout) {\n\t\t\tresTimeout = setTimeout(function () {\n\t\t\t\tabort = true;\n\t\t\t\treject(new FetchError(`Response timeout while trying to fetch ${_this4.url} (over ${_this4.timeout}ms)`, 'body-timeout'));\n\t\t\t}, _this4.timeout);\n\t\t}\n\n\t\t// handle stream errors\n\t\tbody.on('error', function (err) {\n\t\t\tif (err.name === 'AbortError') {\n\t\t\t\t// if the request was aborted, reject with this Error\n\t\t\t\tabort = true;\n\t\t\t\treject(err);\n\t\t\t} else {\n\t\t\t\t// other errors, such as incorrect content-encoding\n\t\t\t\treject(new FetchError(`Invalid response body while trying to fetch ${_this4.url}: ${err.message}`, 'system', err));\n\t\t\t}\n\t\t});\n\n\t\tbody.on('data', function (chunk) {\n\t\t\tif (abort || chunk === null) {\n\t\t\t\treturn;\n\t\t\t}\n\n\t\t\tif (_this4.size && accumBytes + chunk.length > _this4.size) {\n\t\t\t\tabort = true;\n\t\t\t\treject(new FetchError(`content size at ${_this4.url} over limit: ${_this4.size}`, 'max-size'));\n\t\t\t\treturn;\n\t\t\t}\n\n\t\t\taccumBytes += chunk.length;\n\t\t\taccum.push(chunk);\n\t\t});\n\n\t\tbody.on('end', function () {\n\t\t\tif (abort) {\n\t\t\t\treturn;\n\t\t\t}\n\n\t\t\tclearTimeout(resTimeout);\n\n\t\t\ttry {\n\t\t\t\tresolve(Buffer.concat(accum, accumBytes));\n\t\t\t} catch (err) {\n\t\t\t\t// handle streams that have accumulated too much data (issue #414)\n\t\t\t\treject(new FetchError(`Could not create Buffer from response body for ${_this4.url}: ${err.message}`, 'system', err));\n\t\t\t}\n\t\t});\n\t});\n}\n\n/**\n * Detect buffer encoding and convert to target encoding\n * ref: http://www.w3.org/TR/2011/WD-html5-20110113/parsing.html#determining-the-character-encoding\n *\n * @param   Buffer  buffer    Incoming buffer\n * @param   String  encoding  Target encoding\n * @return  String\n */\nfunction convertBody(buffer, headers) {\n\tif (typeof convert !== 'function') {\n\t\tthrow new Error('The package `encoding` must be installed to use the textConverted() function');\n\t}\n\n\tconst ct = headers.get('content-type');\n\tlet charset = 'utf-8';\n\tlet res, str;\n\n\t// header\n\tif (ct) {\n\t\tres = /charset=([^;]*)/i.exec(ct);\n\t}\n\n\t// no charset in content type, peek at response body for at most 1024 bytes\n\tstr = buffer.slice(0, 1024).toString();\n\n\t// html5\n\tif (!res && str) {\n\t\tres = /<meta.+?charset=(['\"])(.+?)\\1/i.exec(str);\n\t}\n\n\t// html4\n\tif (!res && str) {\n\t\tres = /<meta[\\s]+?http-equiv=(['\"])content-type\\1[\\s]+?content=(['\"])(.+?)\\2/i.exec(str);\n\t\tif (!res) {\n\t\t\tres = /<meta[\\s]+?content=(['\"])(.+?)\\1[\\s]+?http-equiv=(['\"])content-type\\3/i.exec(str);\n\t\t\tif (res) {\n\t\t\t\tres.pop(); // drop last quote\n\t\t\t}\n\t\t}\n\n\t\tif (res) {\n\t\t\tres = /charset=(.*)/i.exec(res.pop());\n\t\t}\n\t}\n\n\t// xml\n\tif (!res && str) {\n\t\tres = /<\\?xml.+?encoding=(['\"])(.+?)\\1/i.exec(str);\n\t}\n\n\t// found charset\n\tif (res) {\n\t\tcharset = res.pop();\n\n\t\t// prevent decode issues when sites use incorrect encoding\n\t\t// ref: https://hsivonen.fi/encoding-menu/\n\t\tif (charset === 'gb2312' || charset === 'gbk') {\n\t\t\tcharset = 'gb18030';\n\t\t}\n\t}\n\n\t// turn raw buffers into a single utf-8 buffer\n\treturn convert(buffer, 'UTF-8', charset).toString();\n}\n\n/**\n * Detect a URLSearchParams object\n * ref: https://github.com/bitinn/node-fetch/issues/296#issuecomment-307598143\n *\n * @param   Object  obj     Object to detect by type or brand\n * @return  String\n */\nfunction isURLSearchParams(obj) {\n\t// Duck-typing as a necessary condition.\n\tif (typeof obj !== 'object' || typeof obj.append !== 'function' || typeof obj.delete !== 'function' || typeof obj.get !== 'function' || typeof obj.getAll !== 'function' || typeof obj.has !== 'function' || typeof obj.set !== 'function') {\n\t\treturn false;\n\t}\n\n\t// Brand-checking and more duck-typing as optional condition.\n\treturn obj.constructor.name === 'URLSearchParams' || Object.prototype.toString.call(obj) === '[object URLSearchParams]' || typeof obj.sort === 'function';\n}\n\n/**\n * Check if `obj` is a W3C `Blob` object (which `File` inherits from)\n * @param  {*} obj\n * @return {boolean}\n */\nfunction isBlob(obj) {\n\treturn typeof obj === 'object' && typeof obj.arrayBuffer === 'function' && typeof obj.type === 'string' && typeof obj.stream === 'function' && typeof obj.constructor === 'function' && typeof obj.constructor.name === 'string' && /^(Blob|File)$/.test(obj.constructor.name) && /^(Blob|File)$/.test(obj[Symbol.toStringTag]);\n}\n\n/**\n * Clone body given Res/Req instance\n *\n * @param   Mixed  instance  Response or Request instance\n * @return  Mixed\n */\nfunction clone(instance) {\n\tlet p1, p2;\n\tlet body = instance.body;\n\n\t// don't allow cloning a used body\n\tif (instance.bodyUsed) {\n\t\tthrow new Error('cannot clone body after it is used');\n\t}\n\n\t// check that body is a stream and not form-data object\n\t// note: we can't clone the form-data object without having it as a dependency\n\tif (body instanceof stream__WEBPACK_IMPORTED_MODULE_0__ && typeof body.getBoundary !== 'function') {\n\t\t// tee instance body\n\t\tp1 = new PassThrough();\n\t\tp2 = new PassThrough();\n\t\tbody.pipe(p1);\n\t\tbody.pipe(p2);\n\t\t// set instance body to teed body and return the other teed body\n\t\tinstance[INTERNALS].body = p1;\n\t\tbody = p2;\n\t}\n\n\treturn body;\n}\n\n/**\n * Performs the operation \"extract a `Content-Type` value from |object|\" as\n * specified in the specification:\n * https://fetch.spec.whatwg.org/#concept-bodyinit-extract\n *\n * This function assumes that instance.body is present.\n *\n * @param   Mixed  instance  Any options.body input\n */\nfunction extractContentType(body) {\n\tif (body === null) {\n\t\t// body is null\n\t\treturn null;\n\t} else if (typeof body === 'string') {\n\t\t// body is string\n\t\treturn 'text/plain;charset=UTF-8';\n\t} else if (isURLSearchParams(body)) {\n\t\t// body is a URLSearchParams\n\t\treturn 'application/x-www-form-urlencoded;charset=UTF-8';\n\t} else if (isBlob(body)) {\n\t\t// body is blob\n\t\treturn body.type || null;\n\t} else if (Buffer.isBuffer(body)) {\n\t\t// body is buffer\n\t\treturn null;\n\t} else if (Object.prototype.toString.call(body) === '[object ArrayBuffer]') {\n\t\t// body is ArrayBuffer\n\t\treturn null;\n\t} else if (ArrayBuffer.isView(body)) {\n\t\t// body is ArrayBufferView\n\t\treturn null;\n\t} else if (typeof body.getBoundary === 'function') {\n\t\t// detect form data input from form-data module\n\t\treturn `multipart/form-data;boundary=${body.getBoundary()}`;\n\t} else if (body instanceof stream__WEBPACK_IMPORTED_MODULE_0__) {\n\t\t// body is stream\n\t\t// can't really do much about this\n\t\treturn null;\n\t} else {\n\t\t// Body constructor defaults other things to string\n\t\treturn 'text/plain;charset=UTF-8';\n\t}\n}\n\n/**\n * The Fetch Standard treats this as if \"total bytes\" is a property on the body.\n * For us, we have to explicitly get it with a function.\n *\n * ref: https://fetch.spec.whatwg.org/#concept-body-total-bytes\n *\n * @param   Body    instance   Instance of Body\n * @return  Number?            Number of bytes, or null if not possible\n */\nfunction getTotalBytes(instance) {\n\tconst body = instance.body;\n\n\n\tif (body === null) {\n\t\t// body is null\n\t\treturn 0;\n\t} else if (isBlob(body)) {\n\t\treturn body.size;\n\t} else if (Buffer.isBuffer(body)) {\n\t\t// body is buffer\n\t\treturn body.length;\n\t} else if (body && typeof body.getLengthSync === 'function') {\n\t\t// detect form data input from form-data module\n\t\tif (body._lengthRetrievers && body._lengthRetrievers.length == 0 || // 1.x\n\t\tbody.hasKnownLength && body.hasKnownLength()) {\n\t\t\t// 2.x\n\t\t\treturn body.getLengthSync();\n\t\t}\n\t\treturn null;\n\t} else {\n\t\t// body is stream\n\t\treturn null;\n\t}\n}\n\n/**\n * Write a Body to a Node.js WritableStream (e.g. http.Request) object.\n *\n * @param   Body    instance   Instance of Body\n * @return  Void\n */\nfunction writeToStream(dest, instance) {\n\tconst body = instance.body;\n\n\n\tif (body === null) {\n\t\t// body is null\n\t\tdest.end();\n\t} else if (isBlob(body)) {\n\t\tbody.stream().pipe(dest);\n\t} else if (Buffer.isBuffer(body)) {\n\t\t// body is buffer\n\t\tdest.write(body);\n\t\tdest.end();\n\t} else {\n\t\t// body is stream\n\t\tbody.pipe(dest);\n\t}\n}\n\n// expose Promise\nBody.Promise = global.Promise;\n\n/**\n * headers.js\n *\n * Headers class offers convenient helpers\n */\n\nconst invalidTokenRegex = /[^\\^_`a-zA-Z\\-0-9!#$%&'*+.|~]/;\nconst invalidHeaderCharRegex = /[^\\t\\x20-\\x7e\\x80-\\xff]/;\n\nfunction validateName(name) {\n\tname = `${name}`;\n\tif (invalidTokenRegex.test(name) || name === '') {\n\t\tthrow new TypeError(`${name} is not a legal HTTP header name`);\n\t}\n}\n\nfunction validateValue(value) {\n\tvalue = `${value}`;\n\tif (invalidHeaderCharRegex.test(value)) {\n\t\tthrow new TypeError(`${value} is not a legal HTTP header value`);\n\t}\n}\n\n/**\n * Find the key in the map object given a header name.\n *\n * Returns undefined if not found.\n *\n * @param   String  name  Header name\n * @return  String|Undefined\n */\nfunction find(map, name) {\n\tname = name.toLowerCase();\n\tfor (const key in map) {\n\t\tif (key.toLowerCase() === name) {\n\t\t\treturn key;\n\t\t}\n\t}\n\treturn undefined;\n}\n\nconst MAP = Symbol('map');\nclass Headers {\n\t/**\n  * Headers class\n  *\n  * @param   Object  headers  Response headers\n  * @return  Void\n  */\n\tconstructor() {\n\t\tlet init = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;\n\n\t\tthis[MAP] = Object.create(null);\n\n\t\tif (init instanceof Headers) {\n\t\t\tconst rawHeaders = init.raw();\n\t\t\tconst headerNames = Object.keys(rawHeaders);\n\n\t\t\tfor (const headerName of headerNames) {\n\t\t\t\tfor (const value of rawHeaders[headerName]) {\n\t\t\t\t\tthis.append(headerName, value);\n\t\t\t\t}\n\t\t\t}\n\n\t\t\treturn;\n\t\t}\n\n\t\t// We don't worry about converting prop to ByteString here as append()\n\t\t// will handle it.\n\t\tif (init == null) ; else if (typeof init === 'object') {\n\t\t\tconst method = init[Symbol.iterator];\n\t\t\tif (method != null) {\n\t\t\t\tif (typeof method !== 'function') {\n\t\t\t\t\tthrow new TypeError('Header pairs must be iterable');\n\t\t\t\t}\n\n\t\t\t\t// sequence<sequence<ByteString>>\n\t\t\t\t// Note: per spec we have to first exhaust the lists then process them\n\t\t\t\tconst pairs = [];\n\t\t\t\tfor (const pair of init) {\n\t\t\t\t\tif (typeof pair !== 'object' || typeof pair[Symbol.iterator] !== 'function') {\n\t\t\t\t\t\tthrow new TypeError('Each header pair must be iterable');\n\t\t\t\t\t}\n\t\t\t\t\tpairs.push(Array.from(pair));\n\t\t\t\t}\n\n\t\t\t\tfor (const pair of pairs) {\n\t\t\t\t\tif (pair.length !== 2) {\n\t\t\t\t\t\tthrow new TypeError('Each header pair must be a name/value tuple');\n\t\t\t\t\t}\n\t\t\t\t\tthis.append(pair[0], pair[1]);\n\t\t\t\t}\n\t\t\t} else {\n\t\t\t\t// record<ByteString, ByteString>\n\t\t\t\tfor (const key of Object.keys(init)) {\n\t\t\t\t\tconst value = init[key];\n\t\t\t\t\tthis.append(key, value);\n\t\t\t\t}\n\t\t\t}\n\t\t} else {\n\t\t\tthrow new TypeError('Provided initializer must be an object');\n\t\t}\n\t}\n\n\t/**\n  * Return combined header value given name\n  *\n  * @param   String  name  Header name\n  * @return  Mixed\n  */\n\tget(name) {\n\t\tname = `${name}`;\n\t\tvalidateName(name);\n\t\tconst key = find(this[MAP], name);\n\t\tif (key === undefined) {\n\t\t\treturn null;\n\t\t}\n\n\t\treturn this[MAP][key].join(', ');\n\t}\n\n\t/**\n  * Iterate over all headers\n  *\n  * @param   Function  callback  Executed for each item with parameters (value, name, thisArg)\n  * @param   Boolean   thisArg   `this` context for callback function\n  * @return  Void\n  */\n\tforEach(callback) {\n\t\tlet thisArg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;\n\n\t\tlet pairs = getHeaders(this);\n\t\tlet i = 0;\n\t\twhile (i < pairs.length) {\n\t\t\tvar _pairs$i = pairs[i];\n\t\t\tconst name = _pairs$i[0],\n\t\t\t      value = _pairs$i[1];\n\n\t\t\tcallback.call(thisArg, value, name, this);\n\t\t\tpairs = getHeaders(this);\n\t\t\ti++;\n\t\t}\n\t}\n\n\t/**\n  * Overwrite header values given name\n  *\n  * @param   String  name   Header name\n  * @param   String  value  Header value\n  * @return  Void\n  */\n\tset(name, value) {\n\t\tname = `${name}`;\n\t\tvalue = `${value}`;\n\t\tvalidateName(name);\n\t\tvalidateValue(value);\n\t\tconst key = find(this[MAP], name);\n\t\tthis[MAP][key !== undefined ? key : name] = [value];\n\t}\n\n\t/**\n  * Append a value onto existing header\n  *\n  * @param   String  name   Header name\n  * @param   String  value  Header value\n  * @return  Void\n  */\n\tappend(name, value) {\n\t\tname = `${name}`;\n\t\tvalue = `${value}`;\n\t\tvalidateName(name);\n\t\tvalidateValue(value);\n\t\tconst key = find(this[MAP], name);\n\t\tif (key !== undefined) {\n\t\t\tthis[MAP][key].push(value);\n\t\t} else {\n\t\t\tthis[MAP][name] = [value];\n\t\t}\n\t}\n\n\t/**\n  * Check for header name existence\n  *\n  * @param   String   name  Header name\n  * @return  Boolean\n  */\n\thas(name) {\n\t\tname = `${name}`;\n\t\tvalidateName(name);\n\t\treturn find(this[MAP], name) !== undefined;\n\t}\n\n\t/**\n  * Delete all header values given name\n  *\n  * @param   String  name  Header name\n  * @return  Void\n  */\n\tdelete(name) {\n\t\tname = `${name}`;\n\t\tvalidateName(name);\n\t\tconst key = find(this[MAP], name);\n\t\tif (key !== undefined) {\n\t\t\tdelete this[MAP][key];\n\t\t}\n\t}\n\n\t/**\n  * Return raw headers (non-spec api)\n  *\n  * @return  Object\n  */\n\traw() {\n\t\treturn this[MAP];\n\t}\n\n\t/**\n  * Get an iterator on keys.\n  *\n  * @return  Iterator\n  */\n\tkeys() {\n\t\treturn createHeadersIterator(this, 'key');\n\t}\n\n\t/**\n  * Get an iterator on values.\n  *\n  * @return  Iterator\n  */\n\tvalues() {\n\t\treturn createHeadersIterator(this, 'value');\n\t}\n\n\t/**\n  * Get an iterator on entries.\n  *\n  * This is the default iterator of the Headers object.\n  *\n  * @return  Iterator\n  */\n\t[Symbol.iterator]() {\n\t\treturn createHeadersIterator(this, 'key+value');\n\t}\n}\nHeaders.prototype.entries = Headers.prototype[Symbol.iterator];\n\nObject.defineProperty(Headers.prototype, Symbol.toStringTag, {\n\tvalue: 'Headers',\n\twritable: false,\n\tenumerable: false,\n\tconfigurable: true\n});\n\nObject.defineProperties(Headers.prototype, {\n\tget: { enumerable: true },\n\tforEach: { enumerable: true },\n\tset: { enumerable: true },\n\tappend: { enumerable: true },\n\thas: { enumerable: true },\n\tdelete: { enumerable: true },\n\tkeys: { enumerable: true },\n\tvalues: { enumerable: true },\n\tentries: { enumerable: true }\n});\n\nfunction getHeaders(headers) {\n\tlet kind = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'key+value';\n\n\tconst keys = Object.keys(headers[MAP]).sort();\n\treturn keys.map(kind === 'key' ? function (k) {\n\t\treturn k.toLowerCase();\n\t} : kind === 'value' ? function (k) {\n\t\treturn headers[MAP][k].join(', ');\n\t} : function (k) {\n\t\treturn [k.toLowerCase(), headers[MAP][k].join(', ')];\n\t});\n}\n\nconst INTERNAL = Symbol('internal');\n\nfunction createHeadersIterator(target, kind) {\n\tconst iterator = Object.create(HeadersIteratorPrototype);\n\titerator[INTERNAL] = {\n\t\ttarget,\n\t\tkind,\n\t\tindex: 0\n\t};\n\treturn iterator;\n}\n\nconst HeadersIteratorPrototype = Object.setPrototypeOf({\n\tnext() {\n\t\t// istanbul ignore if\n\t\tif (!this || Object.getPrototypeOf(this) !== HeadersIteratorPrototype) {\n\t\t\tthrow new TypeError('Value of `this` is not a HeadersIterator');\n\t\t}\n\n\t\tvar _INTERNAL = this[INTERNAL];\n\t\tconst target = _INTERNAL.target,\n\t\t      kind = _INTERNAL.kind,\n\t\t      index = _INTERNAL.index;\n\n\t\tconst values = getHeaders(target, kind);\n\t\tconst len = values.length;\n\t\tif (index >= len) {\n\t\t\treturn {\n\t\t\t\tvalue: undefined,\n\t\t\t\tdone: true\n\t\t\t};\n\t\t}\n\n\t\tthis[INTERNAL].index = index + 1;\n\n\t\treturn {\n\t\t\tvalue: values[index],\n\t\t\tdone: false\n\t\t};\n\t}\n}, Object.getPrototypeOf(Object.getPrototypeOf([][Symbol.iterator]())));\n\nObject.defineProperty(HeadersIteratorPrototype, Symbol.toStringTag, {\n\tvalue: 'HeadersIterator',\n\twritable: false,\n\tenumerable: false,\n\tconfigurable: true\n});\n\n/**\n * Export the Headers object in a form that Node.js can consume.\n *\n * @param   Headers  headers\n * @return  Object\n */\nfunction exportNodeCompatibleHeaders(headers) {\n\tconst obj = Object.assign({ __proto__: null }, headers[MAP]);\n\n\t// http.request() only supports string as Host header. This hack makes\n\t// specifying custom Host header possible.\n\tconst hostHeaderKey = find(headers[MAP], 'Host');\n\tif (hostHeaderKey !== undefined) {\n\t\tobj[hostHeaderKey] = obj[hostHeaderKey][0];\n\t}\n\n\treturn obj;\n}\n\n/**\n * Create a Headers object from an object of headers, ignoring those that do\n * not conform to HTTP grammar productions.\n *\n * @param   Object  obj  Object of headers\n * @return  Headers\n */\nfunction createHeadersLenient(obj) {\n\tconst headers = new Headers();\n\tfor (const name of Object.keys(obj)) {\n\t\tif (invalidTokenRegex.test(name)) {\n\t\t\tcontinue;\n\t\t}\n\t\tif (Array.isArray(obj[name])) {\n\t\t\tfor (const val of obj[name]) {\n\t\t\t\tif (invalidHeaderCharRegex.test(val)) {\n\t\t\t\t\tcontinue;\n\t\t\t\t}\n\t\t\t\tif (headers[MAP][name] === undefined) {\n\t\t\t\t\theaders[MAP][name] = [val];\n\t\t\t\t} else {\n\t\t\t\t\theaders[MAP][name].push(val);\n\t\t\t\t}\n\t\t\t}\n\t\t} else if (!invalidHeaderCharRegex.test(obj[name])) {\n\t\t\theaders[MAP][name] = [obj[name]];\n\t\t}\n\t}\n\treturn headers;\n}\n\nconst INTERNALS$1 = Symbol('Response internals');\n\n// fix an issue where \"STATUS_CODES\" aren't a named export for node <10\nconst STATUS_CODES = http__WEBPACK_IMPORTED_MODULE_1__.STATUS_CODES;\n\n/**\n * Response class\n *\n * @param   Stream  body  Readable stream\n * @param   Object  opts  Response options\n * @return  Void\n */\nclass Response {\n\tconstructor() {\n\t\tlet body = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;\n\t\tlet opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n\n\t\tBody.call(this, body, opts);\n\n\t\tconst status = opts.status || 200;\n\t\tconst headers = new Headers(opts.headers);\n\n\t\tif (body != null && !headers.has('Content-Type')) {\n\t\t\tconst contentType = extractContentType(body);\n\t\t\tif (contentType) {\n\t\t\t\theaders.append('Content-Type', contentType);\n\t\t\t}\n\t\t}\n\n\t\tthis[INTERNALS$1] = {\n\t\t\turl: opts.url,\n\t\t\tstatus,\n\t\t\tstatusText: opts.statusText || STATUS_CODES[status],\n\t\t\theaders,\n\t\t\tcounter: opts.counter\n\t\t};\n\t}\n\n\tget url() {\n\t\treturn this[INTERNALS$1].url || '';\n\t}\n\n\tget status() {\n\t\treturn this[INTERNALS$1].status;\n\t}\n\n\t/**\n  * Convenience property representing if the request ended normally\n  */\n\tget ok() {\n\t\treturn this[INTERNALS$1].status >= 200 && this[INTERNALS$1].status < 300;\n\t}\n\n\tget redirected() {\n\t\treturn this[INTERNALS$1].counter > 0;\n\t}\n\n\tget statusText() {\n\t\treturn this[INTERNALS$1].statusText;\n\t}\n\n\tget headers() {\n\t\treturn this[INTERNALS$1].headers;\n\t}\n\n\t/**\n  * Clone this response\n  *\n  * @return  Response\n  */\n\tclone() {\n\t\treturn new Response(clone(this), {\n\t\t\turl: this.url,\n\t\t\tstatus: this.status,\n\t\t\tstatusText: this.statusText,\n\t\t\theaders: this.headers,\n\t\t\tok: this.ok,\n\t\t\tredirected: this.redirected\n\t\t});\n\t}\n}\n\nBody.mixIn(Response.prototype);\n\nObject.defineProperties(Response.prototype, {\n\turl: { enumerable: true },\n\tstatus: { enumerable: true },\n\tok: { enumerable: true },\n\tredirected: { enumerable: true },\n\tstatusText: { enumerable: true },\n\theaders: { enumerable: true },\n\tclone: { enumerable: true }\n});\n\nObject.defineProperty(Response.prototype, Symbol.toStringTag, {\n\tvalue: 'Response',\n\twritable: false,\n\tenumerable: false,\n\tconfigurable: true\n});\n\nconst INTERNALS$2 = Symbol('Request internals');\n\n// fix an issue where \"format\", \"parse\" aren't a named export for node <10\nconst parse_url = url__WEBPACK_IMPORTED_MODULE_2__.parse;\nconst format_url = url__WEBPACK_IMPORTED_MODULE_2__.format;\n\nconst streamDestructionSupported = 'destroy' in stream__WEBPACK_IMPORTED_MODULE_0__.Readable.prototype;\n\n/**\n * Check if a value is an instance of Request.\n *\n * @param   Mixed   input\n * @return  Boolean\n */\nfunction isRequest(input) {\n\treturn typeof input === 'object' && typeof input[INTERNALS$2] === 'object';\n}\n\nfunction isAbortSignal(signal) {\n\tconst proto = signal && typeof signal === 'object' && Object.getPrototypeOf(signal);\n\treturn !!(proto && proto.constructor.name === 'AbortSignal');\n}\n\n/**\n * Request class\n *\n * @param   Mixed   input  Url or Request instance\n * @param   Object  init   Custom options\n * @return  Void\n */\nclass Request {\n\tconstructor(input) {\n\t\tlet init = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n\n\t\tlet parsedURL;\n\n\t\t// normalize input\n\t\tif (!isRequest(input)) {\n\t\t\tif (input && input.href) {\n\t\t\t\t// in order to support Node.js' Url objects; though WHATWG's URL objects\n\t\t\t\t// will fall into this branch also (since their `toString()` will return\n\t\t\t\t// `href` property anyway)\n\t\t\t\tparsedURL = parse_url(input.href);\n\t\t\t} else {\n\t\t\t\t// coerce input to a string before attempting to parse\n\t\t\t\tparsedURL = parse_url(`${input}`);\n\t\t\t}\n\t\t\tinput = {};\n\t\t} else {\n\t\t\tparsedURL = parse_url(input.url);\n\t\t}\n\n\t\tlet method = init.method || input.method || 'GET';\n\t\tmethod = method.toUpperCase();\n\n\t\tif ((init.body != null || isRequest(input) && input.body !== null) && (method === 'GET' || method === 'HEAD')) {\n\t\t\tthrow new TypeError('Request with GET/HEAD method cannot have body');\n\t\t}\n\n\t\tlet inputBody = init.body != null ? init.body : isRequest(input) && input.body !== null ? clone(input) : null;\n\n\t\tBody.call(this, inputBody, {\n\t\t\ttimeout: init.timeout || input.timeout || 0,\n\t\t\tsize: init.size || input.size || 0\n\t\t});\n\n\t\tconst headers = new Headers(init.headers || input.headers || {});\n\n\t\tif (inputBody != null && !headers.has('Content-Type')) {\n\t\t\tconst contentType = extractContentType(inputBody);\n\t\t\tif (contentType) {\n\t\t\t\theaders.append('Content-Type', contentType);\n\t\t\t}\n\t\t}\n\n\t\tlet signal = isRequest(input) ? input.signal : null;\n\t\tif ('signal' in init) signal = init.signal;\n\n\t\tif (signal != null && !isAbortSignal(signal)) {\n\t\t\tthrow new TypeError('Expected signal to be an instanceof AbortSignal');\n\t\t}\n\n\t\tthis[INTERNALS$2] = {\n\t\t\tmethod,\n\t\t\tredirect: init.redirect || input.redirect || 'follow',\n\t\t\theaders,\n\t\t\tparsedURL,\n\t\t\tsignal\n\t\t};\n\n\t\t// node-fetch-only options\n\t\tthis.follow = init.follow !== undefined ? init.follow : input.follow !== undefined ? input.follow : 20;\n\t\tthis.compress = init.compress !== undefined ? init.compress : input.compress !== undefined ? input.compress : true;\n\t\tthis.counter = init.counter || input.counter || 0;\n\t\tthis.agent = init.agent || input.agent;\n\t}\n\n\tget method() {\n\t\treturn this[INTERNALS$2].method;\n\t}\n\n\tget url() {\n\t\treturn format_url(this[INTERNALS$2].parsedURL);\n\t}\n\n\tget headers() {\n\t\treturn this[INTERNALS$2].headers;\n\t}\n\n\tget redirect() {\n\t\treturn this[INTERNALS$2].redirect;\n\t}\n\n\tget signal() {\n\t\treturn this[INTERNALS$2].signal;\n\t}\n\n\t/**\n  * Clone this request\n  *\n  * @return  Request\n  */\n\tclone() {\n\t\treturn new Request(this);\n\t}\n}\n\nBody.mixIn(Request.prototype);\n\nObject.defineProperty(Request.prototype, Symbol.toStringTag, {\n\tvalue: 'Request',\n\twritable: false,\n\tenumerable: false,\n\tconfigurable: true\n});\n\nObject.defineProperties(Request.prototype, {\n\tmethod: { enumerable: true },\n\turl: { enumerable: true },\n\theaders: { enumerable: true },\n\tredirect: { enumerable: true },\n\tclone: { enumerable: true },\n\tsignal: { enumerable: true }\n});\n\n/**\n * Convert a Request to Node.js http request options.\n *\n * @param   Request  A Request instance\n * @return  Object   The options object to be passed to http.request\n */\nfunction getNodeRequestOptions(request) {\n\tconst parsedURL = request[INTERNALS$2].parsedURL;\n\tconst headers = new Headers(request[INTERNALS$2].headers);\n\n\t// fetch step 1.3\n\tif (!headers.has('Accept')) {\n\t\theaders.set('Accept', '*/*');\n\t}\n\n\t// Basic fetch\n\tif (!parsedURL.protocol || !parsedURL.hostname) {\n\t\tthrow new TypeError('Only absolute URLs are supported');\n\t}\n\n\tif (!/^https?:$/.test(parsedURL.protocol)) {\n\t\tthrow new TypeError('Only HTTP(S) protocols are supported');\n\t}\n\n\tif (request.signal && request.body instanceof stream__WEBPACK_IMPORTED_MODULE_0__.Readable && !streamDestructionSupported) {\n\t\tthrow new Error('Cancellation of streamed requests with AbortSignal is not supported in node < 8');\n\t}\n\n\t// HTTP-network-or-cache fetch steps 2.4-2.7\n\tlet contentLengthValue = null;\n\tif (request.body == null && /^(POST|PUT)$/i.test(request.method)) {\n\t\tcontentLengthValue = '0';\n\t}\n\tif (request.body != null) {\n\t\tconst totalBytes = getTotalBytes(request);\n\t\tif (typeof totalBytes === 'number') {\n\t\t\tcontentLengthValue = String(totalBytes);\n\t\t}\n\t}\n\tif (contentLengthValue) {\n\t\theaders.set('Content-Length', contentLengthValue);\n\t}\n\n\t// HTTP-network-or-cache fetch step 2.11\n\tif (!headers.has('User-Agent')) {\n\t\theaders.set('User-Agent', 'node-fetch/1.0 (+https://github.com/bitinn/node-fetch)');\n\t}\n\n\t// HTTP-network-or-cache fetch step 2.15\n\tif (request.compress && !headers.has('Accept-Encoding')) {\n\t\theaders.set('Accept-Encoding', 'gzip,deflate');\n\t}\n\n\tlet agent = request.agent;\n\tif (typeof agent === 'function') {\n\t\tagent = agent(parsedURL);\n\t}\n\n\tif (!headers.has('Connection') && !agent) {\n\t\theaders.set('Connection', 'close');\n\t}\n\n\t// HTTP-network fetch step 4.2\n\t// chunked encoding is handled by Node.js\n\n\treturn Object.assign({}, parsedURL, {\n\t\tmethod: request.method,\n\t\theaders: exportNodeCompatibleHeaders(headers),\n\t\tagent\n\t});\n}\n\n/**\n * abort-error.js\n *\n * AbortError interface for cancelled requests\n */\n\n/**\n * Create AbortError instance\n *\n * @param   String      message      Error message for human\n * @return  AbortError\n */\nfunction AbortError(message) {\n  Error.call(this, message);\n\n  this.type = 'aborted';\n  this.message = message;\n\n  // hide custom error implementation details from end-users\n  Error.captureStackTrace(this, this.constructor);\n}\n\nAbortError.prototype = Object.create(Error.prototype);\nAbortError.prototype.constructor = AbortError;\nAbortError.prototype.name = 'AbortError';\n\n// fix an issue where \"PassThrough\", \"resolve\" aren't a named export for node <10\nconst PassThrough$1 = stream__WEBPACK_IMPORTED_MODULE_0__.PassThrough;\nconst resolve_url = url__WEBPACK_IMPORTED_MODULE_2__.resolve;\n\n/**\n * Fetch function\n *\n * @param   Mixed    url   Absolute url or Request instance\n * @param   Object   opts  Fetch options\n * @return  Promise\n */\nfunction fetch(url, opts) {\n\n\t// allow custom promise\n\tif (!fetch.Promise) {\n\t\tthrow new Error('native promise missing, set fetch.Promise to your favorite alternative');\n\t}\n\n\tBody.Promise = fetch.Promise;\n\n\t// wrap http.request into fetch\n\treturn new fetch.Promise(function (resolve, reject) {\n\t\t// build request object\n\t\tconst request = new Request(url, opts);\n\t\tconst options = getNodeRequestOptions(request);\n\n\t\tconst send = (options.protocol === 'https:' ? https__WEBPACK_IMPORTED_MODULE_3__ : http__WEBPACK_IMPORTED_MODULE_1__).request;\n\t\tconst signal = request.signal;\n\n\t\tlet response = null;\n\n\t\tconst abort = function abort() {\n\t\t\tlet error = new AbortError('The user aborted a request.');\n\t\t\treject(error);\n\t\t\tif (request.body && request.body instanceof stream__WEBPACK_IMPORTED_MODULE_0__.Readable) {\n\t\t\t\trequest.body.destroy(error);\n\t\t\t}\n\t\t\tif (!response || !response.body) return;\n\t\t\tresponse.body.emit('error', error);\n\t\t};\n\n\t\tif (signal && signal.aborted) {\n\t\t\tabort();\n\t\t\treturn;\n\t\t}\n\n\t\tconst abortAndFinalize = function abortAndFinalize() {\n\t\t\tabort();\n\t\t\tfinalize();\n\t\t};\n\n\t\t// send request\n\t\tconst req = send(options);\n\t\tlet reqTimeout;\n\n\t\tif (signal) {\n\t\t\tsignal.addEventListener('abort', abortAndFinalize);\n\t\t}\n\n\t\tfunction finalize() {\n\t\t\treq.abort();\n\t\t\tif (signal) signal.removeEventListener('abort', abortAndFinalize);\n\t\t\tclearTimeout(reqTimeout);\n\t\t}\n\n\t\tif (request.timeout) {\n\t\t\treq.once('socket', function (socket) {\n\t\t\t\treqTimeout = setTimeout(function () {\n\t\t\t\t\treject(new FetchError(`network timeout at: ${request.url}`, 'request-timeout'));\n\t\t\t\t\tfinalize();\n\t\t\t\t}, request.timeout);\n\t\t\t});\n\t\t}\n\n\t\treq.on('error', function (err) {\n\t\t\treject(new FetchError(`request to ${request.url} failed, reason: ${err.message}`, 'system', err));\n\t\t\tfinalize();\n\t\t});\n\n\t\treq.on('response', function (res) {\n\t\t\tclearTimeout(reqTimeout);\n\n\t\t\tconst headers = createHeadersLenient(res.headers);\n\n\t\t\t// HTTP fetch step 5\n\t\t\tif (fetch.isRedirect(res.statusCode)) {\n\t\t\t\t// HTTP fetch step 5.2\n\t\t\t\tconst location = headers.get('Location');\n\n\t\t\t\t// HTTP fetch step 5.3\n\t\t\t\tconst locationURL = location === null ? null : resolve_url(request.url, location);\n\n\t\t\t\t// HTTP fetch step 5.5\n\t\t\t\tswitch (request.redirect) {\n\t\t\t\t\tcase 'error':\n\t\t\t\t\t\treject(new FetchError(`uri requested responds with a redirect, redirect mode is set to error: ${request.url}`, 'no-redirect'));\n\t\t\t\t\t\tfinalize();\n\t\t\t\t\t\treturn;\n\t\t\t\t\tcase 'manual':\n\t\t\t\t\t\t// node-fetch-specific step: make manual redirect a bit easier to use by setting the Location header value to the resolved URL.\n\t\t\t\t\t\tif (locationURL !== null) {\n\t\t\t\t\t\t\t// handle corrupted header\n\t\t\t\t\t\t\ttry {\n\t\t\t\t\t\t\t\theaders.set('Location', locationURL);\n\t\t\t\t\t\t\t} catch (err) {\n\t\t\t\t\t\t\t\t// istanbul ignore next: nodejs server prevent invalid response headers, we can't test this through normal request\n\t\t\t\t\t\t\t\treject(err);\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t\tbreak;\n\t\t\t\t\tcase 'follow':\n\t\t\t\t\t\t// HTTP-redirect fetch step 2\n\t\t\t\t\t\tif (locationURL === null) {\n\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\t// HTTP-redirect fetch step 5\n\t\t\t\t\t\tif (request.counter >= request.follow) {\n\t\t\t\t\t\t\treject(new FetchError(`maximum redirect reached at: ${request.url}`, 'max-redirect'));\n\t\t\t\t\t\t\tfinalize();\n\t\t\t\t\t\t\treturn;\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\t// HTTP-redirect fetch step 6 (counter increment)\n\t\t\t\t\t\t// Create a new Request object.\n\t\t\t\t\t\tconst requestOpts = {\n\t\t\t\t\t\t\theaders: new Headers(request.headers),\n\t\t\t\t\t\t\tfollow: request.follow,\n\t\t\t\t\t\t\tcounter: request.counter + 1,\n\t\t\t\t\t\t\tagent: request.agent,\n\t\t\t\t\t\t\tcompress: request.compress,\n\t\t\t\t\t\t\tmethod: request.method,\n\t\t\t\t\t\t\tbody: request.body,\n\t\t\t\t\t\t\tsignal: request.signal,\n\t\t\t\t\t\t\ttimeout: request.timeout,\n\t\t\t\t\t\t\tsize: request.size\n\t\t\t\t\t\t};\n\n\t\t\t\t\t\t// HTTP-redirect fetch step 9\n\t\t\t\t\t\tif (res.statusCode !== 303 && request.body && getTotalBytes(request) === null) {\n\t\t\t\t\t\t\treject(new FetchError('Cannot follow redirect with body being a readable stream', 'unsupported-redirect'));\n\t\t\t\t\t\t\tfinalize();\n\t\t\t\t\t\t\treturn;\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\t// HTTP-redirect fetch step 11\n\t\t\t\t\t\tif (res.statusCode === 303 || (res.statusCode === 301 || res.statusCode === 302) && request.method === 'POST') {\n\t\t\t\t\t\t\trequestOpts.method = 'GET';\n\t\t\t\t\t\t\trequestOpts.body = undefined;\n\t\t\t\t\t\t\trequestOpts.headers.delete('content-length');\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\t// HTTP-redirect fetch step 15\n\t\t\t\t\t\tresolve(fetch(new Request(locationURL, requestOpts)));\n\t\t\t\t\t\tfinalize();\n\t\t\t\t\t\treturn;\n\t\t\t\t}\n\t\t\t}\n\n\t\t\t// prepare response\n\t\t\tres.once('end', function () {\n\t\t\t\tif (signal) signal.removeEventListener('abort', abortAndFinalize);\n\t\t\t});\n\t\t\tlet body = res.pipe(new PassThrough$1());\n\n\t\t\tconst response_options = {\n\t\t\t\turl: request.url,\n\t\t\t\tstatus: res.statusCode,\n\t\t\t\tstatusText: res.statusMessage,\n\t\t\t\theaders: headers,\n\t\t\t\tsize: request.size,\n\t\t\t\ttimeout: request.timeout,\n\t\t\t\tcounter: request.counter\n\t\t\t};\n\n\t\t\t// HTTP-network fetch step 12.1.1.3\n\t\t\tconst codings = headers.get('Content-Encoding');\n\n\t\t\t// HTTP-network fetch step 12.1.1.4: handle content codings\n\n\t\t\t// in following scenarios we ignore compression support\n\t\t\t// 1. compression support is disabled\n\t\t\t// 2. HEAD request\n\t\t\t// 3. no Content-Encoding header\n\t\t\t// 4. no content response (204)\n\t\t\t// 5. content not modified response (304)\n\t\t\tif (!request.compress || request.method === 'HEAD' || codings === null || res.statusCode === 204 || res.statusCode === 304) {\n\t\t\t\tresponse = new Response(body, response_options);\n\t\t\t\tresolve(response);\n\t\t\t\treturn;\n\t\t\t}\n\n\t\t\t// For Node v6+\n\t\t\t// Be less strict when decoding compressed responses, since sometimes\n\t\t\t// servers send slightly invalid responses that are still accepted\n\t\t\t// by common browsers.\n\t\t\t// Always using Z_SYNC_FLUSH is what cURL does.\n\t\t\tconst zlibOptions = {\n\t\t\t\tflush: zlib__WEBPACK_IMPORTED_MODULE_4__.Z_SYNC_FLUSH,\n\t\t\t\tfinishFlush: zlib__WEBPACK_IMPORTED_MODULE_4__.Z_SYNC_FLUSH\n\t\t\t};\n\n\t\t\t// for gzip\n\t\t\tif (codings == 'gzip' || codings == 'x-gzip') {\n\t\t\t\tbody = body.pipe(zlib__WEBPACK_IMPORTED_MODULE_4__.createGunzip(zlibOptions));\n\t\t\t\tresponse = new Response(body, response_options);\n\t\t\t\tresolve(response);\n\t\t\t\treturn;\n\t\t\t}\n\n\t\t\t// for deflate\n\t\t\tif (codings == 'deflate' || codings == 'x-deflate') {\n\t\t\t\t// handle the infamous raw deflate response from old servers\n\t\t\t\t// a hack for old IIS and Apache servers\n\t\t\t\tconst raw = res.pipe(new PassThrough$1());\n\t\t\t\traw.once('data', function (chunk) {\n\t\t\t\t\t// see http://stackoverflow.com/questions/37519828\n\t\t\t\t\tif ((chunk[0] & 0x0F) === 0x08) {\n\t\t\t\t\t\tbody = body.pipe(zlib__WEBPACK_IMPORTED_MODULE_4__.createInflate());\n\t\t\t\t\t} else {\n\t\t\t\t\t\tbody = body.pipe(zlib__WEBPACK_IMPORTED_MODULE_4__.createInflateRaw());\n\t\t\t\t\t}\n\t\t\t\t\tresponse = new Response(body, response_options);\n\t\t\t\t\tresolve(response);\n\t\t\t\t});\n\t\t\t\treturn;\n\t\t\t}\n\n\t\t\t// for br\n\t\t\tif (codings == 'br' && typeof zlib__WEBPACK_IMPORTED_MODULE_4__.createBrotliDecompress === 'function') {\n\t\t\t\tbody = body.pipe(zlib__WEBPACK_IMPORTED_MODULE_4__.createBrotliDecompress());\n\t\t\t\tresponse = new Response(body, response_options);\n\t\t\t\tresolve(response);\n\t\t\t\treturn;\n\t\t\t}\n\n\t\t\t// otherwise, use response as-is\n\t\t\tresponse = new Response(body, response_options);\n\t\t\tresolve(response);\n\t\t});\n\n\t\twriteToStream(req, request);\n\t});\n}\n/**\n * Redirect code matching\n *\n * @param   Number   code  Status code\n * @return  Boolean\n */\nfetch.isRedirect = function (code) {\n\treturn code === 301 || code === 302 || code === 303 || code === 307 || code === 308;\n};\n\n// expose Promise\nfetch.Promise = global.Promise;\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (fetch);\n\n\n\n/***/ }),\n\n/***/ \"http\":\n/*!***********************!*\\\n  !*** external \"http\" ***!\n  \\***********************/\n/*! no static exports found */\n/***/ (function(module, exports) {\n\nmodule.exports = require(\"http\");\n\n/***/ }),\n\n/***/ \"https\":\n/*!************************!*\\\n  !*** external \"https\" ***!\n  \\************************/\n/*! no static exports found */\n/***/ (function(module, exports) {\n\nmodule.exports = require(\"https\");\n\n/***/ }),\n\n/***/ \"stream\":\n/*!*************************!*\\\n  !*** external \"stream\" ***!\n  \\*************************/\n/*! no static exports found */\n/***/ (function(module, exports) {\n\nmodule.exports = require(\"stream\");\n\n/***/ }),\n\n/***/ \"url\":\n/*!**********************!*\\\n  !*** external \"url\" ***!\n  \\**********************/\n/*! no static exports found */\n/***/ (function(module, exports) {\n\nmodule.exports = require(\"url\");\n\n/***/ }),\n\n/***/ \"zlib\":\n/*!***********************!*\\\n  !*** external \"zlib\" ***!\n  \\***********************/\n/*! no static exports found */\n/***/ (function(module, exports) {\n\nmodule.exports = require(\"zlib\");\n\n/***/ })\n\n/******/ });\n//# sourceMappingURL=d6e0e9d8aacfc3e11565.worker.js.map", __webpack_require__.p + "d6e0e9d8aacfc3e11565.worker.js");
};

/***/ }),

/***/ "./node_modules/worker-loader/dist/workers/InlineWorker.js":
/*!*****************************************************************!*\
  !*** ./node_modules/worker-loader/dist/workers/InlineWorker.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// http://stackoverflow.com/questions/10343913/how-to-create-a-web-worker-from-a-string

var URL = window.URL || window.webkitURL;

module.exports = function (content, url) {
  try {
    try {
      var blob;

      try {
        // BlobBuilder = Deprecated, but widely implemented
        var BlobBuilder = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder;

        blob = new BlobBuilder();

        blob.append(content);

        blob = blob.getBlob();
      } catch (e) {
        // The proposed API
        blob = new Blob([content]);
      }

      return new Worker(URL.createObjectURL(blob));
    } catch (e) {
      return new Worker('data:application/javascript,' + encodeURIComponent(content));
    }
  } catch (e) {
    if (!url) {
      throw Error('Inline worker is not supported');
    }

    return new Worker(url);
  }
};

/***/ }),

/***/ "./src/Asset.js":
/*!**********************!*\
  !*** ./src/Asset.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// Use JS implemented TextDecoder and TextEncoder if it is not provided by the
// browser.
var _TextDecoder;

var _TextEncoder;

if (typeof TextDecoder === 'undefined' || typeof TextEncoder === 'undefined') {
  // Wait to require the text encoding polyfill until we know it's needed.
  // eslint-disable-next-line global-require
  var encoding = __webpack_require__(/*! fastestsmallesttextencoderdecoder */ "./node_modules/fastestsmallesttextencoderdecoder/NodeJS/EncoderAndDecoderNodeJS.min.mjs");

  _TextDecoder = encoding.TextDecoder;
  _TextEncoder = encoding.TextEncoder;
} else {
  _TextDecoder = TextDecoder;
  _TextEncoder = TextEncoder;
}

var md5 = __webpack_require__(/*! js-md5 */ "js-md5");

var memoizedToString = function () {
  /**
   * The maximum length of a chunk before encoding it into base64.
   *
   * 32766 is a multiple of 3 so btoa does not need to use padding characters
   * except for the final chunk where that is fine. 32766 is also close to
   * 32768 so it is close to a size an memory allocator would prefer.
   * @const {number}
   */
  var BTOA_CHUNK_MAX_LENGTH = 32766;
  /**
   * An array cache of bytes to characters.
   * @const {?Array.<string>}
   */

  var fromCharCode = null;
  var strings = {};
  return function (assetId, data) {
    if (!Object.prototype.hasOwnProperty.call(strings, assetId)) {
      if (typeof btoa === 'undefined') {
        // Use a library that does not need btoa to run.

        /* eslint-disable-next-line global-require */
        var base64js = __webpack_require__(/*! base64-js */ "base64-js");

        strings[assetId] = base64js.fromByteArray(data);
      } else {
        // Native btoa is faster than javascript translation. Use js to
        // create a "binary" string and btoa to encode it.
        if (fromCharCode === null) {
          // Cache the first 256 characters for input byte values.
          fromCharCode = new Array(256);

          for (var i = 0; i < 256; i++) {
            fromCharCode[i] = String.fromCharCode(i);
          }
        }

        var length = data.length;
        var s = ''; // Iterate over chunks of the binary data.

        for (var _i = 0, e = 0; _i < length; _i = e) {
          // Create small chunks to cause more small allocations and
          // less large allocations.
          e = Math.min(e + BTOA_CHUNK_MAX_LENGTH, length);
          var s_ = '';

          for (var j = _i; j < e; j += 1) {
            s_ += fromCharCode[data[j]];
          } // Encode the latest chunk so the we create one big output
          // string instead of creating a big input string and then
          // one big output string.

          /* global btoa */


          s += btoa(s_);
        }

        strings[assetId] = s;
      }
    }

    return strings[assetId];
  };
}();

var Asset = /*#__PURE__*/function () {
  /**
   * Construct an Asset.
   * @param {AssetType} assetType - The type of this asset (sound, image, etc.)
   * @param {string} assetId - The ID of this asset.
   * @param {DataFormat} [dataFormat] - The format of the data (WAV, PNG, etc.); required iff `data` is present.
   * @param {Buffer} [data] - The in-memory data for this asset; optional.
   * @param {bool} [generateId] - Whether to create id from an md5 hash of data
   */
  function Asset(assetType, assetId, dataFormat, data, generateId) {
    _classCallCheck(this, Asset);

    /** @type {AssetType} */
    this.assetType = assetType;
    /** @type {string} */

    this.assetId = assetId;
    this.setData(data, dataFormat || assetType.runtimeFormat, generateId);
    /** @type {Asset[]} */

    this.dependencies = [];
  }

  _createClass(Asset, [{
    key: "setData",
    value: function setData(data, dataFormat, generateId) {
      if (data && !dataFormat) {
        throw new Error('Data provided without specifying its format');
      }
      /** @type {DataFormat} */


      this.dataFormat = dataFormat;
      /** @type {Buffer} */

      this.data = data;
      if (generateId) this.assetId = md5(data); // Mark as clean only if set is being called without generateId
      // If a new id is being generated, mark this asset as not clean

      this.clean = !generateId;
    }
    /**
     * @returns {string} - This asset's data, decoded as text.
     */

  }, {
    key: "decodeText",
    value: function decodeText() {
      var decoder = new _TextDecoder();
      return decoder.decode(this.data);
    }
    /**
     * Same as `setData` but encodes text first.
     * @param {string} data - the text data to encode and store.
     * @param {DataFormat} dataFormat - the format of the data (DataFormat.SVG for example).
     * @param {bool} generateId - after setting data, set the id to an md5 of the data?
     */

  }, {
    key: "encodeTextData",
    value: function encodeTextData(data, dataFormat, generateId) {
      var encoder = new _TextEncoder();
      this.setData(encoder.encode(data), dataFormat, generateId);
    }
    /**
     * @param {string} [contentType] - Optionally override the content type to be included in the data URI.
     * @returns {string} - A data URI representing the asset's data.
     */

  }, {
    key: "encodeDataURI",
    value: function encodeDataURI(contentType) {
      contentType = contentType || this.assetType.contentType;
      return "data:".concat(contentType, ";base64,").concat(memoizedToString(this.assetId, this.data));
    }
  }]);

  return Asset;
}();

module.exports = Asset;

/***/ }),

/***/ "./src/AssetType.js":
/*!**************************!*\
  !*** ./src/AssetType.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DataFormat = __webpack_require__(/*! ./DataFormat */ "./src/DataFormat.js");
/**
 * Enumeration of the supported asset types.
 * @type {Object.<String,AssetType>}
 * @typedef {Object} AssetType - Information about a supported asset type.
 * @property {string} contentType - the MIME type associated with this kind of data. Useful for data URIs, etc.
 * @property {string} name - The human-readable name of this asset type.
 * @property {DataFormat} runtimeFormat - The default format used for runtime, in-memory storage of this asset. For
 *     example, a project stored in SB2 format on disk will be returned as JSON when loaded into memory.
 * @property {boolean} immutable - Indicates if the asset id is determined by the asset content.
 */


var AssetType = {
  ImageBitmap: {
    contentType: 'image/png',
    name: 'ImageBitmap',
    runtimeFormat: DataFormat.PNG,
    immutable: true
  },
  ImageVector: {
    contentType: 'image/svg+xml',
    name: 'ImageVector',
    runtimeFormat: DataFormat.SVG,
    immutable: true
  },
  Project: {
    contentType: 'application/json',
    name: 'Project',
    runtimeFormat: DataFormat.JSON,
    immutable: false
  },
  Sound: {
    contentType: 'audio/x-wav',
    name: 'Sound',
    runtimeFormat: DataFormat.WAV,
    immutable: true
  },
  Sprite: {
    contentType: 'application/json',
    name: 'Sprite',
    runtimeFormat: DataFormat.JSON,
    immutable: true
  }
};
module.exports = AssetType;

/***/ }),

/***/ "./src/BuiltinHelper.js":
/*!******************************!*\
  !*** ./src/BuiltinHelper.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var md5 = __webpack_require__(/*! js-md5 */ "js-md5");

var log = __webpack_require__(/*! ./log */ "./src/log.js");

var Asset = __webpack_require__(/*! ./Asset */ "./src/Asset.js");

var AssetType = __webpack_require__(/*! ./AssetType */ "./src/AssetType.js");

var DataFormat = __webpack_require__(/*! ./DataFormat */ "./src/DataFormat.js");

var Helper = __webpack_require__(/*! ./Helper */ "./src/Helper.js");
/**
 * @typedef {object} BuiltinAssetRecord
 * @property {AssetType} type - The type of the asset.
 * @property {DataFormat} format - The format of the asset's data.
 * @property {?string} id - The asset's unique ID.
 * @property {Buffer} data - The asset's data.
 */

/**
 * @type {BuiltinAssetRecord[]}
 */


var DefaultAssets = [{
  type: AssetType.ImageBitmap,
  format: DataFormat.PNG,
  id: null,
  data: Buffer.from(__webpack_require__(/*! arraybuffer-loader!./builtins/defaultBitmap.png */ "./node_modules/arraybuffer-loader/index.js!./src/builtins/defaultBitmap.png") // eslint-disable-line global-require
  )
}, {
  type: AssetType.Sound,
  format: DataFormat.WAV,
  id: null,
  data: Buffer.from(__webpack_require__(/*! arraybuffer-loader!./builtins/defaultSound.wav */ "./node_modules/arraybuffer-loader/index.js!./src/builtins/defaultSound.wav") // eslint-disable-line global-require
  )
}, {
  type: AssetType.ImageVector,
  format: DataFormat.SVG,
  id: null,
  data: Buffer.from(__webpack_require__(/*! arraybuffer-loader!./builtins/defaultVector.svg */ "./node_modules/arraybuffer-loader/index.js!./src/builtins/defaultVector.svg") // eslint-disable-line global-require
  )
}];
/**
 * @type {BuiltinAssetRecord[]}
 */

var BuiltinAssets = DefaultAssets.concat([]);

var BuiltinHelper = /*#__PURE__*/function (_Helper) {
  _inherits(BuiltinHelper, _Helper);

  var _super = _createSuper(BuiltinHelper);

  function BuiltinHelper(parent) {
    var _this;

    _classCallCheck(this, BuiltinHelper);

    _this = _super.call(this, parent);
    /**
     * In-memory storage for all built-in assets.
     * @type {Object.<AssetType, AssetIdMap>} Maps asset type to a map of asset ID to actual assets.
     * @typedef {Object.<string, BuiltinAssetRecord>} AssetIdMap - Maps asset ID to asset.
     */

    _this.assets = {};
    BuiltinAssets.forEach(function (assetRecord) {
      assetRecord.id = _this._store(assetRecord.type, assetRecord.format, assetRecord.data, assetRecord.id);
    });
    return _this;
  }
  /**
   * Call `setDefaultAssetId` on the parent `ScratchStorage` instance to register all built-in default assets.
   */


  _createClass(BuiltinHelper, [{
    key: "registerDefaultAssets",
    value: function registerDefaultAssets() {
      var numAssets = DefaultAssets.length;

      for (var assetIndex = 0; assetIndex < numAssets; ++assetIndex) {
        var assetRecord = DefaultAssets[assetIndex];
        this.parent.setDefaultAssetId(assetRecord.type, assetRecord.id);
      }
    }
    /**
     * Synchronously fetch a cached asset for a given asset id. Returns null if not found.
     * @param {string} assetId - The id for the asset to fetch.
     * @returns {?Asset} The asset for assetId, if it exists.
     */

  }, {
    key: "get",
    value: function get(assetId) {
      var asset = null;

      if (Object.prototype.hasOwnProperty.call(this.assets, assetId)) {
        /** @type{BuiltinAssetRecord} */
        var assetRecord = this.assets[assetId];
        asset = new Asset(assetRecord.type, assetRecord.id, assetRecord.format, assetRecord.data);
      }

      return asset;
    }
    /**
     * Alias for store (old name of store)
     * @deprecated Use BuiltinHelper.store
     * @param {AssetType} assetType - The type of the asset to cache.
     * @param {DataFormat} dataFormat - The dataFormat of the data for the cached asset.
     * @param {Buffer} data - The data for the cached asset.
     * @param {string} id - The id for the cached asset.
     * @returns {string} The calculated id of the cached asset, or the supplied id if the asset is mutable.
     */

  }, {
    key: "cache",
    value: function cache(assetType, dataFormat, data, id) {
      log.warn('Deprecation: BuiltinHelper.cache has been replaced with BuiltinHelper.store.');
      return this.store(assetType, dataFormat, data, id);
    }
    /**
     * Deprecated external API for _store
     * @deprecated Not for external use. Create assets and keep track of them outside of the storage instance.
     * @param {AssetType} assetType - The type of the asset to cache.
     * @param {DataFormat} dataFormat - The dataFormat of the data for the cached asset.
     * @param {Buffer} data - The data for the cached asset.
     * @param {(string|number)} id - The id for the cached asset.
     * @returns {string} The calculated id of the cached asset, or the supplied id if the asset is mutable.
     */

  }, {
    key: "store",
    value: function store(assetType, dataFormat, data, id) {
      log.warn('Deprecation: use Storage.createAsset. BuiltinHelper is for internal use only.');
      return this._store(assetType, dataFormat, data, id);
    }
    /**
     * Cache an asset for future lookups by ID.
     * @param {AssetType} assetType - The type of the asset to cache.
     * @param {DataFormat} dataFormat - The dataFormat of the data for the cached asset.
     * @param {Buffer} data - The data for the cached asset.
     * @param {(string|number)} id - The id for the cached asset.
     * @returns {string} The calculated id of the cached asset, or the supplied id if the asset is mutable.
     */

  }, {
    key: "_store",
    value: function _store(assetType, dataFormat, data, id) {
      if (!dataFormat) throw new Error('Data cached without specifying its format');

      if (id !== '' && id !== null && typeof id !== 'undefined') {
        if (Object.prototype.hasOwnProperty.call(this.assets, id) && assetType.immutable) return id;
      } else if (assetType.immutable) {
        id = md5(data);
      } else {
        throw new Error('Tried to cache data without an id');
      }

      this.assets[id] = {
        type: assetType,
        format: dataFormat,
        id: id,
        data: data
      };
      return id;
    }
    /**
     * Fetch an asset but don't process dependencies.
     * @param {AssetType} assetType - The type of asset to fetch.
     * @param {string} assetId - The ID of the asset to fetch: a project ID, MD5, etc.
     * @return {?Promise.<Asset>} A promise for the contents of the asset.
     */

  }, {
    key: "load",
    value: function load(assetType, assetId) {
      if (!this.get(assetId)) {
        // Return null immediately so Storage can quickly move to trying the
        // next helper.
        return null;
      }

      return Promise.resolve(this.get(assetId));
    }
  }]);

  return BuiltinHelper;
}(Helper);

module.exports = BuiltinHelper;

/***/ }),

/***/ "./src/DataFormat.js":
/*!***************************!*\
  !*** ./src/DataFormat.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Enumeration of the supported data formats.
 * @enum {string}
 */
var DataFormat = {
  JPG: 'jpg',
  JSON: 'json',
  MP3: 'mp3',
  PNG: 'png',
  SB2: 'sb2',
  SB3: 'sb3',
  SVG: 'svg',
  WAV: 'wav'
};
module.exports = DataFormat;

/***/ }),

/***/ "./src/FetchTool.js":
/*!**************************!*\
  !*** ./src/FetchTool.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(fetch) {var _excluded = ["url"],
    _excluded2 = ["url", "withCredentials"];

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/* eslint-env browser */

/**
 * Get and send assets with the fetch standard web api.
 */
var FetchTool = /*#__PURE__*/function () {
  function FetchTool() {
    _classCallCheck(this, FetchTool);
  }

  _createClass(FetchTool, [{
    key: "isGetSupported",
    get:
    /**
     * Is get supported? false if the environment does not support fetch.
     * @returns {boolean} Is get supported?
     */
    function get() {
      return typeof fetch !== 'undefined';
    }
    /**
     * Request data from a server with fetch.
     * @param {{url:string}} reqConfig - Request configuration for data to get.
     * @param {{method:string}} options - Additional options to configure fetch.
     * @returns {Promise.<Uint8Array>} Resolve to Buffer of data from server.
     */

  }, {
    key: "get",
    value: function get(_ref) {
      var url = _ref.url,
          options = _objectWithoutProperties(_ref, _excluded);

      return fetch(url, Object.assign({
        method: 'GET'
      }, options)).then(function (result) {
        return result.arrayBuffer();
      }).then(function (body) {
        return new Uint8Array(body);
      });
    }
    /**
     * Is sending supported? false if the environment does not support sending
     * with fetch.
     * @returns {boolean} Is sending supported?
     */

  }, {
    key: "isSendSupported",
    get: function get() {
      return typeof fetch !== 'undefined';
    }
    /**
     * Send data to a server with fetch.
     * @param {Request} reqConfig - Request configuration for data to send.
     * @returns {Promise.<string>} Server returned metadata.
     */

  }, {
    key: "send",
    value: function send(_ref2) {
      var url = _ref2.url,
          _ref2$withCredentials = _ref2.withCredentials,
          withCredentials = _ref2$withCredentials === void 0 ? false : _ref2$withCredentials,
          options = _objectWithoutProperties(_ref2, _excluded2);

      return fetch(url, Object.assign({
        credentials: withCredentials ? 'include' : 'omit'
      }, options)).then(function (response) {
        if (response.ok) return response.text();
        return Promise.reject(response.status);
      });
    }
  }]);

  return FetchTool;
}();

module.exports = FetchTool;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! node-fetch */ "./node_modules/node-fetch/lib/index.mjs")["default"]))

/***/ }),

/***/ "./src/FetchWorkerTool.js":
/*!********************************!*\
  !*** ./src/FetchWorkerTool.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(fetch) {var _excluded = ["url"];

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Get and send assets with a worker that uses fetch.
 */
var PrivateFetchWorkerTool = /*#__PURE__*/function () {
  function PrivateFetchWorkerTool() {
    var _this = this;

    _classCallCheck(this, PrivateFetchWorkerTool);

    /**
     * What does the worker support of the APIs we need?
     * @type {{fetch:boolean}}
     */
    this._workerSupport = {
      fetch: typeof fetch !== 'undefined'
    };
    /**
     * A possible error occurred standing up the worker.
     * @type {!Error}
     */

    this._supportError = null;
    /**
     * The worker that runs fetch and returns data for us.
     * @type {!Worker}
     */

    this.worker = null;
    /**
     * A map of ids to fetch job objects.
     * @type {object}
     */

    this.jobs = {};

    try {
      if (this.isGetSupported) {
        // eslint-disable-next-line global-require
        var FetchWorker = __webpack_require__(/*! worker-loader?{"inline":true,"fallback":true}!./FetchWorkerTool.worker */ "./node_modules/worker-loader/dist/cjs.js?{\"inline\":true,\"fallback\":true}!./src/FetchWorkerTool.worker.js");

        this.worker = new FetchWorker();
        this.worker.addEventListener('message', function (_ref) {
          var data = _ref.data;

          if (data.support) {
            _this._workerSupport = data.support;
            return;
          }

          var _iterator = _createForOfIteratorHelper(data),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var message = _step.value;

              if (_this.jobs[message.id]) {
                if (message.error) {
                  _this.jobs[message.id].reject(message.error);
                } else {
                  _this.jobs[message.id].resolve(message.buffer);
                }

                delete _this.jobs[message.id];
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        });
      }
    } catch (error) {
      this._supportError = error;
    }
  }
  /**
   * Is get supported?
   *
   * false if the environment does not workers, fetch, or fetch from inside a
   * worker. Finding out the worker supports fetch is asynchronous and will
   * guess that it does if the window does until the worker can inform us.
   * @returns {boolean} Is get supported?
   */


  _createClass(PrivateFetchWorkerTool, [{
    key: "isGetSupported",
    get: function get() {
      return typeof Worker !== 'undefined' && this._workerSupport.fetch && !this._supportError;
    }
    /**
     * Request data from a server with a worker using fetch.
     * @param {{url:string}} reqConfig - Request configuration for data to get.
     * @param {{method:string}} options - Additional options to configure fetch.
     * @returns {Promise.<Buffer>} Resolve to Buffer of data from server.
     */

  }, {
    key: "get",
    value: function get(_ref2) {
      var _this2 = this;

      var url = _ref2.url,
          options = _objectWithoutProperties(_ref2, _excluded);

      return new Promise(function (resolve, reject) {
        // TODO: Use a Scratch standard ID generator ...
        var id = Math.random().toString(16).substring(2);

        _this2.worker.postMessage({
          id: id,
          url: url,
          options: Object.assign({
            method: 'GET'
          }, options)
        });

        _this2.jobs[id] = {
          id: id,
          resolve: resolve,
          reject: reject
        };
      }).then(function (body) {
        return new Uint8Array(body);
      });
    }
    /**
     * Is sending supported? always false for FetchWorkerTool.
     * @returns {boolean} Is sending supported?
     */

  }, {
    key: "isSendSupported",
    get: function get() {
      return false;
    }
    /**
     * Send data to a server.
     * @throws {Error} A not implemented error.
     */

  }, {
    key: "send",
    value: function send() {
      throw new Error('Not implemented.');
    }
    /**
     * Return a static PrivateFetchWorkerTool instance on demand.
     * @returns {PrivateFetchWorkerTool} A static PrivateFetchWorkerTool
     *   instance
     */

  }], [{
    key: "instance",
    get: function get() {
      if (!this._instance) {
        this._instance = new PrivateFetchWorkerTool();
      }

      return this._instance;
    }
  }]);

  return PrivateFetchWorkerTool;
}();
/**
 * Get and send assets with a worker that uses fetch.
 */


var PublicFetchWorkerTool = /*#__PURE__*/function () {
  function PublicFetchWorkerTool() {
    _classCallCheck(this, PublicFetchWorkerTool);

    /**
     * Shared instance of an internal worker. PublicFetchWorkerTool proxies
     * it.
     * @type {PrivateFetchWorkerTool}
     */
    this.inner = PrivateFetchWorkerTool.instance;
  }
  /**
   * Is get supported?
   * @returns {boolean} Is get supported?
   */


  _createClass(PublicFetchWorkerTool, [{
    key: "isGetSupported",
    get: function get() {
      return this.inner.isGetSupported;
    }
    /**
     * Request data from a server with a worker that uses fetch.
     * @param {{url:string}} reqConfig - Request configuration for data to get.
     * @returns {Promise.<Buffer>} Resolve to Buffer of data from server.
     */

  }, {
    key: "get",
    value: function get(reqConfig) {
      return this.inner.get(reqConfig);
    }
    /**
     * Is sending supported?
     * @returns {boolean} Is sending supported?
     */

  }, {
    key: "isSendSupported",
    get: function get() {
      return false;
    }
    /**
     * Send data to a server with a worker that uses fetch.
     * @throws {Error} A not implemented error.
     */

  }, {
    key: "send",
    value: function send() {
      throw new Error('Not implemented.');
    }
  }]);

  return PublicFetchWorkerTool;
}();

module.exports = PublicFetchWorkerTool;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! node-fetch */ "./node_modules/node-fetch/lib/index.mjs")["default"]))

/***/ }),

/***/ "./src/Helper.js":
/*!***********************!*\
  !*** ./src/Helper.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Base class for asset load/save helpers.
 * @abstract
 */
var Helper = /*#__PURE__*/function () {
  function Helper(parent) {
    _classCallCheck(this, Helper);

    this.parent = parent;
  }
  /**
   * Fetch an asset but don't process dependencies.
   * @param {AssetType} assetType - The type of asset to fetch.
   * @param {string} assetId - The ID of the asset to fetch: a project ID, MD5, etc.
   * @param {DataFormat} dataFormat - The file format / file extension of the asset to fetch: PNG, JPG, etc.
   * @return {Promise.<Asset>} A promise for the contents of the asset.
   */


  _createClass(Helper, [{
    key: "load",
    value: function load(assetType, assetId, dataFormat) {
      return Promise.reject(new Error("No asset of type ".concat(assetType, " for ID ").concat(assetId, " with format ").concat(dataFormat)));
    }
  }]);

  return Helper;
}();

module.exports = Helper;

/***/ }),

/***/ "./src/ProxyTool.js":
/*!**************************!*\
  !*** ./src/ProxyTool.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var FetchWorkerTool = __webpack_require__(/*! ./FetchWorkerTool */ "./src/FetchWorkerTool.js");

var FetchTool = __webpack_require__(/*! ./FetchTool */ "./src/FetchTool.js");
/**
 * @typedef {object} Request
 * @property {string} url
 * @property {*} body
 * @property {string} method
 * @property {boolean} withCredentials
 */

/**
 * Get and send assets with other tools in sequence.
 */


var ProxyTool = /*#__PURE__*/function () {
  function ProxyTool() {
    var filter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ProxyTool.TOOL_FILTER.ALL;

    _classCallCheck(this, ProxyTool);

    var tools;

    if (filter === ProxyTool.TOOL_FILTER.READY) {
      tools = [new FetchTool()];
    } else {
      tools = [new FetchWorkerTool(), new FetchTool()];
    }
    /**
     * Sequence of tools to proxy.
     * @type {Array.<Tool>}
     */


    this.tools = tools;
  }
  /**
   * Is get supported? false if all proxied tool return false.
   * @returns {boolean} Is get supported?
   */


  _createClass(ProxyTool, [{
    key: "isGetSupported",
    get: function get() {
      return this.tools.some(function (tool) {
        return tool.isGetSupported;
      });
    }
    /**
     * Request data from with one of the proxied tools.
     * @param {Request} reqConfig - Request configuration for data to get.
     * @returns {Promise.<Buffer>} Resolve to Buffer of data from server.
     */

  }, {
    key: "get",
    value: function get(reqConfig) {
      var _this = this;

      var toolIndex = 0;

      var nextTool = function nextTool(err) {
        var tool = _this.tools[toolIndex++];

        if (!tool) {
          throw err;
        }

        if (!tool.isGetSupported) {
          return nextTool(err);
        }

        return tool.get(reqConfig).catch(nextTool);
      };

      return nextTool();
    }
    /**
     * Is sending supported? false if all proxied tool return false.
     * @returns {boolean} Is sending supported?
     */

  }, {
    key: "isSendSupported",
    get: function get() {
      return this.tools.some(function (tool) {
        return tool.isSendSupported;
      });
    }
    /**
     * Send data to a server with one of the proxied tools.
     * @param {Request} reqConfig - Request configuration for data to send.
     * @returns {Promise.<Buffer|string|object>} Server returned metadata.
     */

  }, {
    key: "send",
    value: function send(reqConfig) {
      var _this2 = this;

      var toolIndex = 0;

      var nextTool = function nextTool(err) {
        var tool = _this2.tools[toolIndex++];

        if (!tool) {
          throw err;
        }

        if (!tool.isSendSupported) {
          return nextTool(err);
        }

        return tool.send(reqConfig).catch(nextTool);
      };

      return nextTool();
    }
  }]);

  return ProxyTool;
}();
/**
 * Constant values that filter the set of tools in a ProxyTool instance.
 * @enum {string}
 */


ProxyTool.TOOL_FILTER = {
  /**
   * Use all tools.
   */
  ALL: 'all',

  /**
   * Use tools that are ready right now.
   */
  READY: 'ready'
};
module.exports = ProxyTool;

/***/ }),

/***/ "./src/ScratchStorage.js":
/*!*******************************!*\
  !*** ./src/ScratchStorage.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var log = __webpack_require__(/*! ./log */ "./src/log.js");

var BuiltinHelper = __webpack_require__(/*! ./BuiltinHelper */ "./src/BuiltinHelper.js");

var WebHelper = __webpack_require__(/*! ./WebHelper */ "./src/WebHelper.js");

var _Asset = __webpack_require__(/*! ./Asset */ "./src/Asset.js");

var _AssetType = __webpack_require__(/*! ./AssetType */ "./src/AssetType.js");

var _DataFormat = __webpack_require__(/*! ./DataFormat */ "./src/DataFormat.js");

var ScratchStorage = /*#__PURE__*/function () {
  function ScratchStorage() {
    _classCallCheck(this, ScratchStorage);

    this.defaultAssetId = {};
    this.builtinHelper = new BuiltinHelper(this);
    this.webHelper = new WebHelper(this);
    this.builtinHelper.registerDefaultAssets(this);
    this._helpers = [{
      helper: this.builtinHelper,
      priority: 100
    }, {
      helper: this.webHelper,
      priority: -100
    }];
  }
  /**
   * @return {Asset} - the `Asset` class constructor.
   * @constructor
   */


  _createClass(ScratchStorage, [{
    key: "Asset",
    get: function get() {
      return _Asset;
    }
    /**
     * @return {AssetType} - the list of supported asset types.
     * @constructor
     */

  }, {
    key: "AssetType",
    get: function get() {
      return _AssetType;
    }
    /**
     * @return {DataFormat} - the list of supported data formats.
     * @constructor
     */

  }, {
    key: "DataFormat",
    get: function get() {
      return _DataFormat;
    }
    /**
     * @deprecated Please use the `Asset` member of a storage instance instead.
     * @return {Asset} - the `Asset` class constructor.
     * @constructor
     */

  }, {
    key: "addHelper",
    value:
    /**
     * Add a storage helper to this manager. Helpers with a higher priority number will be checked first when loading
     * or storing assets. For comparison, the helper for built-in assets has `priority=100` and the default web helper
     * has `priority=-100`. The relative order of helpers with equal priorities is undefined.
     * @param {Helper} helper - the helper to be added.
     * @param {number} [priority] - the priority for this new helper (default: 0).
     */
    function addHelper(helper) {
      var priority = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      this._helpers.push({
        helper: helper,
        priority: priority
      });

      this._helpers.sort(function (a, b) {
        return b.priority - a.priority;
      });
    }
    /**
     * Synchronously fetch a cached asset from built-in storage. Assets are cached when they are loaded.
     * @param {string} assetId - The id of the asset to fetch.
     * @returns {?Asset} The asset, if it exists.
     */

  }, {
    key: "get",
    value: function get(assetId) {
      return this.builtinHelper.get(assetId);
    }
    /**
     * Deprecated API for caching built-in assets. Use createAsset.
     * @param {AssetType} assetType - The type of the asset to cache.
     * @param {DataFormat} dataFormat - The dataFormat of the data for the cached asset.
     * @param {Buffer} data - The data for the cached asset.
     * @param {string} id - The id for the cached asset.
     * @returns {string} The calculated id of the cached asset, or the supplied id if the asset is mutable.
     */

  }, {
    key: "cache",
    value: function cache(assetType, dataFormat, data, id) {
      log.warn('Deprecation: Storage.cache is deprecated. Use Storage.createAsset, and store assets externally.');
      return this.builtinHelper._store(assetType, dataFormat, data, id);
    }
    /**
     * Construct an Asset, and optionally generate an md5 hash of its data to create an id
     * @param {AssetType} assetType - The type of the asset to cache.
     * @param {DataFormat} dataFormat - The dataFormat of the data for the cached asset.
     * @param {Buffer} data - The data for the cached asset.
     * @param {string} [id] - The id for the cached asset.
     * @param {bool} [generateId] - flag to set id to an md5 hash of data if `id` isn't supplied
     * @returns {Asset} generated Asset with `id` attribute set if not supplied
     */

  }, {
    key: "createAsset",
    value: function createAsset(assetType, dataFormat, data, id, generateId) {
      if (!dataFormat) throw new Error('Tried to create asset without a dataFormat');
      return new _Asset(assetType, id, dataFormat, data, generateId);
    }
    /**
     * Register a web-based source for assets. Sources will be checked in order of registration.
     * @param {Array.<AssetType>} types - The types of asset provided by this source.
     * @param {UrlFunction} getFunction - A function which computes a GET URL from an Asset.
     * @param {UrlFunction} createFunction - A function which computes a POST URL for asset data.
     * @param {UrlFunction} updateFunction - A function which computes a PUT URL for asset data.
     */

  }, {
    key: "addWebStore",
    value: function addWebStore(types, getFunction, createFunction, updateFunction) {
      this.webHelper.addStore(types, getFunction, createFunction, updateFunction);
    }
    /**
     * Register a web-based source for assets. Sources will be checked in order of registration.
     * @deprecated Please use addWebStore
     * @param {Array.<AssetType>} types - The types of asset provided by this source.
     * @param {UrlFunction} urlFunction - A function which computes a GET URL from an Asset.
     */

  }, {
    key: "addWebSource",
    value: function addWebSource(types, urlFunction) {
      log.warn('Deprecation: Storage.addWebSource has been replaced by addWebStore.');
      this.addWebStore(types, urlFunction);
    }
    /**
     * TODO: Should this be removed in favor of requesting an asset with `null` as the ID?
     * @param {AssetType} type - Get the default ID for assets of this type.
     * @return {?string} The ID of the default asset of the given type, if any.
     */

  }, {
    key: "getDefaultAssetId",
    value: function getDefaultAssetId(type) {
      if (Object.prototype.hasOwnProperty.call(this.defaultAssetId, type.name)) {
        return this.defaultAssetId[type.name];
      }
    }
    /**
     * Set the default ID for a particular type of asset. This default asset will be used if a requested asset cannot
     * be found and automatic fallback is enabled. Ideally this should be an asset that is available locally or even
     * one built into this module.
     * TODO: Should this be removed in favor of requesting an asset with `null` as the ID?
     * @param {AssetType} type - The type of asset for which the default will be set.
     * @param {string} id - The default ID to use for this type of asset.
     */

  }, {
    key: "setDefaultAssetId",
    value: function setDefaultAssetId(type, id) {
      this.defaultAssetId[type.name] = id;
    }
    /**
     * Fetch an asset by type & ID.
     * @param {AssetType} assetType - The type of asset to fetch. This also determines which asset store to use.
     * @param {string} assetId - The ID of the asset to fetch: a project ID, MD5, etc.
     * @param {DataFormat} [dataFormat] - Optional: load this format instead of the AssetType's default.
     * @return {Promise.<Asset>} A promise for the requested Asset.
     *   If the promise is resolved with non-null, the value is the requested asset or a fallback.
     *   If the promise is resolved with null, the desired asset could not be found with the current asset sources.
     *   If the promise is rejected, there was an error on at least one asset source. HTTP 404 does not count as an
     *   error here, but (for example) HTTP 403 does.
     */

  }, {
    key: "load",
    value: function load(assetType, assetId, dataFormat) {
      /** @type {Helper[]} */
      var helpers = this._helpers.map(function (x) {
        return x.helper;
      });

      var errors = [];
      dataFormat = dataFormat || assetType.runtimeFormat;
      var helperIndex = 0;
      var helper;

      var tryNextHelper = function tryNextHelper(err) {
        if (err) {
          errors.push(err);
        }

        helper = helpers[helperIndex++];

        if (helper) {
          var loading = helper.load(assetType, assetId, dataFormat);

          if (loading === null) {
            return tryNextHelper();
          } // Note that other attempts may have logged errors; if this succeeds they will be suppressed.


          return loading // TODO: maybe some types of error should prevent trying the next helper?
          .catch(tryNextHelper);
        } else if (errors.length > 0) {
          // At least one thing went wrong and also we couldn't find the
          // asset.
          return Promise.reject(errors);
        } // Nothing went wrong but we couldn't find the asset.


        return Promise.resolve(null);
      };

      return tryNextHelper();
    }
    /**
     * Store an asset by type & ID.
     * @param {AssetType} assetType - The type of asset to fetch. This also determines which asset store to use.
     * @param {?DataFormat} [dataFormat] - Optional: load this format instead of the AssetType's default.
     * @param {Buffer} data - Data to store for the asset
     * @param {?string} [assetId] - The ID of the asset to fetch: a project ID, MD5, etc.
     * @return {Promise.<object>} A promise for asset metadata
     */

  }, {
    key: "store",
    value: function store(assetType, dataFormat, data, assetId) {
      var _this = this;

      dataFormat = dataFormat || assetType.runtimeFormat;
      return new Promise(function (resolve, reject) {
        return _this.webHelper.store(assetType, dataFormat, data, assetId).then(function (body) {
          _this.builtinHelper._store(assetType, dataFormat, data, body.id);

          return resolve(body);
        }).catch(function (error) {
          return reject(error);
        });
      });
    }
  }], [{
    key: "Asset",
    get: function get() {
      return _Asset;
    }
    /**
     * @deprecated Please use the `AssetType` member of a storage instance instead.
     * @return {AssetType} - the list of supported asset types.
     * @constructor
     */

  }, {
    key: "AssetType",
    get: function get() {
      return _AssetType;
    }
  }]);

  return ScratchStorage;
}();

module.exports = ScratchStorage;

/***/ }),

/***/ "./src/WebHelper.js":
/*!**************************!*\
  !*** ./src/WebHelper.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var log = __webpack_require__(/*! ./log */ "./src/log.js");

var Asset = __webpack_require__(/*! ./Asset */ "./src/Asset.js");

var Helper = __webpack_require__(/*! ./Helper */ "./src/Helper.js");

var ProxyTool = __webpack_require__(/*! ./ProxyTool */ "./src/ProxyTool.js");

var ensureRequestConfig = function ensureRequestConfig(reqConfig) {
  if (typeof reqConfig === 'string') {
    return {
      url: reqConfig
    };
  }

  return reqConfig;
};
/**
 * @typedef {function} UrlFunction - A function which computes a URL from asset information.
 * @param {Asset} - The asset for which the URL should be computed.
 * @returns {(string|object)} - A string representing the URL for the asset request OR an object with configuration for
 *                              the underlying fetch call (necessary for configuring e.g. authentication)
 */


var WebHelper = /*#__PURE__*/function (_Helper) {
  _inherits(WebHelper, _Helper);

  var _super = _createSuper(WebHelper);

  function WebHelper(parent) {
    var _this;

    _classCallCheck(this, WebHelper);

    _this = _super.call(this, parent);
    /**
     * @type {Array.<StoreRecord>}
     * @typedef {object} StoreRecord
     * @property {Array.<string>} types - The types of asset provided by this store, from AssetType's name field.
     * @property {UrlFunction} getFunction - A function which computes a URL from an Asset.
     * @property {UrlFunction} createFunction - A function which computes a URL from an Asset.
     * @property {UrlFunction} updateFunction - A function which computes a URL from an Asset.
     */

    _this.stores = [];
    /**
     * Set of tools to best load many assets in parallel. If one tool
     * cannot be used, it will use the next.
     * @type {ProxyTool}
     */

    _this.assetTool = new ProxyTool();
    /**
     * Set of tools to best load project data in parallel with assets. This
     * tool set prefers tools that are immediately ready. Some tools have
     * to initialize before they can load files.
     * @type {ProxyTool}
     */

    _this.projectTool = new ProxyTool(ProxyTool.TOOL_FILTER.READY);
    return _this;
  }
  /**
   * Register a web-based source for assets. Sources will be checked in order of registration.
   * @deprecated Please use addStore
   * @param {Array.<AssetType>} types - The types of asset provided by this source.
   * @param {UrlFunction} urlFunction - A function which computes a URL from an Asset.
   */


  _createClass(WebHelper, [{
    key: "addSource",
    value: function addSource(types, urlFunction) {
      log.warn('Deprecation: WebHelper.addSource has been replaced with WebHelper.addStore.');
      this.addStore(types, urlFunction);
    }
    /**
     * Register a web-based store for assets. Sources will be checked in order of registration.
     * @param {Array.<AssetType>} types - The types of asset provided by this store.
     * @param {UrlFunction} getFunction - A function which computes a GET URL for an Asset
     * @param {UrlFunction} createFunction - A function which computes a POST URL for an Asset
     * @param {UrlFunction} updateFunction - A function which computes a PUT URL for an Asset
     */

  }, {
    key: "addStore",
    value: function addStore(types, getFunction, createFunction, updateFunction) {
      this.stores.push({
        types: types.map(function (assetType) {
          return assetType.name;
        }),
        get: getFunction,
        create: createFunction,
        update: updateFunction
      });
    }
    /**
     * Fetch an asset but don't process dependencies.
     * @param {AssetType} assetType - The type of asset to fetch.
     * @param {string} assetId - The ID of the asset to fetch: a project ID, MD5, etc.
     * @param {DataFormat} dataFormat - The file format / file extension of the asset to fetch: PNG, JPG, etc.
     * @return {Promise.<Asset>} A promise for the contents of the asset.
     */

  }, {
    key: "load",
    value: function load(assetType, assetId, dataFormat) {
      /** @type {Array.<{url:string, result:*}>} List of URLs attempted & errors encountered. */
      var errors = [];
      var stores = this.stores.slice().filter(function (store) {
        return store.types.indexOf(assetType.name) >= 0;
      });
      var asset = new Asset(assetType, assetId, dataFormat);
      var tool = this.assetTool;

      if (assetType.name === 'Project') {
        tool = this.projectTool;
      }

      var storeIndex = 0;

      var tryNextSource = function tryNextSource() {
        var store = stores[storeIndex++];
        /** @type {UrlFunction} */

        var reqConfigFunction = store.get;

        if (reqConfigFunction) {
          var reqConfig = ensureRequestConfig(reqConfigFunction(asset));

          if (reqConfig === false) {
            return tryNextSource();
          }

          return tool.get(reqConfig).then(function (body) {
            return asset.setData(body, dataFormat);
          }).catch(tryNextSource);
        } else if (errors.length > 0) {
          return Promise.reject(errors);
        } // no stores matching asset


        return Promise.resolve(null);
      };

      return tryNextSource().then(function () {
        return asset;
      });
    }
    /**
     * Create or update an asset with provided data. The create function is called if no asset id is provided
     * @param {AssetType} assetType - The type of asset to create or update.
     * @param {?DataFormat} dataFormat - DataFormat of the data for the stored asset.
     * @param {Buffer} data - The data for the cached asset.
     * @param {?string} assetId - The ID of the asset to fetch: a project ID, MD5, etc.
     * @return {Promise.<object>} A promise for the response from the create or update request
     */

  }, {
    key: "store",
    value: function store(assetType, dataFormat, data, assetId) {
      var asset = new Asset(assetType, assetId, dataFormat); // If we have an asset id, we should update, otherwise create to get an id

      var create = assetId === '' || assetId === null || typeof assetId === 'undefined'; // Use the first store with the appropriate asset type and url function

      var store = this.stores.filter(function (s) {
        return (// Only use stores for the incoming asset type
          s.types.indexOf(assetType.name) !== -1 && ( // Only use stores that have a create function if this is a create request
          // or an update function if this is an update request
          create && s.create || s.update)
        );
      })[0];
      var method = create ? 'post' : 'put';
      if (!store) return Promise.reject(new Error('No appropriate stores'));
      var tool = this.assetTool;

      if (assetType.name === 'Project') {
        tool = this.projectTool;
      }

      var reqConfig = ensureRequestConfig(create ? store.create(asset) : store.update(asset));
      var reqBodyConfig = Object.assign({
        body: data,
        method: method
      }, reqConfig);
      return tool.send(reqBodyConfig).then(function (body) {
        // xhr makes it difficult to both send FormData and
        // automatically parse a JSON response. So try to parse
        // everything as JSON.
        if (typeof body === 'string') {
          try {
            body = JSON.parse(body);
          } catch (parseError) {
            // If it's not parseable, then we can't add the id even
            // if we want to, so stop here
            return body;
          }
        }

        return Object.assign({
          id: body['content-name'] || assetId
        }, body);
      });
    }
  }]);

  return WebHelper;
}(Helper);

module.exports = WebHelper;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ScratchStorage = __webpack_require__(/*! ./ScratchStorage */ "./src/ScratchStorage.js");
/**
 * Export for use with NPM & Node.js.
 * @type {ScratchStorage}
 */


module.exports = ScratchStorage;

/***/ }),

/***/ "./src/log.js":
/*!********************!*\
  !*** ./src/log.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var minilog = __webpack_require__(/*! minilog */ "./node_modules/minilog/lib/index.js");

minilog.enable();
module.exports = minilog('storage');

/***/ }),

/***/ "base64-js":
/*!****************************!*\
  !*** external "base64-js" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("base64-js");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("https");

/***/ }),

/***/ "js-md5":
/*!*************************!*\
  !*** external "js-md5" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("js-md5");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("stream");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("zlib");

/***/ })

/******/ });
//# sourceMappingURL=scratch-storage.js.map