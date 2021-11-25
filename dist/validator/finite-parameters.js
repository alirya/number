import FiniteValidatable from "../validatable/finite-parameters";
import FiniteString from "../assert/string/finite-parameters";
export default function FiniteParameters(message = FiniteString) {
    return function (value) {
        return FiniteValidatable(value, message);
    };
}
//# sourceMappingURL=finite-parameters.js.map