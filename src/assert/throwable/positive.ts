import PositiveType from '../string/positive';
import Value from '@alirya/value/value';

export function PositiveParameters(
    value : number,
    subject ?: string
) : Error {

    return new Error(PositiveType.Parameters(value, false, subject));
}


export function PositiveParameter(
    {
        value,
        subject,
    } : Value<number> & {subject ?: string}
) : Error {

    return PositiveParameters(value, subject);
}


namespace Positive {
    export const Parameters = PositiveParameters;
    export const Parameter = PositiveParameter;
}
export default Positive;
