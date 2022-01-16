import Validator from '@alirya/validator/simple';
import Instance from '@alirya/validator/validatable/validatable';
import Dynamic from '@alirya/validator/message/function/validatable-parameter';
import NumberString from '../assert/string/number-parameter';
import NumberParameters from './number-parameters';

export default function NumberParameter() : Validator<unknown, number, Readonly<Instance<unknown, string>>>;

export default function NumberParameter<MessageT>(
    message : Dynamic<unknown, MessageT>
) : Validator<unknown, number, Readonly<Instance<unknown, MessageT>>>;

export default function NumberParameter<MessageT>(
    message : Dynamic<unknown, MessageT|string> = NumberString
) : Validator<unknown, number, Readonly<Instance<unknown, MessageT|string>>> {

    return NumberParameters((value, valid) => message({value, valid}));
}
