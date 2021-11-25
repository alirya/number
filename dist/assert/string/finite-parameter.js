import FiniteParameters from "./finite-parameters";
export default function FiniteParameter(
//value : number,
//valid : boolean,
//subject : string = '',
{ value, valid, subject, }) {
    return FiniteParameters(value, valid, subject);
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
    // strings.push('finite number');
    //
    // // const sentence = SentencesMust(valid, [subject]);
    // //
    // // sentence.expect = ['finite number'];
    // // sentence.comma.push('expect');
    //
    // if(!valid) {
    //
    //     strings.push('actual', `"${value}"`);
    // }
    //
    // return strings.join(' ') + '.';
}
//# sourceMappingURL=finite-parameter.js.map