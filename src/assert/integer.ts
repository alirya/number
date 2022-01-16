import IsInteger from "../boolean/integer";
import IntegerError from "./throwable/integer-parameters";
import Callback from "@alirya/function/assert/callback-parameters";
/**
 * assert if {@param number} is integer
 * @param number
 *
 * @param error
 * error factory
 */
export default function Integer(
    number : number,
    error : (value:number)=> Error = IntegerError
) : asserts number is number {

    Callback(number, IsInteger, error);
}
