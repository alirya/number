import CallbackParameters from './callback-parameters';
import IntegerValidation from '../boolean/integer';
import Validatable from '@alirya/validatable/validatable';
import Message from '@alirya/message/message';
import Value from '@alirya/value/value';
import ValueOf from '@alirya/value/value-of/value-of';
import ToString from '@alirya/string/to-string';
import Dynamic from '@alirya/validator/message/function/validatable-parameters';
import IntegerMessage from '../assert/string/integer-parameters';

export type IntegerType<MessageT> =
    Readonly<
        Validatable &
        Message<MessageT> &
        Value<number>
    > &
    ValueOf<number> &
    ToString<[number|void]>;

export default function IntegerParameters(
    number : number,
) : IntegerType<string>;

export default function IntegerParameters<MessageT>(
    number : number,
    message : Dynamic<number, MessageT>
) : IntegerType<MessageT>;

export default function IntegerParameters<MessageT>(
    number : number,
    message : Dynamic<number, MessageT|string> = IntegerMessage
) : IntegerType<MessageT|string> {

    return new CallbackParameters(number, IntegerValidation, message);
}
