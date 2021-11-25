import NumberMessage from "../assert/string/number-parameter";
import NumberParameters from "./number-parameters";
export default function NumberParameter(
// value : Argument,
// message : Dynamic<Argument, MessageT>,
{ message = NumberMessage, value }) {
    return NumberParameters(value, (value, valid) => message({ value, valid }));
}
//# sourceMappingURL=number-parameter.js.map