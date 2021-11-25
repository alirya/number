import PositiveString from "../assert/string/positive-parameter";
import PositiveParameters from "./positive-parameters";
export default function PositiveParameter(message = PositiveString) {
    return PositiveParameters((value, valid) => message({ value, valid }));
}
//# sourceMappingURL=positive-parameter.js.map