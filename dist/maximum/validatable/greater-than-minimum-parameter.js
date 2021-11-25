import MergeWrapper from "@dikac/t-validator/validatable/readonly-wrapper-parameters";
import MessageCallback from "@dikac/t-validator/validatable/callback-function-parameters";
import GreaterThanMinimumFunction from "../boolean/greater-than-minimum-parameter";
export default class GreaterThanMinimumParameter extends MergeWrapper {
    constructor(argument, message) {
        let msg = MessageCallback(argument, GreaterThanMinimumFunction, () => (message || argument.message)(this));
        super({ value: argument }, msg, msg);
        this.minimum = argument.minimum;
        this.maximum = argument.maximum;
        this.inclusive = argument.inclusive;
    }
}
//# sourceMappingURL=greater-than-minimum-parameter.js.map