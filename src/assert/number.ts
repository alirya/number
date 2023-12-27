import Guard from '../boolean/number.js';
import Callback from '@axiona/function/assert/callback.js';
import NumberError from './throwable/number.js';
/**
 * assert if {@param value} is number type
 * @param value
 *
 * @param error
 * error factory
 */
export default function Number(
    value : unknown,
    error : (value:number)=> Error = NumberError.Parameters
) : asserts value is number {

    Callback.Parameters(value, Guard, error);
}
