import Guard from '../boolean/numeric';
import Callback from '@alirya/function/assert/callback';
import NumberError from './throwable/numeric';
/**
 * assert if {@param value} is number type
 * @param value
 *
 * @param error
 * error factory
 */
export default function Numeric(
    value : unknown,
    error : (value:number)=> Error = NumberError.Parameters
) : asserts value is number {

    Callback.Parameters(value, Guard, error);
}
