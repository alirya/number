import AssertNumeric from '../assert/numeric';
import NumericError from '../assert/throwable/numeric';

export default function Numeric(
    value : unknown,
    error : (value:unknown)=>Error = NumericError.Parameters
) : number|string {

    AssertNumeric(value, error);

    return value;
}
