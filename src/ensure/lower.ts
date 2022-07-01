import AssertLower from '../assert/lower';
import LowerError from '../assert/throwable/lower';

export default function Lower(
    value : number,
    maximum : number,
    inclusive : boolean,
    error : (value : number, maximum : number, inclusive : boolean)=>Error = LowerError.Parameters
) : number {

     AssertLower(value, maximum, inclusive, error);

     return value;
}
