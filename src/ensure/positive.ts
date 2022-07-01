import AssertPositive from '../assert/positive';
import PositiveError from '../assert/throwable/positive';

export default function Positive(
    value : number,
    error : (value:number)=>Error = PositiveError.Parameters
) : number {

     AssertPositive(value, error);

     return value;
}
