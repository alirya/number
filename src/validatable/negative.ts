import {CallbackParameters} from './callback.js';
import NegativeValidation from '../boolean/negative.js';
import NegativeMessage from '../assert/string/negative.js';
import {ValidatableParameters} from '@alirya/validator/message/function/validatable.js';
import {IntegerReturn as NegativeReturn} from './integer.js';
import Validatable from '@alirya/validatable/validatable.js';
import Message from '@alirya/message/message.js';
import Value from '@alirya/value/value.js';
import ValueOf from '@alirya/value/value-of/value-of.js';
import ToString from '@alirya/string/to-string.js';
import StrictOmit from '@alirya/object/strict-omit.js';
import {PositiveArgument as NegativeArgument} from './positive.js';

export type {NegativeReturn};

export function NegativeParameters(
    number : number,
) : NegativeReturn<string>;

export function NegativeParameters<MessageT>(
    number : number,
    message : ValidatableParameters<number, MessageT>
) : NegativeReturn<MessageT>;

export function NegativeParameters<MessageT>(
    number : number,
    message : ValidatableParameters<number, MessageT|string> = NegativeMessage.Parameters
) : NegativeReturn<MessageT|string> {

    return new CallbackParameters(number, NegativeValidation, message);
}


export {NegativeArgument};

export function NegativeParameter<MessageT>(
    {
        value
    } : StrictOmit<NegativeArgument<MessageT>, 'message'>
) : Readonly<Validatable & Message<string> & Value<number>> & ValueOf<number> & ToString<[number|void]>;

export function NegativeParameter<MessageT>(
    {
        message,
        value
    } : Required<NegativeArgument<MessageT>>
) : Readonly<Validatable & Message<MessageT> & Value<number>> & ValueOf<number> & ToString<[number|void]>;

export function NegativeParameter<MessageT>(
    {
        message = NegativeMessage.Parameter,
        value
    } : NegativeArgument<MessageT|string>
) : Readonly<Validatable & Message<MessageT|string> & Value<number>> & ValueOf<number> & ToString<[number|void]> {

    return NegativeParameters(value, (value, valid) => message({value, valid}));
}


namespace Negative {
    export const Parameters = NegativeParameters;
    export const Parameter = NegativeParameter;
}
export default Negative;
