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

export default class Lower<MessageT>
    implements
        Validator<number, number, boolean, boolean, LowerValidatable<number, MessageT>>,
        Message<(result:Readonly<Value<number> & Inclusive & Maximum & Validatable>)=>MessageT>,
        Maximum,
        Inclusive
{

    constructor(
        public maximum : number,
        public inclusive : boolean,
        public message : (result:Readonly<Value<number> & Inclusive & Maximum & Validatable>)=>MessageT
    ) {
    }

    validate<Argument extends number>(value: Argument):
        SimpleValidatable<number, Argument, number, LowerValidatable<Argument, MessageT>>  & ValueOf<number> & ToString<number|void> {

        return <SimpleValidatable<number, Argument, number, LowerValidatable<Argument, MessageT>>  & ValueOf<number> & ToString<number|void>>
            new LowerValidatable<Argument, MessageT>(value, this.maximum, this.inclusive, this.message);
    }
}
