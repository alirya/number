import Validator from "@alirya/validator/validator";
import NegativeValidatable from "../validatable/negative-parameters";
import Instance from "@alirya/validator/validatable/validatable";
import Dynamic from "@alirya/validator/message/function/validatable-parameters";
import NegativeString from "../assert/string/negative-parameters";

export default function NegativeParameters() : Validator<number, number, boolean, boolean, Readonly<Instance<number, string>>>;

export default function NegativeParameters<MessageT>(
    message : Dynamic<number, MessageT>
) : Validator<number, number, boolean, boolean, Readonly<Instance<number, MessageT>>>;

export default function NegativeParameters<MessageT>(
    message : Dynamic<number, MessageT|string> = NegativeString
) : Validator<number, number, boolean, boolean, Readonly<Instance<number, MessageT>>> {

    return function (value) {

        return NegativeValidatable(value, message);

    } as Validator<number, number, boolean, boolean, Readonly<Instance<number, MessageT>>>
}
