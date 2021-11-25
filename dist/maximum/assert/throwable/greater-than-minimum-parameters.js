import LowerThanMaximumString from "../../string/greater-than-minimum-parameters";
export default function GreaterThanMinimumParameters(
// object : Readonly<Minimum & Maximum & Inclusive>,
maximum, minimum, inclusive) {
    return new Error(LowerThanMaximumString(maximum, false, minimum, inclusive));
}
//# sourceMappingURL=greater-than-minimum-parameters.js.map