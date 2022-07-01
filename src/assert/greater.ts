import IsGreater from '../boolean/greater';
import Callback from '@alirya/function/assert/callback';
import GreaterError from './throwable/greater';
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
    error : (value : number, minimum : number, inclusive : boolean)=>Error = GreaterError.Parameters
) : asserts number is number {

    Callback.Parameters(number, IsGreater.Parameters, error, minimum, inclusive);
}
