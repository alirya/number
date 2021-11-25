import IsNegative from "../boolean/negative";
import NegativeError from "./throwable/negative-parameters";
import Callback from "@dikac/t-function/assert/callback-parameters";
/**
 * assert if {@param number} is negative
 *
 * @param number
 * @param error
 * error factory
 */
export default function Negative(number, error = NegativeError) {
    Callback(number, IsNegative, error);
}
//# sourceMappingURL=negative.js.map