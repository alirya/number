(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@dikac/t-validatable/message/wrapper-merge", "@dikac/t-validatable/message/callback", "../boolean/greater-than-minimum"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const wrapper_merge_1 = require("@dikac/t-validatable/message/wrapper-merge");
    const callback_1 = require("@dikac/t-validatable/message/callback");
    const greater_than_minimum_1 = require("../boolean/greater-than-minimum");
    class Greater extends wrapper_merge_1.default {
        constructor(object, message) {
            let container = {
                maximum: object.maximum,
                minimum: object.minimum,
                inclusive: object.inclusive,
                value: object
            };
            let msg = callback_1.default(container, greater_than_minimum_1.default, () => message(this));
            super(container, msg, msg);
            this.minimum = object.minimum;
            this.maximum = object.maximum;
            this.inclusive = object.inclusive;
        }
    }
    exports.default = Greater;
});
//# sourceMappingURL=greater-than-minimum.js.map