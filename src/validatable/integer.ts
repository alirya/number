import {CallbackParameters} from './callback';
import IntegerValidation from '../boolean/integer';
import Validatable from '@alirya/validatable/validatable';
import Message from '@alirya/message/message';
import Value from '@alirya/value/value';
import ValueOf from '@alirya/value/value-of/value-of';
import ToString from '@alirya/string/to-string';
import {ValidatableParameters} from '@alirya/validator/message/function/validatable';
import IntegerMessage from '../assert/string/integer';
import {PositiveArgument as IntegerArgument} from './positive';
import StrictOmit from '@alirya/object/strict-omit';
import NaturalMessage from '../assert/string/natural';

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
