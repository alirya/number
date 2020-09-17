import AssertInfinite from "../assert/infinite";
import InfiniteError from "../assert/throwable/infinite";
export default function Infinite(value, error = InfiniteError) {
    AssertInfinite(value, error);
    return value;
}
//# sourceMappingURL=infinite.js.map