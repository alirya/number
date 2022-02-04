import {IntegerReturn as FiniteReturn} from './integer-parameters';
import StrictOmit from '@alirya/object/strict-omit';
import FiniteMessage from '../assert/string/finite-parameter';
import {IntegerArgument as FiniteArgument} from './integer-parameter';
import FiniteParameters from './finite-parameters';

export {FiniteReturn, FiniteArgument};

export default function FiniteParameter<MessageT>(
    {
        value
    } : StrictOmit<FiniteArgument<MessageT>, 'message'>
) : FiniteReturn<string>;

export default function FiniteParameter<MessageT>(
    {
        message,
        value
    } : Required<FiniteArgument<MessageT>>
) : FiniteReturn<MessageT>;

export default function FiniteParameter<MessageT>(
    {
        message = FiniteMessage,
        value
    } : FiniteArgument<MessageT|string>
) : FiniteReturn<MessageT|string> {

    return FiniteParameters(value, (value, valid) => message({value, valid}));
}
