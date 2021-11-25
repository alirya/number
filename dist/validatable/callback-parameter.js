import ValidatableCallbacks from "@dikac/t-validator/validatable/callback-class-parameter";
export default class CallbackParameters extends ValidatableCallbacks {
    valueOf() {
        return this.value;
    }
    toString(radix) {
        return this.value.toString(radix);
    }
}
//# sourceMappingURL=callback-parameter.js.map