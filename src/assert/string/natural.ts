import Value from '@axiona/value/value.js';
import Validatable from '@axiona/validatable/validatable.js';
export function NaturalParameters(
    value : number,
    valid : boolean,
    subject  = 'value'
) : string {

    const strings : string[] = [];

    strings.push(subject);

    if(valid) {

        strings.push('is');

    } else {

        strings.push('must');
    }

    strings.push('natural number');

    if(!valid) {

        strings.push('actual', `"${value}"`);
    }

    return strings.join(' ') + '.';
}


export function NaturalParameter(
    {
        value,
        valid,
        subject,
    } : Value<number> & Validatable & {subject ?: string}
) : string {

    return NaturalParameters(value, valid, subject);
}


namespace Natural {
    export const Parameters = NaturalParameters;
    export const Parameter = NaturalParameter;
}
export default Natural;
