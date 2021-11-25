import NumberString from "../assert/string/number-parameter";
import NumberParameters from "./number-parameters";
export default function NumberParameter(message = NumberString) {
    return NumberParameters((value, valid) => message({ value, valid }));
}
//# sourceMappingURL=number-parameter.js.map