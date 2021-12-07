import Validatable from "@dikac/t-validator/value/validatable";;
import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
import Inclusive from "../inclusive/inclusive";
import GreaterParameters from "./greater-parameters";
import Validator from "@dikac/t-validator/validator";
import Minimum from "../minimum/minimum";
import Dynamic from "@dikac/t-validator/message/function/validatable-parameter";
import GreaterValidatable from "../validatable/greater-parameters";
import StrictOmit from "@dikac/t-object/strict-omit";
import GreaterString from "../assert/string/greater-parameter";

export type GreaterArgument<MessageT> =
    Minimum &
    Inclusive &
    Partial<Message<Dynamic<number, MessageT, Inclusive & Minimum & Validatable<number>>>>

export default function GreaterParameter<MessageT>(
    {
        minimum,
        inclusive,
        message,
    } : Required<GreaterArgument<MessageT>>
) : Validator<number, number, boolean, boolean, GreaterValidatable<number, MessageT>>

export default function GreaterParameter<MessageT>(
    {
        minimum,
        inclusive,
    } : StrictOmit<GreaterArgument<MessageT>, 'message'>
) : Validator<number, number, boolean, boolean, GreaterValidatable<number, MessageT>>


export default function GreaterParameter<MessageType>(
    {
        minimum,
        inclusive,
        message = GreaterString,
    } : Minimum & Inclusive & Message<(result:Readonly<Value<number> & Inclusive & Minimum & Validatable>)=>MessageType|string>
) : Validator<number, number, boolean, boolean, GreaterValidatable<number, MessageType|string>>  {

    return GreaterParameters(
        minimum,
        inclusive,
        (value, valid, minimum, inclusive) => message({value, valid, minimum, inclusive})
    );
}
