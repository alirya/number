import AssertNegative from '../assert/negative';
import NegativeError from '../assert/throwable/negative';

export default function Negative(
    value : number,
    error : (value:number)=>Error = NegativeError.Parameters
) : number {

     AssertNegative(value, error);

     return value;
}
