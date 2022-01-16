import ReplaceParameters from '@alirya/array/replace-parameters';

export default function NegativeParameters(
    value : number,
    valid : boolean,
    subject : string = 'value',
) : string {

    const strings : string[] = [];

    strings.push(subject);

    if(valid) {

        strings.push('is');

    } else {

        strings.push('must');
    }

    strings.push('negative number');


    if(!valid) {

        ReplaceParameters(strings, 2, value=>value+ ',');

        strings.push('actual', `"${value}"`);
    }

    return strings.join(' ') + '.';
}

