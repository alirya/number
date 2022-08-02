import NumericType from '../string/numeric';
import Value from '@alirya/value/value';

export function NumericParameters(
    value : any,
    subject ?: string ,
    conversion ?: (value:unknown)=>string
) : Error {

    return new Error(NumericType.Parameters(false, value, subject, conversion));
}


export function NumericParameter(
    {
        value,
        subject,
        conversion,
    } : Value<any> & {
        subject ?: string,
        conversion ?: (value:unknown)=>string
    }
) : Error {

    return NumericParameters(value, subject, conversion);
}


namespace Numeric {
    export const Parameters = NumericParameters;
    export const Parameter = NumericParameter;
}
export default Numeric;
