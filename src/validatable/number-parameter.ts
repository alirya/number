import Return from "@dikac/t-validator/validatable/simple";
import Value from "@dikac/t-value/value";
import Instance from "@dikac/t-validator/validatable/validatable";
import Dynamic from "@dikac/t-validator/message/function/validatable-parameter";
import StrictOmit from "@dikac/t-object/strict-omit";
import NumberMessage from "../assert/string/number-parameter";
import NumberParameters from "./number-parameters";

export type PositiveArgument<Argument, MessageT> = Value<Argument> & {
    message ?: Dynamic<any, MessageT>
};

export default function NumberParameter<Argument, MessageT>(
    {
        value
    } : StrictOmit<PositiveArgument<Argument, MessageT>, 'message'>
) : Return<Argument, number, Readonly<Instance<Argument, MessageT>>>

export default function NumberParameter<Argument, MessageT>(
    {
        message,
        value
    } : Readonly<PositiveArgument<Argument, MessageT>>
) : Return<Argument, number, Readonly<Instance<Argument, MessageT>>>

export default function NumberParameter<Argument, MessageT>(
    {
        message = NumberMessage,
        value
    } : PositiveArgument<Argument, MessageT|string>
) : Return<Argument, number, Readonly<Instance<Argument, MessageT|string>>> {

    return NumberParameters(
        value,
        (value, valid) => message({value, valid})
    );
}
