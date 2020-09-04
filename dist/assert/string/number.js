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
    function Number(valid, value, subject = '', conversion = value => typeof value) {
        let sentence = sentences_is_1.default(valid);
        sentence.object.push('number');
        sentence.subject.push(subject);
        if (!valid) {
            sentence.subject.push(conversion(value));
        }
        return sentence.message;
    }
    exports.default = Number;
});
//# sourceMappingURL=number.js.map