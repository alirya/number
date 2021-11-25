import InfiniteMessage from "../assert/string/infinite-parameter";
import InfiniteParameters from "./infinite-parameters";
export default function InfiniteParameter({ message = InfiniteMessage, value }) {
    return InfiniteParameters(value, (value, valid) => message({ value, valid }));
}
//# sourceMappingURL=infinite-parameter.js.map