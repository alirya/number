import CallbackParameters from './callback-parameters';
import {IntegerReturn as FiniteReturn} from './integer-parameters';
import FiniteMessage from '../assert/string/finite-parameters';
import Dynamic from '@alirya/validator/message/function/validatable-parameters';

export {FiniteReturn};

export default function FiniteParameters<MessageT>(
    number : number,
) : FiniteReturn<string>;

export default function FiniteParameters<MessageT>(
    number : number,
    message : Dynamic<number, MessageT>
) : FiniteReturn<MessageT>;

export default function FiniteParameters<MessageT>(
    number : number,
    message : Dynamic<number, MessageT|string> = FiniteMessage
) : FiniteReturn<MessageT|string> {

    return new CallbackParameters(number, isFinite, message);
}
