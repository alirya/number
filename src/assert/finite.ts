import FiniteError from './throwable/finite';
import Callback from '@alirya/function/assert/callback';
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
