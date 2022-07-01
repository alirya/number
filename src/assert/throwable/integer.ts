import IntegerType from '../string/integer';
import Value from '@alirya/value/value';

export function IntegerParameters(
    value : number,
    subject ?: string
) : Error {

    return new Error(IntegerType.Parameters(value, false, subject));
}

export function IntegerParameter(
    {
        value,
        subject,
    } : Value<number> & {subject ?: string}
) : Error {

    return IntegerParameters(value, subject);
}


namespace Integer {
    export const Parameters = IntegerParameters;
    export const Parameter = IntegerParameter;
}
export default Integer;
