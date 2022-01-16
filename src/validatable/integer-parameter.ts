import Validatable from '@alirya/validatable/validatable';
import Message from '@alirya/message/message';
import Value from '@alirya/value/value';
import ValueOf from '@alirya/value/value-of/value-of';
import ToString from '@alirya/string/to-string';
import {PositiveArgument as IntegerArgument} from './positive-parameter';
import StrictOmit from '@alirya/object/strict-omit';
import NaturalMessage from '../assert/string/natural-parameter';
import IntegerParameters, {IntegerType} from './integer-parameters';

export {IntegerArgument};

export default function IntegerParameter(
    {
        value
    } : StrictOmit<IntegerArgument<unknown>, 'message'>
) : IntegerType<string>;

export default function IntegerParameter<MessageT>(
    {
        message,
        value
    } : IntegerType<MessageT>
) : Readonly<Validatable & Message<MessageT> & Value<number>> & ValueOf<number> & ToString<[number|void]>;

export default function IntegerParameter<MessageT>(
    {
        message = NaturalMessage,
        value
    } : IntegerArgument<MessageT|string>
) : IntegerType<MessageT|string> {

    return IntegerParameters(value, (value, valid) => message({value, valid}));
}
