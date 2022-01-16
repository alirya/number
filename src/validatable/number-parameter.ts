import Return from '@alirya/validator/validatable/simple';
import Value from '@alirya/value/value';
import Instance from '@alirya/validator/validatable/validatable';
import Dynamic from '@alirya/validator/message/function/validatable-parameter';
import StrictOmit from '@alirya/object/strict-omit';
import NumberMessage from '../assert/string/number-parameter';
import NumberParameters from './number-parameters';

export type PositiveArgument<Argument, MessageT> = Value<Argument> & {
    message ?: Dynamic<any, MessageT>
};

export default function NumberParameter<Argument, MessageT>(
    {
        value
    } : StrictOmit<PositiveArgument<Argument, MessageT>, 'message'>
) : Return<Argument, number, Readonly<Instance<Argument, MessageT>>>;

export default function NumberParameter<Argument, MessageT>(
    {
        message,
        value
    } : Readonly<PositiveArgument<Argument, MessageT>>
) : Return<Argument, number, Readonly<Instance<Argument, MessageT>>>;

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
