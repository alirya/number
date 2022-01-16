import Validator from '@alirya/validator/validator';
import PositiveValidatable from '../validatable/positive-parameters';
import Instance from '@alirya/validator/validatable/validatable';
import Dynamic from '@alirya/validator/message/function/validatable-parameters';
import PositiveString from '../assert/string/positive-parameters';

export default function PositiveParameters() : Validator<number, number, boolean, boolean, Readonly<Instance<number, string>>>;

export default function PositiveParameters<MessageT>(
    message : Dynamic<number, MessageT>
) : Validator<number, number, boolean, boolean, Readonly<Instance<number, MessageT>>>;

export default function PositiveParameters<MessageT>(
    message : Dynamic<number, MessageT|string> = PositiveString
) : Validator<number, number, boolean, boolean, Readonly<Instance<number, MessageT>>> {

    return function <Argument extends number>(value: Argument) {

        return PositiveValidatable(value, message);

    } as Validator<number, number, boolean, boolean, Readonly<Instance<number, MessageT>>>;
}
