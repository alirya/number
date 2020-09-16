import IsPositive from "../boolean/positive";
import PositiveError from "./throwable/positive";
import Callback from "@dikac/t-function/assert/callback";

/**
 * assert if {@param number} is positive
 *
 * @param number
 * @param error
 * error factory
 */
export default function Positive(
    number : number,
    error : (value:number)=> Error = PositiveError
) : asserts number is number {

    Callback(number, IsPositive, error);

}
