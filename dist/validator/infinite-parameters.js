import InfiniteValidatable from "../validatable/infinite-parameters";
import InfiniteString from "../assert/string/infinite-parameters";
export default function InfiniteParameters(message = InfiniteString) {
    return function (value) {
        return InfiniteValidatable(value, message);
    };
}
//# sourceMappingURL=infinite-parameters.js.map