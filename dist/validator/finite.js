import FiniteValidatable from "../validatable/finite";
import FiniteString from "../validatable/string/finite";
export default function Finite(message = FiniteString) {
    return function (value) {
        return FiniteValidatable(value, message);
    };
}
//# sourceMappingURL=finite.js.map