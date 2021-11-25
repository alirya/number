import CallbackParameters from "./callback-parameters";
import NegativeValidation from "../boolean/negative";
import NegativeMessage from "../assert/string/negative-parameters";
export default function NegativeParameters(number, message = NegativeMessage) {
    return new CallbackParameters(number, NegativeValidation, message);
}
//# sourceMappingURL=negative-parameters.js.map