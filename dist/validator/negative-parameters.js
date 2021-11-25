import NegativeValidatable from "../validatable/negative-parameters";
import NegativeString from "../assert/string/negative-parameters";
export default function NegativeParameters(message = NegativeString) {
    return function (value) {
        return NegativeValidatable(value, message);
    };
}
//# sourceMappingURL=negative-parameters.js.map