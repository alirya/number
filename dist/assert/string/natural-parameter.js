import NaturalParameters from "./natural-parameters";
export default function NaturalParameter(
//value : number,
//valid : boolean,
//subject : string = '',
{ value, valid, subject, }) {
    return NaturalParameters(value, valid, subject);
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
    // strings.push('natural number');
    //
    // // const sentence = SentencesMust(valid, [subject]);
    // //
    // // sentence.expect = ['natural number'];
    // // sentence.comma.push('expect');
    //
    // if(!valid) {
    //
    //     strings.push('actual', `"${value}"`);
    // }
    //
    // return strings.join(' ') + '.';
}
//# sourceMappingURL=natural-parameter.js.map