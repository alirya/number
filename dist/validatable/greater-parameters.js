var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _GreaterParameters_message;
import GreaterObject from "../boolean/greater-parameter";
import MemoizeAccessor from "@dikac/t-object/function/memoize-accessor";
export default class GreaterParameters {
    constructor(value, minimum, inclusive, message) {
        this.value = value;
        this.minimum = minimum;
        this.inclusive = inclusive;
        _GreaterParameters_message.set(this, void 0);
        __classPrivateFieldSet(this, _GreaterParameters_message, message, "f");
    }
    get valid() {
        return GreaterObject(this);
    }
    get message() {
        return __classPrivateFieldGet(this, _GreaterParameters_message, "f").call(this, this.value, this.valid, this.minimum, this.inclusive);
    }
    valueOf() {
        return this.value;
    }
    toString(radix) {
        return this.value.toString(radix);
    }
}
_GreaterParameters_message = new WeakMap();
__decorate([
    MemoizeAccessor()
], GreaterParameters.prototype, "valid", null);
__decorate([
    MemoizeAccessor()
], GreaterParameters.prototype, "message", null);
//# sourceMappingURL=greater-parameters.js.map