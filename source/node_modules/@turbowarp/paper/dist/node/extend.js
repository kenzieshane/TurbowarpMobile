/*
 * Paper.js - The Swiss Army Knife of Vector Graphics Scripting.
 * http://paperjs.org/
 *
 * Copyright (c) 2011 - 2020, Jürg Lehni & Jonathan Puckey
 * http://juerglehni.com/ & https://puckey.studio/
 *
 * Distributed under the MIT license. See LICENSE file for details.
 *
 * All rights reserved.
 */

var fs = require('fs'),
    path = require('path');

module.exports = function(paper) {
    paper.PaperScope.inject({
        createCanvas: function(width, height, type) {
            // Do not use CanvasProvider.getCanvas(), since we may be changing
            // the underlying node-canvas when requesting PDF support, and don't
            // want to release it after back into the pool.
            var canvas = paper.document.createElement('canvas');
            canvas.width = width;
            canvas.height = height;
            canvas.type = type;
            return canvas;
        },

        /**
         * @deprecated, use use {@link #createCanvas(width, height)} instead.
         */
        Canvas: '#createCanvas'
    });

    // Override requestAnimationFrame() to avoid setInterval() timers.
    // NOTE: In Node.js, we only support manual updating for now, but
    // View#exportFrames() below offers a way to emulate animations by exporting
    // them frame by frame at the given frame-rate.
    paper.DomEvent.requestAnimationFrame = function(callback) {
    };

    // Node.js based image exporting code.
    paper.CanvasView.inject({
        // DOCS: CanvasView#exportFrames(options);
        exportFrames: function(options) {
            options = paper.Base.set({
                fps: 30,
                prefix: 'frame-',
                amount: 1,
                format: 'png' // Supported: 'png' or 'jpeg'
            }, options);
            if (!options.directory)
                throw new Error('Missing options.directory');
            if (options.format && !/^(jpeg|png)$/.test(options.format))
                throw new Error('Unsupported format. Use "png" or "jpeg"');
            var view = this,
                count = 0,
                frameDuration = 1 / options.fps,
                startTime = Date.now(),
                lastTime = startTime,
                padding = options.padding || ((options.amount - 1) + '').length,
                paddedStr = Array(padding + 1).join('0');

            // Start exporting frames by exporting the first frame:
            exportFrame(options);

            function exportFrame() {
                // Convert to a Base object, for #toString()
                view.emit('frame', new paper.Base({
                    delta: frameDuration,
                    time: frameDuration * count,
                    count: count
                }));
                var file = path.join(options.directory,
                        options.prefix + (paddedStr + count).slice(-padding)
                            + '.' + options.format);
                var out = view.exportImage(file, function() {
                    // Once the file has been closed, export the next fame:
                    var then = Date.now();
                    if (options.onProgress) {
                        options.onProgress({
                            count: count,
                            amount: options.amount,
                            percentage: Math.round((count + 1) / options.amount
                                    * 10000) / 100,
                            time: then - startTime,
                            delta: then - lastTime
                        });
                    }
                    lastTime = then;
                    if (++count < options.amount) {
                        exportFrame();
                    } else {
                        // Call onComplete handler when finished:
                        if (options.onComplete) {
                            options.onComplete();
                        }
                    }
                });
            }
        },

        // DOCS: CanvasView#exportImage(path, callback);
        exportImage: function(path, callback) {
            this.update();
            var out = fs.createWriteStream(path),
                format = /\.jp(e?)g$/.test(path) ? 'jpeg' : 'png',
                stream = this._element[format + 'Stream']();
            stream.pipe(out);
            if (callback) {
                out.on('close', callback);
            }
            return out;
        }
    });
};
