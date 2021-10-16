import Greater from "./greater";
import GreaterString from "../validatable/string/greater";
export default function GreaterStandard(minimum, inclusive) {
    return Greater(minimum, inclusive, GreaterString);
}
//# sourceMappingURL=greater-standard.js.map