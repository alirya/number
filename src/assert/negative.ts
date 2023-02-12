import IsNegative from '../boolean/negative.js';
import NegativeError from './throwable/negative.js';
import Callback from '@alirya/function/assert/callback.js';
/**
 * assert if {@param number} is negative
 *
 * @param number
 * @param error
 * error factory
 */
export default function Negative(
    number : number,
    error : (value:number)=> Error = NegativeError.Parameters
) : asserts number is number {

    Callback.Parameters(number, IsNegative, error);

}
