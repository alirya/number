import AssertFinite from '../assert/finite.js';
import FiniteError from '../assert/throwable/finite.js';

export default function Finite(
    value : number,
    error : (value:number)=>Error = FiniteError.Parameters
) : number {

     AssertFinite(value, error);

     return value;
}
