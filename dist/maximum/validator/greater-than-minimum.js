import GreaterThanMinimumValidatable from "../validatable/greater-than-minimum";
export default function GreaterThanMinimum(message) {
    return function (value) {
        return new GreaterThanMinimumValidatable(value, message);
    };
}
//# sourceMappingURL=greater-than-minimum.js.map