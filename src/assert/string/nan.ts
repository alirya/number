import {ReplaceParameters} from '@alirya/array/replace';
import Value from '@alirya/value/value';
import Validatable from '@alirya/validatable/validatable';

export function NanParameters(
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

    strings.push('NaN');

    if(!valid) {

        ReplaceParameters(strings, 2, value=>value+ ',');

        strings.push('actual', `"${value}"`);
    }

    return strings.join(' ') + '.';
}


export function NanParameter(
    {
        value,
        valid,
        subject,
    } : Value<number> & Validatable & {subject ?: string}
) : string {

    return NanParameters(value, valid, subject);
 }


namespace Nan {
    export const Parameters = NanParameters;
    export const Parameter = NanParameter;
}
export default Nan;
