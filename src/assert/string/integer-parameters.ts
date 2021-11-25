import ReplaceParameters from "@dikac/t-array/replace-parameters";

export default function IntegerParameters(
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

    // const sentence = SentencesMust(valid, [subject]);
    //
    // sentence.expect = ['integer number'];
    // sentence.comma.push('expect');

    if(!valid) {

        ReplaceParameters(strings, 2 , value => value+ ',')

        strings.push('actual', `"${value}"`);
    }

    return strings.join(' ') + '.';
}
