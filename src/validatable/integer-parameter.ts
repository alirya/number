import Validatable from '@alirya/validatable/validatable';
import Message from '@alirya/message/message';
import Value from '@alirya/value/value';
import ValueOf from '@alirya/value/value-of/value-of';
import ToString from '@alirya/string/to-string';
import {PositiveArgument as IntegerArgument} from './positive-parameter';
import StrictOmit from '@alirya/object/strict-omit';
import NaturalMessage from '../assert/string/natural-parameter';
import IntegerParameters, {IntegerReturn} from './integer-parameters';

export {IntegerArgument};

export default function IntegerParameter(
    {
        value
    } : StrictOmit<IntegerArgument<unknown>, 'message'>
) : IntegerReturn<string>;

export default function IntegerParameter<MessageT>(
    {
        message,
        value
    } : IntegerReturn<MessageT>
) : Readonly<Validatable & Message<MessageT> & Value<number>> & ValueOf<number> & ToString<[number|void]>;

export default function IntegerParameter<MessageT>(
    {
        message = NaturalMessage,
        value
    } : IntegerArgument<MessageT|string>
) : IntegerReturn<MessageT|string> {

    return IntegerParameters(value, (value, valid) => message({value, valid}));
}
