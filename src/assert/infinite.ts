import IsInfinite from '../boolean/infinite.js';
import InfiniteError from './throwable/infinite.js';
import Callback from '@axiona/function/assert/callback.js';
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
