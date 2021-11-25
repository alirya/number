import GreaterThanMinimumValidatable from "../validatable/lower-than-maximum-parameter";
export default function LowerThanMaximumParameter(message) {
    return function (value) {
        return new GreaterThanMinimumValidatable(value, message);
    };
}
//# sourceMappingURL=lower-than-maximum-parameter.js.map