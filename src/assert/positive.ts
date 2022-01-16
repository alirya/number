import IsPositive from '../boolean/positive';
import PositiveError from './throwable/positive-parameters';
import Callback from '@alirya/function/assert/callback-parameters';

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
