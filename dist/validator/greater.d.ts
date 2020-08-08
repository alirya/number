import Validator from "@dikac/t-validator/simple";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
import GreaterValidatable from "../validatable/greater";
import Function from "@dikac/t-function/function";
import Inclusive from "../inclusive/inclusive";
import Minimum from "../minimum/minimum";
import SimpleValidatable from "@dikac/t-validator/validatable/simple";
export default class Greater<MessageT> implements Validator<number, number, GreaterValidatable<number, MessageT>>, Message<Function<[Readonly<Value<number> & Inclusive & Minimum & Validatable>], MessageT>>, Minimum, Inclusive {
    minimum: number;
    inclusive: boolean;
    message: Function<[Readonly<Value<number> & Inclusive & Minimum & Validatable>], MessageT>;
    constructor(minimum: number, inclusive: boolean, message: Function<[Readonly<Value<number> & Inclusive & Minimum & Validatable>], MessageT>);
    validate<Argument extends number>(value: Argument): SimpleValidatable<number, Argument, number, GreaterValidatable<Argument, MessageT>>;
}
