import ReplaceParameters from "@alirya/array/replace-parameters";

/**
 * message for greater validation
 */
export default function GreaterParameters(
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

        ReplaceParameters(strings, 3 + (inclusive ? 1 : 0), value=>value+ ',')

        strings.push('actual', `"${value}"`)
    }

    return strings.join(' ') + '.'
}
