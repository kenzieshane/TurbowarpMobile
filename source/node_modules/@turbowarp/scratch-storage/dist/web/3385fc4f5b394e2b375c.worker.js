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
/******/ 	return __webpack_require__(__webpack_require__.s = "./node_modules/babel-loader/lib/index.js?!./src/FetchWorkerTool.worker.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/babel-loader/lib/index.js?!./src/FetchWorkerTool.worker.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4!./src/FetchWorkerTool.worker.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-env worker */

const isNullResponse = __webpack_require__(/*! ./isNullResponse */ "./src/isNullResponse.js");
const saferFetch = __webpack_require__(/*! ./safer-fetch */ "./src/safer-fetch.js");
const complete = [];
let timeoutId = null;
const checkCompleted = () => {
  if (timeoutId) return;
  timeoutId = setTimeout(() => {
    timeoutId = null;
    if (complete.length) {
      // Send our chunk of completed requests and instruct postMessage to
      // transfer the buffers instead of copying them.
      postMessage(complete.slice(),
      // Instruct postMessage that these buffers in the sent message
      // should use their Transferable trait. After the postMessage
      // call the "buffers" will still be in complete if you looked,
      // but they will all be length 0 as the data they reference has
      // been sent to the window. This lets us send a lot of data
      // without the normal postMessage behaviour of making a copy of
      // all of the data for the window.
      complete.map(response => response.buffer).filter(Boolean));
      complete.length = 0;
    }
  });
};

/**
 * Receive a job from the parent and fetch the requested data.
 * @param {object} options.job A job id, url, and options descriptor to perform.
 */
const onMessage = _ref => {
  let {
    data: job
  } = _ref;
  saferFetch(job.url, job.options).then(result => {
    if (result.ok) return result.arrayBuffer();
    if (isNullResponse(result)) return null;
    return Promise.reject(result.status);
  }).then(buffer => complete.push({
    id: job.id,
    buffer
  })).catch(error => complete.push({
    id: job.id,
    error: error && error.message || "Failed request: ".concat(job.url)
  })).then(checkCompleted);
};

// crossFetch means "fetch" is now always supported
postMessage({
  support: {
    fetch: true
  }
});
self.addEventListener('message', onMessage);

/***/ }),

/***/ "./node_modules/cross-fetch/dist/browser-ponyfill.js":
/*!***********************************************************!*\
  !*** ./node_modules/cross-fetch/dist/browser-ponyfill.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var global = typeof self !== 'undefined' ? self : this;
var __self__ = (function () {
function F() {
this.fetch = false;
this.DOMException = global.DOMException
}
F.prototype = global;
return new F();
})();
(function(self) {

var irrelevant = (function (exports) {

  var support = {
    searchParams: 'URLSearchParams' in self,
    iterable: 'Symbol' in self && 'iterator' in Symbol,
    blob:
      'FileReader' in self &&
      'Blob' in self &&
      (function() {
        try {
          new Blob();
          return true
        } catch (e) {
          return false
        }
      })(),
    formData: 'FormData' in self,
    arrayBuffer: 'ArrayBuffer' in self
  };

  function isDataView(obj) {
    return obj && DataView.prototype.isPrototypeOf(obj)
  }

  if (support.arrayBuffer) {
    var viewClasses = [
      '[object Int8Array]',
      '[object Uint8Array]',
      '[object Uint8ClampedArray]',
      '[object Int16Array]',
      '[object Uint16Array]',
      '[object Int32Array]',
      '[object Uint32Array]',
      '[object Float32Array]',
      '[object Float64Array]'
    ];

    var isArrayBufferView =
      ArrayBuffer.isView ||
      function(obj) {
        return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1
      };
  }

  function normalizeName(name) {
    if (typeof name !== 'string') {
      name = String(name);
    }
    if (/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(name)) {
      throw new TypeError('Invalid character in header field name')
    }
    return name.toLowerCase()
  }

  function normalizeValue(value) {
    if (typeof value !== 'string') {
      value = String(value);
    }
    return value
  }

  // Build a destructive iterator for the value list
  function iteratorFor(items) {
    var iterator = {
      next: function() {
        var value = items.shift();
        return {done: value === undefined, value: value}
      }
    };

    if (support.iterable) {
      iterator[Symbol.iterator] = function() {
        return iterator
      };
    }

    return iterator
  }

  function Headers(headers) {
    this.map = {};

    if (headers instanceof Headers) {
      headers.forEach(function(value, name) {
        this.append(name, value);
      }, this);
    } else if (Array.isArray(headers)) {
      headers.forEach(function(header) {
        this.append(header[0], header[1]);
      }, this);
    } else if (headers) {
      Object.getOwnPropertyNames(headers).forEach(function(name) {
        this.append(name, headers[name]);
      }, this);
    }
  }

  Headers.prototype.append = function(name, value) {
    name = normalizeName(name);
    value = normalizeValue(value);
    var oldValue = this.map[name];
    this.map[name] = oldValue ? oldValue + ', ' + value : value;
  };

  Headers.prototype['delete'] = function(name) {
    delete this.map[normalizeName(name)];
  };

  Headers.prototype.get = function(name) {
    name = normalizeName(name);
    return this.has(name) ? this.map[name] : null
  };

  Headers.prototype.has = function(name) {
    return this.map.hasOwnProperty(normalizeName(name))
  };

  Headers.prototype.set = function(name, value) {
    this.map[normalizeName(name)] = normalizeValue(value);
  };

  Headers.prototype.forEach = function(callback, thisArg) {
    for (var name in this.map) {
      if (this.map.hasOwnProperty(name)) {
        callback.call(thisArg, this.map[name], name, this);
      }
    }
  };

  Headers.prototype.keys = function() {
    var items = [];
    this.forEach(function(value, name) {
      items.push(name);
    });
    return iteratorFor(items)
  };

  Headers.prototype.values = function() {
    var items = [];
    this.forEach(function(value) {
      items.push(value);
    });
    return iteratorFor(items)
  };

  Headers.prototype.entries = function() {
    var items = [];
    this.forEach(function(value, name) {
      items.push([name, value]);
    });
    return iteratorFor(items)
  };

  if (support.iterable) {
    Headers.prototype[Symbol.iterator] = Headers.prototype.entries;
  }

  function consumed(body) {
    if (body.bodyUsed) {
      return Promise.reject(new TypeError('Already read'))
    }
    body.bodyUsed = true;
  }

  function fileReaderReady(reader) {
    return new Promise(function(resolve, reject) {
      reader.onload = function() {
        resolve(reader.result);
      };
      reader.onerror = function() {
        reject(reader.error);
      };
    })
  }

  function readBlobAsArrayBuffer(blob) {
    var reader = new FileReader();
    var promise = fileReaderReady(reader);
    reader.readAsArrayBuffer(blob);
    return promise
  }

  function readBlobAsText(blob) {
    var reader = new FileReader();
    var promise = fileReaderReady(reader);
    reader.readAsText(blob);
    return promise
  }

  function readArrayBufferAsText(buf) {
    var view = new Uint8Array(buf);
    var chars = new Array(view.length);

    for (var i = 0; i < view.length; i++) {
      chars[i] = String.fromCharCode(view[i]);
    }
    return chars.join('')
  }

  function bufferClone(buf) {
    if (buf.slice) {
      return buf.slice(0)
    } else {
      var view = new Uint8Array(buf.byteLength);
      view.set(new Uint8Array(buf));
      return view.buffer
    }
  }

  function Body() {
    this.bodyUsed = false;

    this._initBody = function(body) {
      this._bodyInit = body;
      if (!body) {
        this._bodyText = '';
      } else if (typeof body === 'string') {
        this._bodyText = body;
      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
        this._bodyBlob = body;
      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
        this._bodyFormData = body;
      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
        this._bodyText = body.toString();
      } else if (support.arrayBuffer && support.blob && isDataView(body)) {
        this._bodyArrayBuffer = bufferClone(body.buffer);
        // IE 10-11 can't handle a DataView body.
        this._bodyInit = new Blob([this._bodyArrayBuffer]);
      } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
        this._bodyArrayBuffer = bufferClone(body);
      } else {
        this._bodyText = body = Object.prototype.toString.call(body);
      }

      if (!this.headers.get('content-type')) {
        if (typeof body === 'string') {
          this.headers.set('content-type', 'text/plain;charset=UTF-8');
        } else if (this._bodyBlob && this._bodyBlob.type) {
          this.headers.set('content-type', this._bodyBlob.type);
        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
          this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
        }
      }
    };

    if (support.blob) {
      this.blob = function() {
        var rejected = consumed(this);
        if (rejected) {
          return rejected
        }

        if (this._bodyBlob) {
          return Promise.resolve(this._bodyBlob)
        } else if (this._bodyArrayBuffer) {
          return Promise.resolve(new Blob([this._bodyArrayBuffer]))
        } else if (this._bodyFormData) {
          throw new Error('could not read FormData body as blob')
        } else {
          return Promise.resolve(new Blob([this._bodyText]))
        }
      };

      this.arrayBuffer = function() {
        if (this._bodyArrayBuffer) {
          return consumed(this) || Promise.resolve(this._bodyArrayBuffer)
        } else {
          return this.blob().then(readBlobAsArrayBuffer)
        }
      };
    }

    this.text = function() {
      var rejected = consumed(this);
      if (rejected) {
        return rejected
      }

      if (this._bodyBlob) {
        return readBlobAsText(this._bodyBlob)
      } else if (this._bodyArrayBuffer) {
        return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer))
      } else if (this._bodyFormData) {
        throw new Error('could not read FormData body as text')
      } else {
        return Promise.resolve(this._bodyText)
      }
    };

    if (support.formData) {
      this.formData = function() {
        return this.text().then(decode)
      };
    }

    this.json = function() {
      return this.text().then(JSON.parse)
    };

    return this
  }

  // HTTP methods whose capitalization should be normalized
  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT'];

  function normalizeMethod(method) {
    var upcased = method.toUpperCase();
    return methods.indexOf(upcased) > -1 ? upcased : method
  }

  function Request(input, options) {
    options = options || {};
    var body = options.body;

    if (input instanceof Request) {
      if (input.bodyUsed) {
        throw new TypeError('Already read')
      }
      this.url = input.url;
      this.credentials = input.credentials;
      if (!options.headers) {
        this.headers = new Headers(input.headers);
      }
      this.method = input.method;
      this.mode = input.mode;
      this.signal = input.signal;
      if (!body && input._bodyInit != null) {
        body = input._bodyInit;
        input.bodyUsed = true;
      }
    } else {
      this.url = String(input);
    }

    this.credentials = options.credentials || this.credentials || 'same-origin';
    if (options.headers || !this.headers) {
      this.headers = new Headers(options.headers);
    }
    this.method = normalizeMethod(options.method || this.method || 'GET');
    this.mode = options.mode || this.mode || null;
    this.signal = options.signal || this.signal;
    this.referrer = null;

    if ((this.method === 'GET' || this.method === 'HEAD') && body) {
      throw new TypeError('Body not allowed for GET or HEAD requests')
    }
    this._initBody(body);
  }

  Request.prototype.clone = function() {
    return new Request(this, {body: this._bodyInit})
  };

  function decode(body) {
    var form = new FormData();
    body
      .trim()
      .split('&')
      .forEach(function(bytes) {
        if (bytes) {
          var split = bytes.split('=');
          var name = split.shift().replace(/\+/g, ' ');
          var value = split.join('=').replace(/\+/g, ' ');
          form.append(decodeURIComponent(name), decodeURIComponent(value));
        }
      });
    return form
  }

  function parseHeaders(rawHeaders) {
    var headers = new Headers();
    // Replace instances of \r\n and \n followed by at least one space or horizontal tab with a space
    // https://tools.ietf.org/html/rfc7230#section-3.2
    var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, ' ');
    preProcessedHeaders.split(/\r?\n/).forEach(function(line) {
      var parts = line.split(':');
      var key = parts.shift().trim();
      if (key) {
        var value = parts.join(':').trim();
        headers.append(key, value);
      }
    });
    return headers
  }

  Body.call(Request.prototype);

  function Response(bodyInit, options) {
    if (!options) {
      options = {};
    }

    this.type = 'default';
    this.status = options.status === undefined ? 200 : options.status;
    this.ok = this.status >= 200 && this.status < 300;
    this.statusText = 'statusText' in options ? options.statusText : 'OK';
    this.headers = new Headers(options.headers);
    this.url = options.url || '';
    this._initBody(bodyInit);
  }

  Body.call(Response.prototype);

  Response.prototype.clone = function() {
    return new Response(this._bodyInit, {
      status: this.status,
      statusText: this.statusText,
      headers: new Headers(this.headers),
      url: this.url
    })
  };

  Response.error = function() {
    var response = new Response(null, {status: 0, statusText: ''});
    response.type = 'error';
    return response
  };

  var redirectStatuses = [301, 302, 303, 307, 308];

  Response.redirect = function(url, status) {
    if (redirectStatuses.indexOf(status) === -1) {
      throw new RangeError('Invalid status code')
    }

    return new Response(null, {status: status, headers: {location: url}})
  };

  exports.DOMException = self.DOMException;
  try {
    new exports.DOMException();
  } catch (err) {
    exports.DOMException = function(message, name) {
      this.message = message;
      this.name = name;
      var error = Error(message);
      this.stack = error.stack;
    };
    exports.DOMException.prototype = Object.create(Error.prototype);
    exports.DOMException.prototype.constructor = exports.DOMException;
  }

  function fetch(input, init) {
    return new Promise(function(resolve, reject) {
      var request = new Request(input, init);

      if (request.signal && request.signal.aborted) {
        return reject(new exports.DOMException('Aborted', 'AbortError'))
      }

      var xhr = new XMLHttpRequest();

      function abortXhr() {
        xhr.abort();
      }

      xhr.onload = function() {
        var options = {
          status: xhr.status,
          statusText: xhr.statusText,
          headers: parseHeaders(xhr.getAllResponseHeaders() || '')
        };
        options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL');
        var body = 'response' in xhr ? xhr.response : xhr.responseText;
        resolve(new Response(body, options));
      };

      xhr.onerror = function() {
        reject(new TypeError('Network request failed'));
      };

      xhr.ontimeout = function() {
        reject(new TypeError('Network request failed'));
      };

      xhr.onabort = function() {
        reject(new exports.DOMException('Aborted', 'AbortError'));
      };

      xhr.open(request.method, request.url, true);

      if (request.credentials === 'include') {
        xhr.withCredentials = true;
      } else if (request.credentials === 'omit') {
        xhr.withCredentials = false;
      }

      if ('responseType' in xhr && support.blob) {
        xhr.responseType = 'blob';
      }

      request.headers.forEach(function(value, name) {
        xhr.setRequestHeader(name, value);
      });

      if (request.signal) {
        request.signal.addEventListener('abort', abortXhr);

        xhr.onreadystatechange = function() {
          // DONE (success or failure)
          if (xhr.readyState === 4) {
            request.signal.removeEventListener('abort', abortXhr);
          }
        };
      }

      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit);
    })
  }

  fetch.polyfill = true;

  if (!self.fetch) {
    self.fetch = fetch;
    self.Headers = Headers;
    self.Request = Request;
    self.Response = Response;
  }

  exports.Headers = Headers;
  exports.Request = Request;
  exports.Response = Response;
  exports.fetch = fetch;

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;

})({});
})(__self__);
__self__.fetch.ponyfill = true;
// Remove "polyfill" property added by whatwg-fetch
delete __self__.fetch.polyfill;
// Choose between native implementation (global) or custom implementation (__self__)
// var ctx = global.fetch ? global : __self__;
var ctx = __self__; // this line disable service worker support temporarily
exports = ctx.fetch // To enable: import fetch from 'cross-fetch'
exports.default = ctx.fetch // For TypeScript consumers without esModuleInterop.
exports.fetch = ctx.fetch // To enable: import {fetch} from 'cross-fetch'
exports.Headers = ctx.Headers
exports.Request = ctx.Request
exports.Response = ctx.Response
module.exports = exports


/***/ }),

/***/ "./src/isNullResponse.js":
/*!*******************************!*\
  !*** ./src/isNullResponse.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * @param {Response} response the response from fetch()
 * @returns {boolean} true if the response is a "null response" where we successfully talked to the
 * source, but the source has no data for us.
 */
const isNullResponse = response =>
// can't access, eg. due to expired/missing project token
response.status === 403 ||
// assets does not exist
// assets.scratch.mit.edu also returns 503 for missing assets
response.status === 404 || response.status === 503;
module.exports = isNullResponse;

/***/ }),

/***/ "./src/safer-fetch.js":
/*!****************************!*\
  !*** ./src/safer-fetch.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable no-use-before-define */

const {
  scratchFetch
} = __webpack_require__(/*! ./scratchFetch */ "./src/scratchFetch.js");

// This throttles and retries scratchFetch() to mitigate the effect of random network errors and
// random browser errors (especially in Chrome)

let currentFetches = 0;
const queue = [];
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const startNextFetch = _ref => {
  let [resolve, url, options] = _ref;
  let failedAttempts = 0;

  /**
   * @param {Response} result From fetch()
   */
  const done = result => {
    // In macOS WKWebView, requests to file:// URLs return status: 0 and ok: false when they succeed, so we'll
    // mess with the object so everyone that uses this realizes it succeeded.
    // If the requests failed (because the file didn't exist) then fetch() rejects instead.
    if (result.status === 0) {
      Object.defineProperty(result, 'ok', {
        value: true
      });
      Object.defineProperty(result, 'status', {
        value: 200
      });
    }
    currentFetches--;
    checkStartNextFetch();
    resolve(result);
  };
  const attemptToFetch = () => scratchFetch(url, options).then(done).catch(error => {
    // If fetch() errors, it means there was a network error of some sort.
    // This is worth retrying, especially as some browser will randomly fail requests
    // if we send too many at once (as we do).

    console.warn("Attempt to fetch ".concat(url, " failed"), error);
    if (failedAttempts < 2) {
      failedAttempts++;
      sleep((failedAttempts + Math.random() - 1) * 5000).then(attemptToFetch);
      return;
    }

    // The fetch() error is usually very generic, so we'll add enough information
    // to possibly be useful.
    done(Promise.reject(new Error("Storage request ".concat(url, " failed: ").concat(error))));
  });
  attemptToFetch();
};
const checkStartNextFetch = () => {
  if (currentFetches < 100 && queue.length > 0) {
    currentFetches++;
    startNextFetch(queue.shift());
  }
};
const saferFetch = (url, options) => new Promise(resolve => {
  queue.push([resolve, url, options]);
  checkStartNextFetch();
});
module.exports = saferFetch;

/***/ }),

/***/ "./src/scratchFetch.js":
/*!*****************************!*\
  !*** ./src/scratchFetch.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const crossFetch = __webpack_require__(/*! cross-fetch */ "./node_modules/cross-fetch/dist/browser-ponyfill.js");

/**
 * Metadata header names
 * @enum {string} The enum value is the name of the associated header.
 * @readonly
 */
const RequestMetadata = {
  /** The ID of the project associated with this request */
  ProjectId: 'X-Project-ID',
  /** The ID of the project run associated with this request */
  RunId: 'X-Run-ID'
};

/**
 * Metadata headers for requests
 * @type {Headers}
 */
const metadata = new crossFetch.Headers();

/**
 * Check if there is any metadata to apply.
 * @returns {boolean} true if `metadata` has contents, or false if it is empty.
 */
const hasMetadata = () => {
  /* global self */
  const searchParams = typeof self !== 'undefined' && self && self.location && self.location.search && self.location.search.split(/[?&]/) || [];
  if (!searchParams.includes('scratchMetadata=1')) {
    // for now, disable this feature unless scratchMetadata=1
    // TODO: remove this check once we're sure the feature works correctly in production
    return false;
  }
  for (const _ of metadata) {
    return true;
  }
  return false;
};

/**
 * Non-destructively merge any metadata state (if any) with the provided options object (if any).
 * If there is metadata state but no options object is provided, make a new object.
 * If there is no metadata state, return the provided options parameter without modification.
 * If there is metadata and an options object is provided, modify a copy and return it.
 * Headers in the provided options object may override headers generated from metadata state.
 * @param {RequestInit} [options] The initial request options. May be null or undefined.
 * @returns {RequestInit|undefined} the provided options parameter without modification, or a new options object.
 */
const applyMetadata = options => {
  if (hasMetadata()) {
    const augmentedOptions = Object.assign({}, options);
    augmentedOptions.headers = new crossFetch.Headers(metadata);
    if (options && options.headers) {
      // the Fetch spec says options.headers could be:
      // "A Headers object, an object literal, or an array of two-item arrays to set request's headers."
      // turn it into a Headers object to be sure of how to interact with it
      const overrideHeaders = options.headers instanceof crossFetch.Headers ? options.headers : new crossFetch.Headers(options.headers);
      for (const [name, value] of overrideHeaders.entries()) {
        augmentedOptions.headers.set(name, value);
      }
    }
    return augmentedOptions;
  }
  return options;
};

/**
 * Make a network request.
 * This is a wrapper for the global fetch method, adding some Scratch-specific functionality.
 * @param {RequestInfo|URL} resource The resource to fetch.
 * @param {RequestInit} options Optional object containing custom settings for this request.
 * @see {@link https://developer.mozilla.org/docs/Web/API/fetch} for more about the fetch API.
 * @returns {Promise<Response>} A promise for the response to the request.
 */
const scratchFetch = (resource, options) => {
  const augmentedOptions = applyMetadata(options);
  return crossFetch.fetch(resource, augmentedOptions);
};

/**
 * Set the value of a named request metadata item.
 * Setting the value to `null` or `undefined` will NOT remove the item.
 * Use `unsetMetadata` for that.
 * @param {RequestMetadata} name The name of the metadata item to set.
 * @param {any} value The value to set (will be converted to a string).
 */
const setMetadata = (name, value) => {
  metadata.set(name, value);
};

/**
 * Remove a named request metadata item.
 * @param {RequestMetadata} name The name of the metadata item to remove.
 */
const unsetMetadata = name => {
  metadata.delete(name);
};
module.exports = {
  default: scratchFetch,
  Headers: crossFetch.Headers,
  RequestMetadata,
  applyMetadata,
  scratchFetch,
  setMetadata,
  unsetMetadata
};
if (true) {
  /**
   * Retrieve a named request metadata item.
   * Only for use in tests.
   * @param {RequestMetadata} name The name of the metadata item to retrieve.
   * @returns {any} value The value of the metadata item, or `undefined` if it was not found.
   */
  const getMetadata = name => metadata.get(name);
  module.exports.getMetadata = getMetadata;
}

/***/ })

/******/ });
//# sourceMappingURL=3385fc4f5b394e2b375c.worker.js.map