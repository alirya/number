import CallbackParameters from "./callback-parameters";
import NegativeValidation from "../boolean/negative";
import NegativeMessage from "../assert/string/negative-parameters";
import Dynamic from "@alirya/validator/message/function/validatable-parameters";
import {IntegerType as NegativeType} from "./integer-parameters";

export type {NegativeType};

export default function NegativeParameters(
    number : number,
) : NegativeType<string>

export default function NegativeParameters<MessageT>(
    number : number,
    message : Dynamic<number, MessageT>
) : NegativeType<MessageT>

export default function NegativeParameters<MessageT>(
    number : number,
    message : Dynamic<number, MessageT|string> = NegativeMessage
) : NegativeType<MessageT|string> {

    return new CallbackParameters(number, NegativeValidation, message);
}
