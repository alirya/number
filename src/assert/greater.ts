import IsGreater from "../boolean/greater-parameters";
import Callback from "@alirya/function/assert/callback-parameters";
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
export default function Greater(
    number : number,
    minimum : number,
    inclusive : boolean,
    error : (value : number, minimum : number, inclusive : boolean)=>Error = GreaterError
) : asserts number is number {

    Callback(number, IsGreater, error, minimum, inclusive);
}
