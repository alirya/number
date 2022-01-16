import NanError from './throwable/nan-parameters';
import Callback from '@alirya/function/assert/callback-parameters';
/**
 * assert if {@param number} is NaN
 *
 * @param number
 * @param error
 * error factory
 */
export default function Nan(
    number : number,
    error : (value:number)=> Error = NanError
) : asserts number is number {

    Callback(number, isNaN, error);

}
