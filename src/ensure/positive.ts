import AssertPositive from '../assert/positive.js';
import PositiveError from '../assert/throwable/positive.js';

export default function Positive(
    value : number,
    error : (value:number)=>Error = PositiveError.Parameters
) : number {

     AssertPositive(value, error);

     return value;
}
