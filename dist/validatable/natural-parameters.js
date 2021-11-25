import CallbackParameters from "./callback-parameters";
import NaturalValidation from "../boolean/natural";
import NaturalMessage from "../assert/string/natural-parameters";
export default function NaturalParameters(number, message = NaturalMessage) {
    return new CallbackParameters(number, NaturalValidation, message);
}
//# sourceMappingURL=natural-parameters.js.map