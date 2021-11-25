import NaturalError from "./throwable/natural-parameters";
import Callback from "@dikac/t-function/assert/callback-parameters";
import IsNatural from "../boolean/natural";
/**
 * assert if {@param number} is natural
 *
 * @param number
 * @param error
 * error factory
 */
export default function Natural(number, error = NaturalError) {
    Callback(number, IsNatural, error);
}
//# sourceMappingURL=natural.js.map