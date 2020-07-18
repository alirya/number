(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@dikac/t-value/message/readonly-merge", "@dikac/t-value/message/callback", "../boolean/greater-than-minimum"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const readonly_merge_1 = require("@dikac/t-value/message/readonly-merge");
    const callback_1 = require("@dikac/t-value/message/callback");
    const greater_than_minimum_1 = require("../boolean/greater-than-minimum");
    class Greater extends readonly_merge_1.default {
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