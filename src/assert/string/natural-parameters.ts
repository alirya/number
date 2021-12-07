export default function NaturalParameters(
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
