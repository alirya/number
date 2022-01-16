import CallbackParameters from "./callback-parameters";
import {IntegerType as FiniteType} from "./integer-parameters";
import FiniteMessage from "../assert/string/finite-parameters";
import Dynamic from "@alirya/validator/message/function/validatable-parameters";

export {FiniteType};

export default function FiniteParameters<MessageT>(
    number : number,
) : FiniteType<string>

export default function FiniteParameters<MessageT>(
    number : number,
    message : Dynamic<number, MessageT>
) : FiniteType<MessageT>

export default function FiniteParameters<MessageT>(
    number : number,
    message : Dynamic<number, MessageT|string> = FiniteMessage
) : FiniteType<MessageT|string> {

    return new CallbackParameters(number, isFinite, message);
}
