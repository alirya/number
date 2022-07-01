import ReplaceParameters from '@alirya/array/replace-parameters';
import Value from '@alirya/value/value';
import Validatable from '@alirya/validatable/validatable';

export function InfiniteParameters(
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

    strings.push('infinite number');


    if(!valid) {

        ReplaceParameters(strings, 2 , value => value+ ',');

        strings.push('actual', `"${value}"`);
    }

    return strings.join(' ') + '.';
}


export function InfiniteParameter(
    {
        value,
        valid,
        subject,
    } : Value<number> & Validatable & {subject ?: string}
) : string {

    return InfiniteParameters(value, valid, subject);
}


namespace Infinite {
    export const Parameters = InfiniteParameters;
    export const Parameter = InfiniteParameter;
}
export default Infinite;
