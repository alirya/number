import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import IntegerParameters from "./integer-parameters";

export default function IntegerParameter(
    //value : number,
    //valid : boolean,
    //subject : string = '',
    {
        value,
        valid,
        subject,
    } : Value<number> & Validatable & {subject ?: string}
) : string {

    return IntegerParameters(value, valid, subject);
    //
    //
    // const strings : string[] = [];
    //
    // strings.push(subject);
    //
    // if(valid) {
    //
    //     strings.push('is');
    //
    // } else {
    //
    //     strings.push('must');
    // }
    //
    // strings.push('integer number');
    //
    // // const sentence = SentencesMust(valid, [subject]);
    // //
    // // sentence.expect = ['integer number'];
    // // sentence.comma.push('expect');
    //
    // if(!valid) {
    //
    //     strings.push('actual', `"${value}"`);
    // }
    //
    // return strings.join(' ') + '.';
}
