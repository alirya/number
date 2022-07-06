import IsPositive from '../boolean/positive.js';
import PositiveError from './throwable/positive.js';
import Callback from '@alirya/function/assert/callback.js';

/**
 * assert if {@param number} is positive
 *
 * @param number
 * @param error
 * error factory
 */
export default function Positive(
    number : number,
    error : (value:number)=> Error = PositiveError.Parameters
) : asserts number is number {

    Callback.Parameters(number, IsPositive, error);

}
