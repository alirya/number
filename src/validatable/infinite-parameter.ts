import {IntegerType as InfiniteType} from "./integer-parameters";
import StrictOmit from "@alirya/object/strict-omit";
import InfiniteMessage from "../assert/string/infinite-parameter";
import {IntegerArgument as InfiniteArgument} from "./integer-parameter";
import InfiniteParameters from "./infinite-parameters";

export {InfiniteArgument};

export default function InfiniteParameter<MessageT>(
    {
        value
    } : StrictOmit<InfiniteArgument<MessageT>, 'message'>
) : InfiniteType<string>

export default function InfiniteParameter<MessageT>(
    {
        message,
        value
    } : Required<InfiniteArgument<MessageT>>
) : InfiniteType<MessageT>

export default function InfiniteParameter<MessageT>(
    {
        message = InfiniteMessage,
        value
    } : InfiniteArgument<MessageT|string>
) : InfiniteType<MessageT|string> {

    return InfiniteParameters(value, (value, valid) => message({value, valid}));
}
