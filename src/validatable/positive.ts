import {CallbackParameters} from '@alirya/validator/validatable/callback.js';
import PositiveValidation from '../boolean/positive.js';
import ValidatorValidatable from '@alirya/validator/validatable/validatable.js';
import {ValidatableParameters} from '@alirya/validator/message/function/validatable.js';
import PositiveString from '../assert/string/positive.js';
import Value from '@alirya/value/value.js';
import {ValidatableParameter} from '@alirya/validator/message/function/validatable.js';
import StrictOmit from '@alirya/object/strict-omit.js';

export function PositiveParameters<MessageT>(
    value : number,
) : Readonly<ValidatorValidatable<number, MessageT>>;

export function PositiveParameters<MessageT>(
    value : number,
    message : ValidatableParameters<number, MessageT>
) : Readonly<ValidatorValidatable<number, MessageT>>;
export function PositiveParameters<MessageT>(
    value : number,
    message : ValidatableParameters<number, MessageT|string> = PositiveString.Parameters
) : Readonly<ValidatorValidatable<number, MessageT>> {

    return CallbackParameters(value, PositiveValidation, message) as ValidatorValidatable<number, MessageT>;
}


export type PositiveArgument<MessageT> = Value<number> & {
    message ?: ValidatableParameter<number, MessageT>
};

export function PositiveParameter<MessageT>(
    {
        value
    } : StrictOmit<PositiveArgument<MessageT>, 'message'>
) : ValidatorValidatable<number, MessageT>;

export function PositiveParameter<MessageT>(
    {
        message,
        value
    } : Required<PositiveArgument<MessageT>>
) : ValidatorValidatable<number, MessageT>;
export function PositiveParameter<MessageT>(
    {
        message = PositiveString.Parameter,
        value
    } : PositiveArgument<MessageT|string>
) : ValidatorValidatable<number, MessageT|string> {

    return PositiveParameters(value, (value, valid) => message({value, valid}));
}


namespace Positive {
    export const Parameters = PositiveParameters;
    export const Parameter = PositiveParameter;
    export type Argument<MessageT> = PositiveArgument<MessageT>;
}
export default Positive;
