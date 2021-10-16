import GreaterValidatable from "../validatable/greater";
export default function Greater(minimum, inclusive, message) {
    return function (value) {
        return new GreaterValidatable(value, minimum, inclusive, message);
    };
}
//# sourceMappingURL=greater.js.map