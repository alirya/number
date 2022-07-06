import AssertNatural from '../assert/natural.js';
import NaturalError from '../assert/throwable/natural.js';

export default function Natural(
    value : number,
    error : (value:number)=>Error = NaturalError.Parameters
) : number {

     AssertNatural(value, error);

     return value;
}
