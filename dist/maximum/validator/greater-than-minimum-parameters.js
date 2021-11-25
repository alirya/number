import GreaterThanMinimumValidatable from "../validatable/greater-than-minimum-parameters";
export default function GreaterThanMinimumParameters(
// message : (result:Readonly<Maximum & Inclusive & Minimum & Validatable>)=>MessageT
message) {
    return function ({ minimum, maximum, inclusive }) {
        return new GreaterThanMinimumValidatable(minimum, maximum, inclusive, message);
    };
}
//# sourceMappingURL=greater-than-minimum-parameters.js.map