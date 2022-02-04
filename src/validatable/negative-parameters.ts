import CallbackParameters from './callback-parameters';
import NegativeValidation from '../boolean/negative';
import NegativeMessage from '../assert/string/negative-parameters';
import Dynamic from '@alirya/validator/message/function/validatable-parameters';
import {IntegerReturn as NegativeReturn} from './integer-parameters';

export type {NegativeReturn};

export default function NegativeParameters(
    number : number,
) : NegativeReturn<string>;

export default function NegativeParameters<MessageT>(
    number : number,
    message : Dynamic<number, MessageT>
) : NegativeReturn<MessageT>;

export default function NegativeParameters<MessageT>(
    number : number,
    message : Dynamic<number, MessageT|string> = NegativeMessage
) : NegativeReturn<MessageT|string> {

    return new CallbackParameters(number, NegativeValidation, message);
}
