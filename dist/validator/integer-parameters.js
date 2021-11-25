import IntegerValidatable from "../validatable/integer-parameters";
import IntegerString from "../assert/string/integer-parameters";
export default function IntegerParameters(message = IntegerString) {
    return function (value) {
        return IntegerValidatable(value, message);
    };
}
//# sourceMappingURL=integer-parameters.js.map