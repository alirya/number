import LowerType from '../string/lower';
import Value from '@alirya/value/value';
import Minimum from '../../minimum/minimum';
import Inclusive from '../../inclusive/inclusive';

export function LowerParameters(
    value : number,
    minimum : number,
    inclusive : boolean,
    subject ?: string
) : Error {

    return new Error(LowerType.Parameters(value, false, minimum, inclusive));
}

export function LowerParameter(
    {
        value,
        minimum,
        inclusive,
        subject,
    } : Value<number> & Minimum & Inclusive & {subject ?: string}
) : Error {

    return LowerParameters(value, minimum, inclusive, subject);
}


namespace Lower {
    export const Parameters = LowerParameters;
    export const Parameter = LowerParameter;
}
export default Lower;
