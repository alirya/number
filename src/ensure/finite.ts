import AssertFinite from "../assert/finite";
import FiniteError from "../assert/throwable/finite-parameters";

export default function Finite(
    value : number,
    error : (value:number)=>Error = FiniteError
) : number {

     AssertFinite(value, error);

     return value;
}
