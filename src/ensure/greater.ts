import AssertGreater from "../assert/greater";
import GreaterError from "../assert/throwable/greater-parameters";

export default function Greater(
    value : number,
    minimum : number,
    inclusive : boolean,
    error : (value : number, minimum : number, inclusive : boolean)=>Error = GreaterError
) : number {

     AssertGreater(value, minimum, inclusive, error);

     return value;
}
