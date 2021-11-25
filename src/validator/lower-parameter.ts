import Validatable from "@dikac/t-validator/value/dynamic";
import Message from "@dikac/t-message/message";
import Inclusive from "../inclusive/inclusive";
import LowerParameters from "./lower-parameters";
import Maximum from "../maximum/maximum";
import Validator from "@dikac/t-validator/validator";
import LowerValidatable from "../validatable/lower-parameters";
import Dynamic from "@dikac/t-validator/message/function/dynamic-parameter";
import StrictOmit from "@dikac/t-object/strict-omit";
import LowerString from "../assert/string/lower-parameter";

export type LowerArgument<MessageT> =
    Maximum &
    Inclusive &
    Partial<Message<Dynamic<number, MessageT, Inclusive & Maximum & Validatable<number>>>>

export default function LowerParameter<MessageT>(
    {
        maximum,
        inclusive,
        message,
    } : Required<LowerArgument<MessageT>>
) : Validator<number, number, boolean, boolean, LowerValidatable<number, MessageT>>

export default function LowerParameter<MessageT>(
    {
        maximum,
        inclusive,
    } : StrictOmit<LowerArgument<MessageT>, 'message'>
) : Validator<number, number, boolean, boolean, LowerValidatable<number, MessageT>>

export default function LowerParameter<MessageT>(
    {
        maximum,
        inclusive,
        message = LowerString,
    } : LowerArgument<MessageT|string>
) : Validator<number, number, boolean, boolean, LowerValidatable<number, MessageT|string>> {

    return LowerParameters(
        maximum,
        inclusive,
        (value, valid, maximum, inclusive) => message({value, valid, maximum, inclusive}
    ));
}
