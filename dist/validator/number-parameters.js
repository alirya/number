import NumberValidatable from "../validatable/number-parameters";
import NumberString from "../assert/string/number-parameters";
export default function NumberParameters(message = NumberString) {
    return function (value) {
        return NumberValidatable(value, message);
    };
}
//# sourceMappingURL=number-parameters.js.map