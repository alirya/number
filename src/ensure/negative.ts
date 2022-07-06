import AssertNegative from '../assert/negative.js';
import NegativeError from '../assert/throwable/negative.js';

export default function Negative(
    value : number,
    error : (value:number)=>Error = NegativeError.Parameters
) : number {

     AssertNegative(value, error);

     return value;
}
