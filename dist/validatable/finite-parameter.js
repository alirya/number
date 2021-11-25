import FiniteMessage from "../assert/string/finite-parameter";
import FiniteParameters from "./finite-parameters";
export default function FiniteParameter({ message = FiniteMessage, value }) {
    return FiniteParameters(value, (value, valid) => message({ value, valid }));
}
//# sourceMappingURL=finite-parameter.js.map