import Value from '@axiona/value/value.js';
import Validatable from '@axiona/validatable/validatable.js';

export function PositiveParameters(
    value : number,
    valid : boolean,
    subject  = 'value',
) : string {

    const strings : string[] = [];

    strings.push(subject);

    if(valid) {

        strings.push('is');

    } else {

        strings.push('must');
    }

    strings.push('positive number');


    if(!valid) {

        strings[2] = strings[2] + ',';

        strings.push('actual', `"${value}"`);
    }

    return strings.join(' ') + '.';
}



export function PositiveParameter(
    {
        value,
        valid,
        subject,
    } : Value<number> & Validatable & {subject ?: string}
) : string {

    return PositiveParameters(value, valid, subject);

}



namespace Positive {
    export const Parameters = PositiveParameters;
    export const Parameter = PositiveParameter;
}
export default Positive;
