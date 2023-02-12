import InfiniteType from '../string/infinite.js';
import Value from '@alirya/value/value.js';

export function InfiniteParameters(
    number : number,
    subject ?: string
) : Error {

    return new Error(InfiniteType.Parameters(number, false, subject));
}


export function InfiniteParameter(
    {
        value,
        subject,
    } : Value<number> & {subject ?: string}
) : Error {

    return InfiniteParameters(value, subject);
}


namespace Infinite {
    export const Parameters = InfiniteParameters;
    export const Parameter = InfiniteParameter;
}
export default Infinite;
