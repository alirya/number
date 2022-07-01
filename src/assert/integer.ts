import IsInteger from '../boolean/integer';
import IntegerError from './throwable/integer';
import Callback from '@alirya/function/assert/callback';
/**
 * assert if {@param number} is integer
 * @param number
 *
 * @param error
 * error factory
 */
export default function Integer(
    number : number,
    error : (value:number)=> Error = IntegerError.Parameters
) : asserts number is number {

    Callback.Parameters(number, IsInteger, error);
}
