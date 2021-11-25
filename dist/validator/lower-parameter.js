import LowerParameters from "./lower-parameters";
import LowerString from "../assert/string/lower-parameter";
export default function LowerParameter({ maximum, inclusive, message = LowerString, }) {
    return LowerParameters(maximum, inclusive, (value, valid, maximum, inclusive) => message({ value, valid, maximum, inclusive }));
}
//# sourceMappingURL=lower-parameter.js.map