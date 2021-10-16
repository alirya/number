import NaturalValidatable from "../validatable/natural";
export default function Natural(message) {
    return function (value) {
        return NaturalValidatable(value, message);
    };
}
//# sourceMappingURL=natural.js.map