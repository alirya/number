import NaturalType from '../string/natural.js';
import Value from '@alirya/value/value.js';

export function NaturalParameters(
    value : number,
    subject ?: string
) : Error {

    return new Error(NaturalType.Parameters(value, false, subject));
}


export function NaturalParameter(
    {
        value,
        subject,
    } : Value<number> & {subject ?: string}
) : Error {

    return NaturalParameters(value, subject);
}


namespace Natural {
    export const Parameters = NaturalParameters;
    export const Parameter = NaturalParameter;
}
export default Natural;
