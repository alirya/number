import NanType from '../string/nan';
import Value from '@alirya/value/value';

export function NanParameters(
    value : number,
    subject ?: string
) : Error {

    return new Error(NanType.Parameters(value, false, subject));
}

export function NanParameter(
    {
        value,
        subject,
    } : Value<number> & {subject ?: string}
) : Error {

    return NanParameters(value, subject);
}


namespace Nan {
    export const Parameters = NanParameters;
    export const Parameter = NanParameter;
}
export default Nan;
