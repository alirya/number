import InfiniteString from "../assert/string/infinite-parameter";
import InfiniteParameters from "./infinite-parameters";
export default function InfiniteParameter(message = InfiniteString) {
    return InfiniteParameters((value, valid) => message({ value, valid }));
}
//# sourceMappingURL=infinite-parameter.js.map