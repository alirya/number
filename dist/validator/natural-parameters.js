import NaturalValidatable from "../validatable/natural-parameters";
import NaturalString from "../assert/string/natural-parameters";
export default function NaturalParameters(message = NaturalString) {
    return function (value) {
        return NaturalValidatable(value, message);
    };
}
//# sourceMappingURL=natural-parameters.js.map