(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@dikac/t-string/message/sentences-is"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const sentences_is_1 = require("@dikac/t-string/message/sentences-is");
    function Infinite(valid, value, subject = '') {
        const sentence = sentences_is_1.default(valid, [subject, value.toString()]);
        sentence.object = ['infinite'];
        return sentence.message;
    }
    exports.default = Infinite;
});
//# sourceMappingURL=infinite.js.map