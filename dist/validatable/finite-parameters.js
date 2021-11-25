import CallbackParameters from "./callback-parameters";
import FiniteMessage from "../assert/string/finite-parameters";
export default function FiniteParameters(number, message = FiniteMessage) {
    return new CallbackParameters(number, isFinite, message);
}
//# sourceMappingURL=finite-parameters.js.map