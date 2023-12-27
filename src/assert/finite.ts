import FiniteError from './throwable/finite.js';
import Callback from '@axiona/function/assert/callback.js';
/**
 * assert if {@param number} is finite
 *
 * @param number
 * @param error
 * error factory
 */
export default function Finite(
    number : number,
    error : (value:number)=> Error = FiniteError.Parameters
) : asserts number is number {

    Callback.Parameters(number, isFinite, error);

}
