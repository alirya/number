import IntegerValidatable from "../validatable/integer";
export default function Integer(message) {
    return function (value) {
        return IntegerValidatable(value, message);
    };
}
//# sourceMappingURL=integer.js.map