/**
 * message for lower validation
 */
import Replace from "@dikac/t-array/replace";
import ReplaceParameters from "@dikac/t-array/replace-parameters";

export default function LowerParameters(
    value : number,
    valid : boolean,
    maximum : number,
    inclusive : boolean,
    subject : string = 'value'
) : string {

    const strings : string[] = [];

    strings.push(subject);


    if(valid) {

        strings.push(`is lower`);

    } else {

        strings.push(`must lower`);
    }

    if(inclusive) {

        strings.push(`or equal`);
    }

    strings.push('than', `"${maximum}"`);

    if(!valid) {

        ReplaceParameters(strings, 3 + (inclusive ? 1 : 0), value=>value+ ',')

        strings.push('actual', `"${value}"`)
    }

    return strings.join(' ') + '.'
}
