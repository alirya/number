import FiniteType from '../string/finite.js';
import Value from '@alirya/value/value.js';

export function FiniteParameters(
    value : number,
    subject ?: string
) : Error {

    return new Error(FiniteType.Parameters(value, false, subject));
}


export function FiniteParameter(
    {
        value,
        subject,
    } : Value<number> & {subject ?: string}
) : Error {

    return FiniteParameters(value, subject);
}


namespace Finite {
    export const Parameters = FiniteParameters;
    export const Parameter = FiniteParameter;
}
export default Finite;
