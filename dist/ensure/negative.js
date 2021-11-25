import AssertNegative from "../assert/negative";
import NegativeError from "../assert/throwable/negative-parameters";
export default function Negative(value, error = NegativeError) {
    AssertNegative(value, error);
    return value;
}
//# sourceMappingURL=negative.js.map