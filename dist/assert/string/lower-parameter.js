import LowerParameters from "./lower-parameters";
/**
 * message for lower validation
 */
export default function LowerParameter(
// valid : boolean,
// value : number,
// minimum : number,
// inclusive : boolean,
// subject : string = 'number',
{ valid, value, maximum, inclusive, subject, }) {
    return LowerParameters(value, valid, maximum, inclusive, subject);
    // const strings : string[] = [];
    //
    // strings.push(subject);
    //
    //
    // if(valid) {
    //
    //     strings.push(`is lower`);
    //
    // } else {
    //
    //     strings.push(`must lower`);
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
//# sourceMappingURL=lower-parameter.js.map