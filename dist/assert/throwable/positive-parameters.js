import PositiveType from "../string/positive-parameters";
export default function PositiveParameters(value, subject) {
    return new Error(PositiveType(value, false, subject));
}
//# sourceMappingURL=positive-parameters.js.map