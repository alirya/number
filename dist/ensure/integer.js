import AssertInteger from "../assert/integer";
import IntegerError from "../assert/throwable/integer-parameters";
export default function Integer(value, error = IntegerError) {
    AssertInteger(value, error);
    return value;
}
//# sourceMappingURL=integer.js.map