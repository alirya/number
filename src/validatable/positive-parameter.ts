import ValidatorValidatable from "@dikac/t-validator/validatable/validatable";
import Value from "@dikac/t-value/value";
import Dynamic from "@dikac/t-validator/message/function/validatable-parameter";
import PositiveString from "../assert/string/positive-parameter";
import StrictOmit from "@dikac/t-object/strict-omit";
import PositiveParameters from "./positive-parameters";

export type PositiveArgument<MessageT> = Value<number> & {
    message ?: Dynamic<number, MessageT>
};

export default function PositiveParameter<MessageT>(
    {
        value
    } : StrictOmit<PositiveArgument<MessageT>, 'message'>
) : ValidatorValidatable<number, MessageT>;

export default function PositiveParameter<MessageT>(
    {
        message,
        value
    } : Required<PositiveArgument<MessageT>>
) : ValidatorValidatable<number, MessageT>;
export default function PositiveParameter<MessageT>(
    {
        message = PositiveString,
        value
    } : PositiveArgument<MessageT|string>
) : ValidatorValidatable<number, MessageT|string> {

    return PositiveParameters(value, (value, valid) => message({value, valid}));
}
