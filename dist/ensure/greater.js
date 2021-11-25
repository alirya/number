import AssertGreater from "../assert/greater";
import GreaterError from "../assert/throwable/greater-parameters";
export default function Greater(value, minimum, inclusive, error = GreaterError) {
    AssertGreater(value, minimum, inclusive, error);
    return value;
}
//# sourceMappingURL=greater.js.map