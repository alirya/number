import Validator from "@alirya/validator/simple";
import NumberValidatable from "../validatable/number-parameters";
import Instance from "@alirya/validator/validatable/validatable";
import Dynamic from "@alirya/validator/message/function/validatable-parameters";
import NumberString from "../assert/string/number-parameters";

export default function NumberParameters() : Validator<unknown, number, Readonly<Instance<unknown, string>>>;

export default function NumberParameters<MessageT>(
    message : Dynamic<unknown, MessageT>
) : Validator<unknown, number, Readonly<Instance<unknown, MessageT>>>;

export default function NumberParameters<MessageT>(
    message : Dynamic<unknown, MessageT|string> = NumberString
) : Validator<unknown, number, Readonly<Instance<unknown, MessageT>>> {

    return function<Type extends number, Argument extends unknown>(value : Type|Argument) {

        return  NumberValidatable(value, message);

    } as Validator<unknown, number, Readonly<Instance<unknown, MessageT>>>
}
