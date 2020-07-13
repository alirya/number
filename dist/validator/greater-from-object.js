(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./greater"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const greater_1 = require("./greater");
    function GreaterFromObject(object) {
        return new greater_1.default(object.minimum, object.inclusive, object.message);
    }
    exports.default = GreaterFromObject;
});
//# sourceMappingURL=greater-from-object.js.map