import {CallbackParameters} from '@alirya/validator/validatable/callback';
import NumericGuard from '../boolean/numeric';
import Return from '@alirya/validator/validatable/simple';
import Instance from '@alirya/validator/validatable/validatable';
import {ValidatableParameters, ValidatableParameter} from '@alirya/validator/message/function/validatable';
import NumericMessage from '../assert/string/numeric';
import Value from '@alirya/value/value';
import StrictOmit from '@alirya/object/strict-omit';

export function NumericParameters<Argument>(
    value : Argument,
) : Return<Argument, string|number, Readonly<Instance<Argument, string>>>;

export function NumericParameters<Argument, MessageT>(
    value : Argument,
    message : ValidatableParameters<Argument, MessageT>
) : Return<Argument, string|number, Readonly<Instance<Argument, MessageT>>>;

export function NumericParameters<Argument, MessageT>(
    value : Argument,
    message : ValidatableParameters<Argument, MessageT|string> = NumericMessage.Parameters
) : Return<Argument, string|number, Readonly<Instance<Argument, MessageT>>> {

    return <Return<Argument, string|number, Readonly<Instance<Argument, MessageT>>>> CallbackParameters(value, NumericGuard, message);
}


export type PositiveArgument<Argument, MessageT> = Value<Argument> & {
    message ?: ValidatableParameter<any, MessageT>
};

export function NumericParameter<Argument, MessageT>(
    {
        value
    } : StrictOmit<PositiveArgument<Argument, MessageT>, 'message'>
) : Return<Argument, number|string, Readonly<Instance<Argument, MessageT>>>;

export function NumericParameter<Argument, MessageT>(
    {
        message,
        value
    } : Readonly<PositiveArgument<Argument, MessageT>>
) : Return<Argument, number|string, Readonly<Instance<Argument, MessageT>>>;

export function NumericParameter<Argument, MessageT>(
    {
        message = NumericMessage.Parameter,
        value
    } : PositiveArgument<Argument, MessageT|string>
) : Return<Argument, number|string, Readonly<Instance<Argument, MessageT|string>>> {

    return NumericParameters(
        value,
        (value, valid) => message({value, valid})
    );
}


namespace Numeric {
    export const Parameters = NumericParameters;
    export const Parameter = NumericParameter;
}
export default Numeric;
