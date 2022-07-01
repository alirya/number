import Guard from '../boolean/number';
import Callback from '@alirya/function/assert/callback';
import NumberError from './throwable/number';
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
