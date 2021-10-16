import NumberValidatable from "../validatable/number";
export default function Number(message) {
    return function (value) {
        return NumberValidatable(value, message);
    };
}
//# sourceMappingURL=number.js.map