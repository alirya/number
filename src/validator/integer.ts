import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
import IntegerValidatable from "../validatable/integer";
import Instance from "@dikac/t-validator/validatable/validatable";
import SimpleValidatable from "@dikac/t-validator/validatable/simple";

export default class Integer<MessageT>
    implements
        Validator<number, number, boolean, boolean, Readonly<Instance<number, MessageT>>>,
        Message<(result:Readonly<Value<number>> & Readonly<Validatable>)=>MessageT>
{

    constructor(
       public message : (result:Readonly<Value<number>> & Readonly<Validatable>)=>MessageT
    ) {
    }

    validate<Argument extends number>(value: Argument): SimpleValidatable<number, Argument, number, Readonly<Instance<number, MessageT>>> {

        return <SimpleValidatable<number, Argument, number, Readonly<Instance<number, MessageT>>>> IntegerValidatable(value, this.message);
    }
}
