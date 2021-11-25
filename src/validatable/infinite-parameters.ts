import CallbackParameters from "./callback-parameters";
import InfiniteValidation from "../boolean/infinite";
import {IntegerType as InfiniteType} from "./integer-parameters";
import InfiniteMessage from "../assert/string/infinite-parameters";
import Dynamic from "@dikac/t-validator/message/function/dynamic-parameters";

export {InfiniteType};

export default function InfiniteParameters<MessageT>(
    number : number,
) : InfiniteType<string>

export default function InfiniteParameters<MessageT>(
    number : number,
    message : Dynamic<number, MessageT>
) : InfiniteType<MessageT>

export default function InfiniteParameters<MessageT>(
    number : number,
    message : Dynamic<number, MessageT|string> = InfiniteMessage
) : InfiniteType<MessageT|string> {

    return new CallbackParameters(number, InfiniteValidation, message);
}
