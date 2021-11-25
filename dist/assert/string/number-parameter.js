import NumberParameters from "./number-parameters";
export default function NumberParameter(
// value : unknown,
// valid : boolean,
// subject : string = 'type',
// conversion : (value:unknown)=>string = value=>typeof value,
{ value, valid, subject, conversion, }) {
    return NumberParameters(value, valid, subject, conversion);
}
//# sourceMappingURL=number-parameter.js.map