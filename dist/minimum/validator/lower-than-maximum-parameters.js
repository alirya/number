import GreaterThanMinimumValidatable from "../validatable/lower-than-maximum-parameters";
export default function LowerThanMaximumParameters(message) {
    return function ({ minimum, maximum, inclusive }) {
        return new GreaterThanMinimumValidatable(minimum, maximum, inclusive, message);
    };
}
//# sourceMappingURL=lower-than-maximum-parameters.js.map