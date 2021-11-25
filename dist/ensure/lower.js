import AssertLower from "../assert/lower";
import LowerError from "../assert/throwable/lower-parameters";
export default function Lower(value, maximum, inclusive, error = LowerError) {
    AssertLower(value, maximum, inclusive, error);
    return value;
}
//# sourceMappingURL=lower.js.map