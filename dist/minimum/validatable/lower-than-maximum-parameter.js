import MergeWrapper from "@dikac/t-validator/validatable/readonly-wrapper-parameters";
import MessageCallback from "@dikac/t-validator/validatable/callback-function-parameters";
import GreaterThanMinimumFunction from "../boolean/lower-than-maximum-parameter";
export default class LowerThanMaximumParameter extends MergeWrapper {
    constructor(argument, message) {
        let msg = MessageCallback(argument, GreaterThanMinimumFunction, () => (message || argument.message)(this));
        super({ value: argument }, msg, msg);
        this.minimum = argument.minimum;
        this.maximum = argument.maximum;
        this.inclusive = argument.inclusive;
    }
}
//# sourceMappingURL=lower-than-maximum-parameter.js.map