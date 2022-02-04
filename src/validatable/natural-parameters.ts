import CallbackParameters from './callback-parameters';
import NaturalValidation from '../boolean/natural';
import Dynamic from '@alirya/validator/message/function/validatable-parameters';
import NaturalMessage from '../assert/string/natural-parameters';
import {IntegerReturn as NaturalReturn} from './integer-parameters';

export type {NaturalReturn};

export default function NaturalParameters(
    number : number,
) : NaturalReturn<string>;

export default function NaturalParameters<MessageT>(
    number : number,
    message : Dynamic<number, MessageT>
) : NaturalReturn<MessageT>;

export default function NaturalParameters<MessageT>(
    number : number,
    message : Dynamic<number, MessageT|string> = NaturalMessage
) : NaturalReturn<MessageT|string> {

    return new CallbackParameters(number, NaturalValidation, message);
}
