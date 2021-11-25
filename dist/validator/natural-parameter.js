import NaturalString from "../assert/string/natural-parameter";
import NaturalParameters from "./natural-parameters";
export default function NaturalParameter(message = NaturalString) {
    return NaturalParameters((value, valid) => message({ value, valid }));
}
//# sourceMappingURL=natural-parameter.js.map