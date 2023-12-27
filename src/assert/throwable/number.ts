import NumberType from '../string/number.js';
import Value from '@axiona/value/value.js';

export function NumberParameters(
    value : any,
    subject ?: string ,
    conversion ?: (value:unknown)=>string
) : Error {

    return new Error(NumberType.Parameters(false, value, subject, conversion));
}


export function NumberParameter(
    {
        value,
        subject,
        conversion,
    } : Value<any> & {
        subject ?: string,
        conversion ?: (value:unknown)=>string
    }
) : Error {

    return NumberParameters(value, subject, conversion);
}


namespace Number {
    export const Parameters = NumberParameters;
    export const Parameter = NumberParameter;
}
export default Number;
