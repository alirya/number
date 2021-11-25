import Validator from "@dikac/t-validator/validator";
import GreaterValidatable from "../validatable/greater-parameters";
import Dynamic from "@dikac/t-validator/message/function/dynamic-parameters";
import GreaterString from "../assert/string/greater-parameters";

export default function GreaterParameters(
    minimum : number,
    inclusive : boolean,
    //message : (result:Readonly<Value<number> & Inclusive & Minimum & Validatable>)=>MessageT,
) : Validator<number, number, boolean, boolean, GreaterValidatable<number, string>>

export default function GreaterParameters<MessageT>(
    minimum : number,
    inclusive : boolean,
    //message : (result:Readonly<Value<number> & Inclusive & Minimum & Validatable>)=>MessageT,
    message : Dynamic<number, MessageT, [minimum:number, inclusive: boolean]>
) : Validator<number, number, boolean, boolean, GreaterValidatable<number, MessageT>>

export default function GreaterParameters<MessageT>(
    minimum : number,
    inclusive : boolean,
    //message : (result:Readonly<Value<number> & Inclusive & Minimum & Validatable>)=>MessageT,
    message : Dynamic<number, MessageT|string, [minimum:number, inclusive: boolean]> = GreaterString
) : Validator<number, number, boolean, boolean, GreaterValidatable<number, MessageT|string>> {

    return function (value) {

        return new GreaterValidatable(value, minimum, inclusive, message);

    } as Validator<number, number, boolean, boolean, GreaterValidatable<number, MessageT>>;

}
