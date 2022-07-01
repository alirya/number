import AssertGreater from '../assert/greater';
import GreaterError from '../assert/throwable/greater';

export default function Greater(
    value : number,
    minimum : number,
    inclusive : boolean,
    error : (value : number, minimum : number, inclusive : boolean)=>Error = GreaterError.Parameters
) : number {

     AssertGreater(value, minimum, inclusive, error);

     return value;
}
