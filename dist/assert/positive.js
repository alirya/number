import IsPositive from "../boolean/positive";
import PositiveError from "./throwable/positive-parameters";
import Callback from "@dikac/t-function/assert/callback-parameters";
/**
 * assert if {@param number} is positive
 *
 * @param number
 * @param error
 * error factory
 */
export default function Positive(number, error = PositiveError) {
    Callback(number, IsPositive, error);
}
//# sourceMappingURL=positive.js.map