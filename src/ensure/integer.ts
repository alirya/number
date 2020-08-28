import AssertInteger from "../assert/integer";
import IntegerError from "../assert/throwable/integer";

export default function Integer(
    value : number,
    error : (value:number)=>Error = IntegerError
) : number {

     AssertInteger(value, error);

     return value;
}
