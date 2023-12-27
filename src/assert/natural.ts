import NaturalError from './throwable/natural.js';
import Callback from '@axiona/function/assert/callback.js';
import IsNatural from '../boolean/natural.js';
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
