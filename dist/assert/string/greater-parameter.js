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
{ valid, value, minimum, inclusive, subject, }) {
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
//# sourceMappingURL=greater-parameter.js.map