import AssertGreater from '../assert/greater.js';
import GreaterError from '../assert/throwable/greater.js';

export default function Greater(
    value : number,
    minimum : number,
    inclusive : boolean,
    error : (value : number, minimum : number, inclusive : boolean)=>Error = GreaterError.Parameters
) : number {

     AssertGreater(value, minimum, inclusive, error);

     return value;
}
