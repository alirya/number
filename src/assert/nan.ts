import NanError from './throwable/nan';
import Callback from '@alirya/function/assert/callback';
/**
 * assert if {@param number} is NaN
 *
 * @param number
 * @param error
 * error factory
 */
export default function Nan(
    number : number,
    error : (value:number)=> Error = NanError.Parameters
) : asserts number is number {

    Callback.Parameters(number, isNaN, error);

}
