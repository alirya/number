import Value from '@alirya/value/value';
import Validatable from '@alirya/validatable/validatable';
export function NaturalParameters(
    value : number,
    valid : boolean,
    subject : string = 'value'
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
