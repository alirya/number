import NanError from "./throwable/nan-parameters";
import Callback from "@dikac/t-function/assert/callback-parameters";
/**
 * assert if {@param number} is NaN
 *
 * @param number
 * @param error
 * error factory
 */
export default function Nan(number, error = NanError) {
    Callback(number, isNaN, error);
}
//# sourceMappingURL=nan.js.map