import IsInfinite from "../boolean/infinite";
import InfiniteError from "./throwable/infinite-parameters";
import Callback from "@dikac/t-function/assert/callback-parameters";
/**
 * assert if {@param number} is infinite
 *
 * @param number
 * @param error
 * error factory
 */
export default function Infinite(number, error = InfiniteError) {
    Callback(number, IsInfinite, error);
}
//# sourceMappingURL=infinite.js.map