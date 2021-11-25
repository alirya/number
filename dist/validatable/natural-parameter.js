import NaturalMessage from "../assert/string/natural-parameter";
import NaturalParameters from "./natural-parameters";
export default function NaturalParameter({ message = NaturalMessage, value }) {
    return NaturalParameters(value, (value, valid) => message({ value, valid }));
}
//# sourceMappingURL=natural-parameter.js.map