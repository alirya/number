import {CallbackParameters} from './callback.js';
import NaturalValidation from '../boolean/natural.js';
import {ValidatableParameters} from '@alirya/validator/message/function/validatable.js';
import NaturalMessage from '../assert/string/natural.js';
import {IntegerReturn as NaturalReturn} from './integer.js';
import {PositiveArgument as NaturalArgument} from './positive.js';
import StrictOmit from '@alirya/object/strict-omit.js';

export type {NaturalReturn};

export function NaturalParameters(
    number : number,
) : NaturalReturn<string>;

export function NaturalParameters<MessageT>(
    number : number,
    message : ValidatableParameters<number, MessageT>
) : NaturalReturn<MessageT>;

export function NaturalParameters<MessageT>(
    number : number,
    message : ValidatableParameters<number, MessageT|string> = NaturalMessage.Parameters
) : NaturalReturn<MessageT|string> {

    return new CallbackParameters(number, NaturalValidation, message);
}


export {NaturalArgument};

export function NaturalParameter<MessageT>(
    {
        value
    } : StrictOmit<NaturalArgument<MessageT>, 'message'>
) : NaturalReturn<string>;

export function NaturalParameter<MessageT>(
    {
        message,
        value
    } : Required<NaturalArgument<MessageT>>
) : NaturalReturn<MessageT>;

export function NaturalParameter<MessageT>(
    {
        message = NaturalMessage.Parameter,
        value
    } : NaturalArgument<MessageT|string>
) : NaturalReturn<MessageT|string> {

    return NaturalParameters(value, (value, valid) => message({value, valid}));
}


namespace Natural {
    export const Parameters = NaturalParameters;
    export const Parameter = NaturalParameter;
    export type Return<MessageT> = NaturalReturn<MessageT>;
    export type Argument<MessageT> = NaturalArgument<MessageT>;
}
export default Natural;
