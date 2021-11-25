;
import GreaterParameters from "./greater-parameters";
import GreaterString from "../assert/string/greater-parameter";
export default function GreaterParameter({ minimum, inclusive, message = GreaterString, }) {
    return GreaterParameters(minimum, inclusive, (value, valid, minimum, inclusive) => message({ value, valid, minimum, inclusive }));
}
//# sourceMappingURL=greater-parameter.js.map