import {CallbackParameters} from '@axiona/validator/validatable/callback.js';
import NumberGuard from '../boolean/number.js';
import Return from '@axiona/validator/validatable/simple.js';
import Instance from '@axiona/validator/validatable/validatable.js';
import {ValidatableParameters, ValidatableParameter} from '@axiona/validator/message/function/validatable.js';
import NumberMessage from '../assert/string/number.js';
import Value from '@axiona/value/value.js';
import StrictOmit from '@axiona/object/strict-omit.js';

export function NumberParameters<Argument>(
    value : Argument,
) : Return<Argument, number, string>;

export function NumberParameters<Argument, MessageT>(
    value : Argument,
    message : ValidatableParameters<Argument, MessageT>
) : Return<Argument, number, MessageT>;

export function NumberParameters<Argument, MessageT>(
    value : Argument,
    message : ValidatableParameters<Argument, MessageT|string> = NumberMessage.Parameters
) : Return<Argument, number, MessageT|string> {

    return <Return<Argument, number, MessageT|string>> CallbackParameters(value, NumberGuard, message);
}


export type PositiveArgument<Argument, MessageT> = Value<Argument> & {
    message ?: ValidatableParameter<any, MessageT>
};

export function NumberParameter<Argument>(
    {
        value
    } : StrictOmit<PositiveArgument<Argument, string>, 'message'>
) : Return<Argument, number, string>;

export function NumberParameter<Argument, MessageT>(
    {
        message,
        value
    } : Readonly<PositiveArgument<Argument, MessageT>>
) : Return<Argument, number, MessageT>;

export function NumberParameter<Argument, MessageT>(
    {
        message = NumberMessage.Parameter,
        value
    } : PositiveArgument<Argument, MessageT|string>
) : Return<Argument, number, MessageT|string> {

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
