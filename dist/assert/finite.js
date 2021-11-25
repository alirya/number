import FiniteError from "./throwable/finite-parameters";
import Callback from "@dikac/t-function/assert/callback-parameters";
/**
 * assert if {@param number} is finite
 *
 * @param number
 * @param error
 * error factory
 */
export default function Finite(number, error = FiniteError) {
    Callback(number, isFinite, error);
}
//# sourceMappingURL=finite.js.map