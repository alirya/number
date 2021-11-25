import NegativeMessage from "../assert/string/negative-parameter";
import NegativeParameters from "./negative-parameters";
export default function NegativeParameter({ message = NegativeMessage, value }) {
    return NegativeParameters(value, (value, valid) => message({ value, valid }));
}
//# sourceMappingURL=negative-parameter.js.map