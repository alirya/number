import {CallbackParameters} from './callback.js';
import InfiniteValidation from '../boolean/infinite.js';
import {IntegerReturn as InfiniteReturn} from './integer.js';
import InfiniteMessage from '../assert/string/infinite.js';
import {ValidatableParameters} from '@alirya/validator/message/function/validatable.js';
import StrictOmit from '@alirya/object/strict-omit.js';
import {IntegerArgument as InfiniteArgument} from './integer.js';

export {InfiniteReturn};

export function InfiniteParameters<MessageT>(
    number : number,
) : InfiniteReturn<string>;

export function InfiniteParameters<MessageT>(
    number : number,
    message : ValidatableParameters<number, MessageT>
) : InfiniteReturn<MessageT>;

export function InfiniteParameters<MessageT>(
    number : number,
    message : ValidatableParameters<number, MessageT|string> = InfiniteMessage.Parameters
) : InfiniteReturn<MessageT|string> {

    return new CallbackParameters(number, InfiniteValidation, message);
}


export {InfiniteArgument};

export function InfiniteParameter<MessageT>(
    {
        value
    } : StrictOmit<InfiniteArgument<MessageT>, 'message'>
) : InfiniteReturn<string>;

export function InfiniteParameter<MessageT>(
    {
        message,
        value
    } : Required<InfiniteArgument<MessageT>>
) : InfiniteReturn<MessageT>;

export function InfiniteParameter<MessageT>(
    {
        message = InfiniteMessage.Parameter,
        value
    } : InfiniteArgument<MessageT|string>
) : InfiniteReturn<MessageT|string> {

    return InfiniteParameters(value, (value, valid) => message({value, valid}));
}


namespace Infinite {
    export const Parameters = InfiniteParameters;
    export const Parameter = InfiniteParameter;
    export type Return<MessageT>  = InfiniteReturn<MessageT> ;
    export type Argument<MessageT>  = InfiniteArgument<MessageT> ;
}
export default Infinite;
