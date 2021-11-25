import IsGreater from "../boolean/greater-parameters";
import Callback from "@dikac/t-function/assert/callback-parameters";
import GreaterError from "./throwable/greater-parameters";
/**
 * assert if {@param number} is greater than {@param minimum} or equal if {@param inclusive} is true
 *
 * @param number
 * @param minimum
 * @param inclusive
 * @param error
 * @constructor
 */
export default function Greater(number, minimum, inclusive, error = GreaterError) {
    Callback(number, IsGreater, error, minimum, inclusive);
}
//# sourceMappingURL=greater.js.map