import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
import LowerValidatable from "../validatable/lower";
import Function from "@dikac/t-function/function";
import Inclusive from "../inclusive/inclusive";
import Maximum from "../maximum/maximum";
import SimpleValidatable from "@dikac/t-validator/validatable/simple";

export default class Lower<MessageT>
    implements
        Validator<number, number, boolean, boolean, LowerValidatable<number, MessageT>>,
        Message<Function<[Readonly<Value<number> & Inclusive & Maximum & Validatable>], MessageT>>,
        Maximum,
        Inclusive
{

    constructor(
        public maximum : number,
        public inclusive : boolean,
        public message : Function<[Readonly<Value<number> & Inclusive & Maximum & Validatable>], MessageT>
    ) {
    }

    validate<Argument extends number>(value: Argument): SimpleValidatable<number, Argument, number, LowerValidatable<Argument, MessageT>> {

        return <SimpleValidatable<number, Argument, number, LowerValidatable<Argument, MessageT>>> new LowerValidatable<Argument, MessageT>(value, this.maximum, this.inclusive, this.message);
    }
}
