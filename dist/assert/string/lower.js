(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@dikac/t-string/message/sentences"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * message for lower validation
     */
    const sentences_1 = require("@dikac/t-string/message/sentences");
    function Lower(valid, value, minimum, inclusive, subject = 'number') {
        const sentence = new sentences_1.default(valid);
        sentence.subject.push(subject);
        sentence.comma.push('expect');
        if (valid) {
            sentence.accept.push(`is lower`);
        }
        else {
            sentence.reject.push(`must lower`);
        }
        if (inclusive) {
            sentence.expect.push(`or equal`);
        }
        sentence.expect.push('than', `"${minimum.toString()}"`);
        sentence.actual.push('actual', `"${value.toString()}"`);
        return sentence.message;
    }
    exports.default = Lower;
});
//# sourceMappingURL=lower.js.map