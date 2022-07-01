import IsInfinite from '../boolean/infinite';
import InfiniteError from './throwable/infinite';
import Callback from '@alirya/function/assert/callback';
/**
 * assert if {@param number} is infinite
 *
 * @param number
 * @param error
 * error factory
 */
export default function Infinite(
    number : number,
    error : (value:number)=> Error = InfiniteError.Parameters
) : asserts number is number {

    Callback.Parameters(number, IsInfinite, error);

}
