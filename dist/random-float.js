(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./boolean/greater", "./boolean/lower", "./minimum/assert/lower-than-maximum"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const greater_1 = require("./boolean/greater");
    const lower_1 = require("./boolean/lower");
    const lower_than_maximum_1 = require("./minimum/assert/lower-than-maximum");
    function RandomFloat(minimum, maximum, inclusive = true /*, precision ?: number*/) {
        lower_than_maximum_1.default({
            maximum: maximum,
            minimum: minimum,
            inclusive: inclusive,
        });
        if ((maximum - minimum) === 0) {
            if (!inclusive) {
                throw new Error(`minimum (${minimum}) and maximum (${maximum}) different must greater than 0 in exclusive mode`);
            }
        }
        let random = Math.random() * (maximum - minimum);
        let result = random + minimum;
        if (inclusive) {
            return result;
        }
        else {
            if (greater_1.default(result, minimum, inclusive) && lower_1.default(result, maximum, inclusive)) {
                return result;
            }
            else {
                return RandomFloat(minimum, maximum, inclusive);
            }
        }
    }
    exports.default = RandomFloat;
});
//# sourceMappingURL=random-float.js.map