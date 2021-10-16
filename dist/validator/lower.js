import LowerValidatable from "../validatable/lower";
export default function Lower(maximum, inclusive, message) {
    return function (value) {
        return new LowerValidatable(value, maximum, inclusive, message);
    };
}
//# sourceMappingURL=lower.js.map