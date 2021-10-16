import GreaterThanMinimumValidatable from "../validatable/lower-than-maximum";
export default function LowerThanMaximum(message) {
    return function (value) {
        return new GreaterThanMinimumValidatable(value, message);
    };
}
//# sourceMappingURL=lower-than-maximum.js.map