import ValidatableCallbacks from "@dikac/t-validator/validatable/callback-class-parameters";
export default class CallbackParameters extends ValidatableCallbacks {
    valueOf() {
        return this.value;
    }
    toString(radix) {
        return this.value.toString(radix);
    }
}
//# sourceMappingURL=callback-parameters.js.map