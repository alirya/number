import ReplaceParameters from '@alirya/array/replace-parameters';

export default function FiniteParameters(
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

    strings.push('finite number');

    if(!valid) {

        ReplaceParameters(strings, 2 , value => value+ ',');

        strings.push('actual', `"${value}"`);
    }

    return strings.join(' ') + '.';
}
