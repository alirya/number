import Guard from '../boolean/number';
import Callback from '@alirya/function/assert/callback-parameters';
import NumberError from './throwable/number-parameters';
/**
 * assert if {@param value} is number type
 * @param value
 *
 * @param error
 * error factory
 */
export default function Number(
    value : unknown,
    error : (value:number)=> Error = NumberError
) : asserts value is number {

    Callback(value, Guard, error);
}
