import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
import PositiveValidatable from "../validatable/positive";
import SimpleValidatable from "@dikac/t-validator/validatable/simple";
import Instance from "@dikac/t-validator/validatable/validatable";
import ValueOf from "@dikac/t-value/value-of/value-of";
import ToString from "@dikac/t-string/to-string";

export default function Positive<MessageT>(
    message : (result:Readonly<Value<number> & Validatable>)=>MessageT
) : Validator<number, number, boolean, boolean, Readonly<Instance<number, MessageT>>> {

    return function <Argument extends number>(value: Argument) {

        return PositiveValidatable(value, message);

    } as Validator<number, number, boolean, boolean, Readonly<Instance<number, MessageT>>>
}
