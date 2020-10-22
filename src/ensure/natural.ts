import AssertNatural from "../assert/natural";
import NaturalError from "../assert/throwable/natural";

export default function Natural(
    value : number,
    error : (value:number)=>Error = NaturalError
) : number {

     AssertNatural(value, error);

     return value;
}
