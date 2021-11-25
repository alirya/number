import PositiveString from "../assert/string/positive-parameter";
import NegativeParameters from "./negative-parameters";
export default function NegativeParameter(message = PositiveString) {
    return NegativeParameters((value, valid) => message({ value, valid }));
}
//# sourceMappingURL=negative-parameter.js.map