(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../string/integer"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const integer_1 = require("../string/integer");
    function Integer(number, subject) {
        return new Error(integer_1.default(false, number, subject));
    }
    exports.default = Integer;
});
//# sourceMappingURL=integer.js.map