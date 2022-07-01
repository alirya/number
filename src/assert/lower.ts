import IsLower from '../boolean/lower';
import Callback from '@alirya/function/assert/callback';
import LowerError from './throwable/lower';
/**
 * assert if {@param number} is lower than {@param maximum} or equal if {@param inclusive} is true
 *
 * @param number
 * @param maximum
 * @param inclusive
 * @param error
 * error factory
 */
export default function Lower(
    number : number,
    maximum : number,
    inclusive : boolean,
    error : (value : number, maximum : number, inclusive : boolean)=>Error = LowerError.Parameters
) : asserts number is number {

    Callback.Parameters(number, IsLower.Parameters,  error, maximum, inclusive);
}
