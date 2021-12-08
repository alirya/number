import NaturalMessage from "../assert/string/natural-parameter";
import {PositiveArgument as NaturalArgument} from "./positive-parameter";
import StrictOmit from "@dikac/t-object/strict-omit";
import {NegativeType as NaturalType} from "./negative-parameters";
import NaturalParameters from "./natural-parameters";

export {NaturalArgument};

export default function NaturalParameter<MessageT>(
    {
        value
    } : StrictOmit<NaturalArgument<MessageT>, 'message'>
) : NaturalType<string>

export default function NaturalParameter<MessageT>(
    {
        message,
        value
    } : Required<NaturalArgument<MessageT>>
) : NaturalType<MessageT>

export default function NaturalParameter<MessageT>(
    {
        message = NaturalMessage,
        value
    } : NaturalArgument<MessageT|string>
) : NaturalType<MessageT|string> {

    return NaturalParameters(value, (value, valid) => message({value, valid}))
}
