import AssertFinite from "../assert/finite";
import FiniteError from "../assert/throwable/finite";
export default function Finite(value, error = FiniteError) {
    AssertFinite(value, error);
    return value;
}
//# sourceMappingURL=finite.js.map