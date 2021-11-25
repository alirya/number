import {IntegerType as FiniteType} from "./integer-parameters";
import StrictOmit from "@dikac/t-object/strict-omit";
import FiniteMessage from "../assert/string/finite-parameter";
import {IntegerArgument as FiniteArgument} from "./integer-parameter";
import FiniteParameters from "./finite-parameters";

export {FiniteArgument};

export default function FiniteParameter<MessageT>(
    {
        value
    } : StrictOmit<FiniteArgument<MessageT>, 'message'>
) : FiniteType<string>

export default function FiniteParameter<MessageT>(
    {
        message,
        value
    } : Required<FiniteArgument<MessageT>>
) : FiniteType<MessageT>

export default function FiniteParameter<MessageT>(
    {
        message = FiniteMessage,
        value
    } : FiniteArgument<MessageT|string>
) : FiniteType<MessageT|string> {

    return FiniteParameters(value, (value, valid) => message({value, valid}));
}
