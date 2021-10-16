import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
import IntegerValidatable from "../validatable/integer";
import Instance from "@dikac/t-validator/validatable/validatable";
import SimpleValidatable from "@dikac/t-validator/validatable/simple";
import ValueOf from "@dikac/t-value/value-of/value-of";
import ToString from "@dikac/t-string/to-string";

export default function Integer<MessageT>(
    message : (result:Readonly<Value<number>> & Readonly<Validatable>)=>MessageT
) : Validator<number, number, boolean, boolean, Readonly<Instance<number, MessageT>>> {

    return function (value) {

        return IntegerValidatable(value, message);

    } as Validator<number, number, boolean, boolean, Readonly<Instance<number, MessageT>>>
}
