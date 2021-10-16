import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
import GreaterValidatable from "../validatable/greater";
import Inclusive from "../inclusive/inclusive";
import Minimum from "../minimum/minimum";
import SimpleValidatable from "@dikac/t-validator/validatable/simple";
import ValueOf from "@dikac/t-value/value-of/value-of";
import ToString from "@dikac/t-string/to-string";

export default function Greater<MessageT>(
    minimum : number,
    inclusive : boolean,
    message : (result:Readonly<Value<number> & Inclusive & Minimum & Validatable>)=>MessageT
) : Validator<number, number, boolean, boolean, GreaterValidatable<number, MessageT>> {

    return function (value) {

        return new GreaterValidatable(value, minimum, inclusive, message);

    } as Validator<number, number, boolean, boolean, GreaterValidatable<number, MessageT>>;

}
