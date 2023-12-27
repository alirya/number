import {ReplaceParameters} from '@axiona/array/replace.js';
import Value from '@axiona/value/value.js';
import Validatable from '@axiona/validatable/validatable.js';

export function NanParameters(
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
