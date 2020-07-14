(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../../boolean/string/positive"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const positive_1 = require("../../boolean/string/positive");
    function Positive(object) {
        return positive_1.default(object.valid, object.value);
    }
    exports.default = Positive;
});
//# sourceMappingURL=positive.js.map