import {CallbackParameters} from './callback.js';
import IntegerValidation from '../boolean/integer.js';
import Validatable from '@axiona/validatable/validatable.js';
import Message from '@axiona/message/message.js';
import Value from '@axiona/value/value.js';
import ValueOf from '@axiona/value/value-of/value-of.js';
import ToString from '@axiona/string/to-string.js';
import {ValidatableParameters} from '@axiona/validator/message/function/validatable.js';
import IntegerMessage from '../assert/string/integer.js';
import {PositiveArgument as IntegerArgument} from './positive.js';
import StrictOmit from '@axiona/object/strict-omit.js';
import NaturalMessage from '../assert/string/natural.js';

export type IntegerReturn<MessageT> =
    Readonly<
        Validatable &
        Message<MessageT> &
        Value<number>
    > &
    ValueOf<number> &
    ToString<[number|void]>;

export function IntegerParameters(
    number : number,
) : IntegerReturn<string>;

export function IntegerParameters<MessageT>(
    number : number,
    message : ValidatableParameters<number, MessageT>
) : IntegerReturn<MessageT>;

export function IntegerParameters<MessageT>(
    number : number,
    message : ValidatableParameters<number, MessageT|string> = IntegerMessage.Parameters
) : IntegerReturn<MessageT|string> {

    return new CallbackParameters(number, IntegerValidation, message);
}


export {IntegerArgument};

export function IntegerParameter(
    {
        value
    } : StrictOmit<IntegerArgument<unknown>, 'message'>
) : IntegerReturn<string>;

export function IntegerParameter<MessageT>(
    {
        message,
        value
    } : IntegerReturn<MessageT>
) : Readonly<Validatable & Message<MessageT> & Value<number>> & ValueOf<number> & ToString<[number|void]>;

export function IntegerParameter<MessageT>(
    {
        message = NaturalMessage.Parameter,
        value
    } : IntegerArgument<MessageT|string>
) : IntegerReturn<MessageT|string> {

    return IntegerParameters(value, (value, valid) => message({value, valid}));
}


namespace Integer {
    export const Parameters = IntegerParameters;
    export const Parameter = IntegerParameter;
    export type Return<MessageT>  = IntegerReturn<MessageT> ;
    export type Argument<MessageT> = IntegerArgument<MessageT>;
}
export default Integer;
