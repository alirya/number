import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Minimum from "../../minimum/minimum";
import Inclusive from "../../inclusive/inclusive";
import GreaterParameters from "./greater-parameters";

/**
 * message for greater validation
 */
export default function GreaterParameter(
    // valid : boolean,
    // value : number,
    // minimum : number,
    // inclusive : boolean,
    // subject : string = 'number',
    {
        valid,
        value,
        minimum,
        inclusive,
        subject,
    } : Value<number> & Validatable & Minimum & Inclusive & {subject ?: string}
) : string {

    return GreaterParameters(value, valid, minimum, inclusive, subject);

    // const strings : string[] = [];
    //
    // strings.push(subject);
    //
    //
    // if(valid) {
    //
    //     strings.push(`is greater`);
    //
    // } else {
    //
    //     strings.push(`must greater`);
    // }
    //
    // if(inclusive) {
    //
    //     strings.push(`or equal`);
    // }
    //
    // strings.push('than', `"${minimum}"`);
    //
    // if(!valid) {
    //
    //     strings.push('actual', `"${value}"`)
    // }
    //
    // return strings.join(' ') + '.'
}
