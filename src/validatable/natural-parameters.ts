import CallbackParameters from "./callback-parameters";
import NaturalValidation from "../boolean/natural";
import Dynamic from "@alirya/validator/message/function/validatable-parameters";
import NaturalMessage from "../assert/string/natural-parameters";
import {IntegerType as NaturalType} from "./integer-parameters";

export type {NaturalType};

export default function NaturalParameters(
    number : number,
) : NaturalType<string>

export default function NaturalParameters<MessageT>(
    number : number,
    message : Dynamic<number, MessageT>
) : NaturalType<MessageT>

export default function NaturalParameters<MessageT>(
    number : number,
    message : Dynamic<number, MessageT|string> = NaturalMessage
) : NaturalType<MessageT|string> {

    return new CallbackParameters(number, NaturalValidation, message);
}
