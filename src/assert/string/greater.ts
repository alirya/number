import {ReplaceParameters} from '@alirya/array/replace';
import Value from '@alirya/value/value';
import Validatable from '@alirya/validatable/validatable';
import Minimum from '../../minimum/minimum';
import Inclusive from '../../inclusive/inclusive';
/**
 * message for greater validation
 */
export function GreaterParameters(
    value : number,
    valid : boolean,
    minimum : number,
    inclusive : boolean,
    subject : string = 'value'
) : string {

    const strings : string[] = [];

    strings.push(subject);


    if(valid) {

        strings.push(`is greater`);

    } else {

        strings.push(`must greater`);
    }

    if(inclusive) {

        strings.push(`or equal`);
    }

    strings.push('than', `"${minimum}"`);

    if(!valid) {

        ReplaceParameters(strings, 3 + (inclusive ? 1 : 0), value=>value+ ',');

        strings.push('actual', `"${value}"`);
    }

    return strings.join(' ') + '.';
}



/**
 * message for greater validation
 */
export function GreaterParameter(
    {
        valid,
        value,
        minimum,
        inclusive,
        subject,
    } : Value<number> & Validatable & Minimum & Inclusive & {subject ?: string}
) : string {

    return GreaterParameters(value, valid, minimum, inclusive, subject);

}


namespace Greater {
    export const Parameters = GreaterParameters;
    export const Parameter = GreaterParameter;
}
export default Greater;
