import FiniteString from "../assert/string/finite-parameter";
import FiniteParameters from "./finite-parameters";
export default function FiniteParameter(message = FiniteString) {
    return FiniteParameters((value, valid) => message({ value, valid }));
}
//# sourceMappingURL=finite-parameter.js.map