import Validatable from "@alirya/validator/value/validatable";;
import Message from "@alirya/message/message";
import Value from "@alirya/value/value";
import Inclusive from "../inclusive/inclusive";
import GreaterParameters from "./greater-parameters";
import Validator from "@alirya/validator/validator";
import Minimum from "../minimum/minimum";
import Dynamic from "@alirya/validator/message/function/validatable-parameter";
import GreaterValidatable from "../validatable/greater-parameters";
import StrictOmit from "@alirya/object/strict-omit";
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
