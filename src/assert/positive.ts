import IsPositive from '../boolean/positive';
import PositiveError from './throwable/positive';
import Callback from '@alirya/function/assert/callback';

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
