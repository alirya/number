import AssertNumber from "../assert/number";
import NumberError from "../assert/throwable/number-parameters";
export default function Number(value, error = NumberError) {
    AssertNumber(value, error);
    return value;
}
//# sourceMappingURL=number.js.map