import PositiveValidatable from "../validatable/positive-parameters";
import PositiveString from "../assert/string/positive-parameters";
export default function PositiveParameters(message = PositiveString) {
    return function (value) {
        return PositiveValidatable(value, message);
    };
}
//# sourceMappingURL=positive-parameters.js.map