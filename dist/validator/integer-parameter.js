import IntegerString from "../assert/string/integer-parameter";
import IntegerParameters from "./integer-parameters";
export default function IntegerParameter(message = IntegerString) {
    return IntegerParameters((value, valid) => message({ value, valid }));
}
//# sourceMappingURL=integer-parameter.js.map