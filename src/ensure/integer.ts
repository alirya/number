import AssertInteger from '../assert/integer.js';
import IntegerError from '../assert/throwable/integer.js';

export default function Integer(
    value : number,
    error : (value:number)=>Error = IntegerError.Parameters
) : number {

     AssertInteger(value, error);

     return value;
}
