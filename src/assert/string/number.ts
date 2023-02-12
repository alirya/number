import Value from '@alirya/value/value.js';
import Validatable from '@alirya/validatable/validatable.js';
export function NumberParameters(
    value : unknown,
    valid : boolean,
    subject  = 'type',
    conversion : (value:unknown)=>string = value=>typeof value
) : string {

    const strings : string[] = [];

    strings.push(subject);

    if(valid) {

        strings.push('is');

    } else {

        strings.push('must');
    }

    strings.push('number');

    if(!valid) {

        strings[2] = strings[2] + ',';

        strings.push('actual', conversion(value));
    }

    return strings.join(' ') + '.';
}


export function NumberParameter(
    {
        value,
        valid,
        subject,
        conversion,
    } : Value &
        Validatable & {
        subject ?: string,
        conversion ?: (value:unknown)=>string
    }
) : string {

    return NumberParameters(value, valid, subject, conversion);
}


namespace Number {
    export const Parameters = NumberParameters;
    export const Parameter = NumberParameter;
}
export default Number;
