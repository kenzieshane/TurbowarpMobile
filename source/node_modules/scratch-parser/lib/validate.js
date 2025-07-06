var ajv = require('ajv')();
var sb2Defs = require('./sb2_definitions.json');
var sb3Defs = require('./sb3_definitions.json');
var sb2Schema = require('./sb2_schema.json');
var sb3Schema = require('./sb3_schema.json');
var sprite2Schema = require('./sprite2_schema.json');
var sprite3Schema = require('./sprite3_schema.json');
ajv.addSchema(sb2Defs).addSchema(sb3Defs);

var validate = function (isSprite, input, callback) {
    var validateSb3 = ajv.compile(isSprite ? sprite3Schema : sb3Schema);
    var isValidSb3 = validateSb3(input);
    if (isValidSb3) {
        input.projectVersion = 3;
        return callback(null, input);
    }

    var validateSb2 = ajv.compile(isSprite ? sprite2Schema : sb2Schema);
    var isValidSb2 = validateSb2(input);
    if (isValidSb2) {
        input.projectVersion = 2;
        return callback(null, input);
    }

    var validationErrors = {
        validationError: 'Could not parse as a valid SB2 or SB3 project.',
        sb3Errors: validateSb3.errors,
        sb2Errors: validateSb2.errors
    };

    callback(validationErrors);
};

module.exports = function (isSprite, input, callback) {
    // If validate fails, try using sb3fix to salvage the input
    validate(isSprite, input, function (err, result) {
        if (!err) {
            callback(null, result);
            return;
        }

        try {
            // Load slightly lazily as this is an edge case
            // eslint-disable-next-line global-require
            var sb3fix = require('@turbowarp/sb3fix');

            var fixed = sb3fix.fixJSON(input);
            validate(isSprite, fixed, function (err2, result2) {
                if (err2) {
                    // Original validation error will be most useful
                    callback(err);
                } else {
                    callback(null, result2);
                }
            });
        } catch (sb3fixError) {
            // The original validation error will be most useful
            callback(err);
        }
    });
};
