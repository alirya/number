import CallbackParameters from "./callback-parameters";
import InfiniteValidation from "../boolean/infinite";
import InfiniteMessage from "../assert/string/infinite-parameters";
export default function InfiniteParameters(number, message = InfiniteMessage) {
    return new CallbackParameters(number, InfiniteValidation, message);
}
//# sourceMappingURL=infinite-parameters.js.map