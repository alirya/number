import AssertNumber from '../assert/number.js';
import NumberError from '../assert/throwable/number.js';

export default function Number(
    value : unknown,
    error : (value:unknown)=>Error = NumberError.Parameters
) : number {

    AssertNumber(value, error);

    return value;
}
