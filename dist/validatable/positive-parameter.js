import PositiveString from "../assert/string/positive-parameter";
import PositiveParameters from "./positive-parameters";
export default function PositiveParameter(
// value : number,
// message : Dynamic<number, MessageT|string> = PositiveString,
{ message = PositiveString, value }) {
    return PositiveParameters(value, (value, valid) => message({ value, valid }));
}
//# sourceMappingURL=positive-parameter.js.map