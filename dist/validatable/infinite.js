(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@dikac/t-value/message/callback", "../boolean/infinite"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const callback_1 = require("@dikac/t-value/message/callback");
    const infinite_1 = require("../boolean/infinite");
    function Positive(number, message) {
        return callback_1.default(number, infinite_1.default, message);
    }
    exports.default = Positive;
});
//# sourceMappingURL=infinite.js.map