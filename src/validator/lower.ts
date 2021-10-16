import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
import LowerValidatable from "../validatable/lower";
import Inclusive from "../inclusive/inclusive";
import Maximum from "../maximum/maximum";
import SimpleValidatable from "@dikac/t-validator/validatable/simple";
import ValueOf from "@dikac/t-value/value-of/value-of";
import ToString from "@dikac/t-string/to-string";

export default function Lower<MessageT> (
    maximum : number,
    inclusive : boolean,
    message : (result:Readonly<Value<number> & Inclusive & Maximum & Validatable>)=>MessageT
) : Validator<number, number, boolean, boolean, LowerValidatable<number, MessageT>> {

    return function (value) {

        return new LowerValidatable(value, maximum, inclusive, message);

    } as Validator<number, number, boolean, boolean, LowerValidatable<number, MessageT>>
}
