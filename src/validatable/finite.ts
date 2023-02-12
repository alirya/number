import {CallbackParameters} from './callback.js';
import FiniteMessage from '../assert/string/finite.js';
import {ValidatableParameters} from '@alirya/validator/message/function/validatable.js';
import {IntegerReturn as FiniteReturn} from './integer.js';
import StrictOmit from '@alirya/object/strict-omit.js';
import {IntegerArgument as FiniteArgument} from './integer.js';

export {FiniteReturn};

export function FiniteParameters<MessageT>(
    number : number,
) : FiniteReturn<string>;

export function FiniteParameters<MessageT>(
    number : number,
    message : ValidatableParameters<number, MessageT>
) : FiniteReturn<MessageT>;

export function FiniteParameters<MessageT>(
    number : number,
    message : ValidatableParameters<number, MessageT|string> = FiniteMessage.Parameters
) : FiniteReturn<MessageT|string> {

    return new CallbackParameters(number, isFinite, message);
}


export {FiniteArgument};

export function FiniteParameter<MessageT>(
    {
        value
    } : StrictOmit<FiniteArgument<MessageT>, 'message'>
) : FiniteReturn<string>;

export function FiniteParameter<MessageT>(
    {
        message,
        value
    } : Required<FiniteArgument<MessageT>>
) : FiniteReturn<MessageT>;

export function FiniteParameter<MessageT>(
    {
        message = FiniteMessage.Parameter,
        value
    } : FiniteArgument<MessageT|string>
) : FiniteReturn<MessageT|string> {

    return FiniteParameters(value, (value, valid) => message({value, valid}));
}


namespace Finite {
    export const Parameters = FiniteParameters;
    export const Parameter = FiniteParameter;
    export type Return<MessageT> = FiniteReturn<MessageT>;
    export type Argument<MessageT> = FiniteArgument<MessageT>;
}
export default Finite;
