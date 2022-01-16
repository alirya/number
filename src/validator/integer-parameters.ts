import Validator from '@alirya/validator/validator';
import IntegerValidatable from '../validatable/integer-parameters';
import Instance from '@alirya/validator/validatable/validatable';
import Dynamic from '@alirya/validator/message/function/validatable-parameters';
import IntegerString from '../assert/string/integer-parameters';

export default function IntegerParameters() : Validator<number, number, boolean, boolean, Readonly<Instance<number, string>>>;

export default function IntegerParameters<MessageT>(
    message : Dynamic<number, MessageT>
) : Validator<number, number, boolean, boolean, Readonly<Instance<number, MessageT>>>;

export default function IntegerParameters<MessageT>(
    message : Dynamic<number, MessageT|string> = IntegerString
) : Validator<number, number, boolean, boolean, Readonly<Instance<number, MessageT>>> {

    return function (value) {

        return IntegerValidatable(value, message);

    } as Validator<number, number, boolean, boolean, Readonly<Instance<number, MessageT>>>;
}
