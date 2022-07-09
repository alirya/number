import {ReplaceParameters} from '@alirya/array/replace';
import Value from '@alirya/value/value';
import Validatable from '@alirya/validatable/validatable';

export function IntegerParameters(
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

    strings.push('integer number');

    if(!valid) {

        ReplaceParameters(strings, 2 , value => value+ ',');

        strings.push('actual', `"${value}"`);
    }

    return strings.join(' ') + '.';
}


export function IntegerParameter(
    {
        value,
        valid,
        subject,
    } : Value<number> & Validatable & {subject ?: string}
) : string {

    return IntegerParameters(value, valid, subject);

}


namespace Integer {
    export const Parameters = IntegerParameters;
    export const Parameter = IntegerParameter;
}
export default Integer;
