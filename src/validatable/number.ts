import {CallbackParameters} from '@alirya/validator/validatable/callback';
import NumberGuard from '../boolean/number';
import Return from '@alirya/validator/validatable/simple';
import Instance from '@alirya/validator/validatable/validatable';
import {ValidatableParameters, ValidatableParameter} from '@alirya/validator/message/function/validatable';
import NumberMessage from '../assert/string/number';
import Value from '@alirya/value/value';
import StrictOmit from '@alirya/object/strict-omit';

export function NumberParameters<Argument>(
    value : Argument,
) : Return<Argument, number, Readonly<Instance<Argument, string>>>;

export function NumberParameters<Argument, MessageT>(
    value : Argument,
    message : ValidatableParameters<Argument, MessageT>
) : Return<Argument, number, Readonly<Instance<Argument, MessageT>>>;

export function NumberParameters<Argument, MessageT>(
    value : Argument,
    message : ValidatableParameters<Argument, MessageT|string> = NumberMessage.Parameters
) : Return<Argument, number, Readonly<Instance<Argument, MessageT>>> {

    return <Return<Argument, number, Readonly<Instance<Argument, MessageT>>>> CallbackParameters(value, NumberGuard, message);
}


export type PositiveArgument<Argument, MessageT> = Value<Argument> & {
    message ?: ValidatableParameter<any, MessageT>
};

export function NumberParameter<Argument, MessageT>(
    {
        value
    } : StrictOmit<PositiveArgument<Argument, MessageT>, 'message'>
) : Return<Argument, number, Readonly<Instance<Argument, MessageT>>>;

export function NumberParameter<Argument, MessageT>(
    {
        message,
        value
    } : Readonly<PositiveArgument<Argument, MessageT>>
) : Return<Argument, number, Readonly<Instance<Argument, MessageT>>>;

export function NumberParameter<Argument, MessageT>(
    {
        message = NumberMessage.Parameter,
        value
    } : PositiveArgument<Argument, MessageT|string>
) : Return<Argument, number, Readonly<Instance<Argument, MessageT|string>>> {

    return NumberParameters(
        value,
        (value, valid) => message({value, valid})
    );
}


namespace Number {
    export const Parameters = NumberParameters;
    export const Parameter = NumberParameter;
}
export default Number;
