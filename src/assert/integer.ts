import IsInteger from '../boolean/integer.js';
import IntegerError from './throwable/integer.js';
import Callback from '@axiona/function/assert/callback.js';
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
