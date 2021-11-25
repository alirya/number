import GreaterThanMinimumValidatable from "../validatable/greater-than-minimum-parameter";
export default function GreaterThanMinimumParameter(message) {
    return function (value) {
        return new GreaterThanMinimumValidatable(value, message);
    };
}
//# sourceMappingURL=greater-than-minimum-parameter.js.map