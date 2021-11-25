import Callback from "@dikac/t-validator/validatable/callback-function-parameters";
import NumberGuard from "../boolean/number";
import NumberMessage from "../assert/string/number-parameters";
export default function NumberParameters(value, message = NumberMessage) {
    return Callback(value, NumberGuard, message);
}
//# sourceMappingURL=number-parameters.js.map