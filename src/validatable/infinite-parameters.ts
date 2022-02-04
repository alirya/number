import CallbackParameters from './callback-parameters';
import InfiniteValidation from '../boolean/infinite';
import {IntegerReturn as InfiniteReturn} from './integer-parameters';
import InfiniteMessage from '../assert/string/infinite-parameters';
import Dynamic from '@alirya/validator/message/function/validatable-parameters';

export {InfiniteReturn};

export default function InfiniteParameters<MessageT>(
    number : number,
) : InfiniteReturn<string>;

export default function InfiniteParameters<MessageT>(
    number : number,
    message : Dynamic<number, MessageT>
) : InfiniteReturn<MessageT>;

export default function InfiniteParameters<MessageT>(
    number : number,
    message : Dynamic<number, MessageT|string> = InfiniteMessage
) : InfiniteReturn<MessageT|string> {

    return new CallbackParameters(number, InfiniteValidation, message);
}
