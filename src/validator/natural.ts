import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
import NaturalValidatable from "../validatable/natural";
import SimpleValidatable from "@dikac/t-validator/validatable/simple";
import Instance from "@dikac/t-validator/validatable/validatable";
import ValueOf from "@dikac/t-value/value-of/value-of";
import ToString from "@dikac/t-string/to-string";

export default function Natural<MessageT>(
    message : (result:Readonly<Value<number> & Validatable>)=>MessageT
) : Validator<number, number, boolean, boolean, Readonly<Instance<number, MessageT>>> {

    return function (value) {

        return NaturalValidatable(value, message);
    } as Validator<number, number, boolean, boolean, Readonly<Instance<number, MessageT>>>

}
