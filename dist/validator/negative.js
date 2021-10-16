import NegativeValidatable from "../validatable/negative";
export default function Negative(message) {
    return function (value) {
        return NegativeValidatable(value, message);
    };
}
//# sourceMappingURL=negative.js.map