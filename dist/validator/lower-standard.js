import Lower from "./lower";
import LowerString from "../validatable/string/lower";
export default function LowerStandard(maximum, inclusive) {
    return new Lower(maximum, inclusive, LowerString);
}
//# sourceMappingURL=lower-standard.js.map