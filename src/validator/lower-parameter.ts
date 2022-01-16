import Validatable from '@alirya/validator/value/validatable';
import Message from '@alirya/message/message';
import Inclusive from '../inclusive/inclusive';
import LowerParameters from './lower-parameters';
import Maximum from '../maximum/maximum';
import Validator from '@alirya/validator/validator';
import LowerValidatable from '../validatable/lower-parameters';
import Dynamic from '@alirya/validator/message/function/validatable-parameter';
import StrictOmit from '@alirya/object/strict-omit';
import LowerString from '../assert/string/lower-parameter';

export type LowerArgument<MessageT> =
    Maximum &
    Inclusive &
    Partial<Message<Dynamic<number, MessageT, Inclusive & Maximum & Validatable<number>>>>;

export default function LowerParameter<MessageT>(
    {
        maximum,
        inclusive,
        message,
    } : Required<LowerArgument<MessageT>>
) : Validator<number, number, boolean, boolean, LowerValidatable<number, MessageT>>;

export default function LowerParameter<MessageT>(
    {
        maximum,
        inclusive,
    } : StrictOmit<LowerArgument<MessageT>, 'message'>
) : Validator<number, number, boolean, boolean, LowerValidatable<number, MessageT>>;

export default function LowerParameter<MessageT>(
    {
        maximum,
        inclusive,
        message = LowerString,
    } : LowerArgument<MessageT|string>
) : Validator<number, number, boolean, boolean, LowerValidatable<number, MessageT|string>> {

    return LowerParameters(
        maximum,
        inclusive,
        (value, valid, maximum, inclusive) => message({value, valid, maximum, inclusive}
    ));
}
