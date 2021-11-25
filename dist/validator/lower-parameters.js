import LowerValidatable from "../validatable/lower-parameters";
import LowerString from "../assert/string/lower-parameters";
export default function LowerParameters(maximum, inclusive, 
// message : (result:Readonly<Value<number> & Inclusive & Maximum & Validatable>)=>MessageT,
message = LowerString) {
    return function (value) {
        return new LowerValidatable(value, maximum, inclusive, message);
    };
}
//# sourceMappingURL=lower-parameters.js.map