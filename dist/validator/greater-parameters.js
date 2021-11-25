import GreaterValidatable from "../validatable/greater-parameters";
import GreaterString from "../assert/string/greater-parameters";
export default function GreaterParameters(minimum, inclusive, 
//message : (result:Readonly<Value<number> & Inclusive & Minimum & Validatable>)=>MessageT,
message = GreaterString) {
    return function (value) {
        return new GreaterValidatable(value, minimum, inclusive, message);
    };
}
//# sourceMappingURL=greater-parameters.js.map