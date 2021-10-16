import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
import FiniteValidatable from "../validatable/finite";
import Instance from "@dikac/t-validator/validatable/validatable";
import SimpleValidatable from "@dikac/t-validator/validatable/simple";
import ValueOf from "@dikac/t-value/value-of/value-of";
import ToString from "@dikac/t-string/to-string";
import FiniteString from "../validatable/string/finite";

export default function Finite()
    : Validator<number, number, boolean, boolean, Readonly<Instance<number, string>>>;

export default function Finite<MessageType>(
    message : (result:Readonly<Value<number> & Validatable>)=>MessageType
) : Validator<number, number, boolean, boolean, Readonly<Instance<number, MessageType>>>;

export default function Finite<MessageType>(
    message = FiniteString
) : Validator<number, number, boolean, boolean, Readonly<Instance<number, MessageType|string>>> {

    return function (value) {

        return FiniteValidatable(value, message);

    } as Validator<number, number, boolean, boolean, Readonly<Instance<number, MessageType|string>>>
}
