import CallbackParameters from "./callback-parameters";
import IntegerValidation from "../boolean/integer";
import IntegerMessage from "../assert/string/integer-parameters";
export default function IntegerParameters(number, message = IntegerMessage) {
    return new CallbackParameters(number, IntegerValidation, message);
}
//# sourceMappingURL=integer-parameters.js.map