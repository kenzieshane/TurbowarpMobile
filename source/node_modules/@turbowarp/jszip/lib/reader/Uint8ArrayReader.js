"use strict";
var ArrayReader = require("./ArrayReader");
var DataReader = require("./DataReader");
var utils = require("../utils");

function Uint8ArrayReader(data) {
    // ArrayReader's constructor will bitwise or the data with 0xFF to ensure it
    // is all valid bytes, but we already know data is a Uint8Array, so we can
    // skip that.
    DataReader.call(this, data);
}
utils.inherits(Uint8ArrayReader, ArrayReader);
/**
 * @see DataReader.readData
 */
Uint8ArrayReader.prototype.readData = function(size) {
    this.checkOffset(size);
    if(size === 0) {
        // in IE10, when using subarray(idx, idx), we get the array [0x00] instead of [].
        return new Uint8Array(0);
    }
    var result = this.data.subarray(this.zero + this.index, this.zero + this.index + size);
    this.index += size;
    return result;
};
module.exports = Uint8ArrayReader;
