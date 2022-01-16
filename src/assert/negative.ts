import IsNegative from '../boolean/negative';
import NegativeError from './throwable/negative-parameters';
import Callback from '@alirya/function/assert/callback-parameters';
/**
 * assert if {@param number} is negative
 *
 * @param number
 * @param error
 * error factory
 */
export default function Negative(
    number : number,
    error : (value:number)=> Error = NegativeError
) : asserts number is number {

    Callback(number, IsNegative, error);

}
