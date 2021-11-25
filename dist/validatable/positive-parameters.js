import Callback from "@dikac/t-validator/validatable/callback-function-parameters";
import PositiveValidation from "../boolean/positive";
import PositiveString from "../assert/string/positive-parameters";
export default function PositiveParameters(value, message = PositiveString) {
    return Callback(value, PositiveValidation, message);
}
//# sourceMappingURL=positive-parameters.js.map