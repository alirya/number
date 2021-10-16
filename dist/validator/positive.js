import PositiveValidatable from "../validatable/positive";
export default function Positive(message) {
    return function (value) {
        return PositiveValidatable(value, message);
    };
}
//# sourceMappingURL=positive.js.map