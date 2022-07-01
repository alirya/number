import NaturalError from './throwable/natural';
import Callback from '@alirya/function/assert/callback';
import IsNatural from '../boolean/natural';
/**
 * assert if {@param number} is natural
 *
 * @param number
 * @param error
 * error factory
 */
export default function Natural(
    number : number,
    error : (value:number)=> Error = NaturalError.Parameters
) : asserts number is number {

    Callback.Parameters(number, IsNatural, error);

}
