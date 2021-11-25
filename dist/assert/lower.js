import IsLower from "../boolean/lower-parameters";
import Callback from "@dikac/t-function/assert/callback-parameters";
import LowerError from "./throwable/lower-parameters";
/**
 * assert if {@param number} is lower than {@param maximum} or equal if {@param inclusive} is true
 *
 * @param number
 * @param maximum
 * @param inclusive
 * @param error
 * error factory
 */
export default function Lower(number, maximum, inclusive, error = LowerError) {
    Callback(number, IsLower, error, maximum, inclusive);
}
//# sourceMappingURL=lower.js.map