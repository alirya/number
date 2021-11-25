import NaturalMessage from "../assert/string/natural-parameter";
import IntegerParameters from "./integer-parameters";
export default function IntegerParameter({ message = NaturalMessage, value }) {
    return IntegerParameters(value, (value, valid) => message({ value, valid }));
}
//# sourceMappingURL=integer-parameter.js.map