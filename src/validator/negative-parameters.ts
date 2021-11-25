import Validator from "@dikac/t-validator/validator";
import NegativeValidatable from "../validatable/negative-parameters";
import Instance from "@dikac/t-validator/validatable/validatable";
import Dynamic from "@dikac/t-validator/message/function/dynamic-parameters";
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
