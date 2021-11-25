import Validator from "@dikac/t-validator/simple";
import NumberValidatable from "../validatable/number-parameters";
import Instance from "@dikac/t-validator/validatable/validatable";
import Dynamic from "@dikac/t-validator/message/function/dynamic-parameter";
import NumberString from "../assert/string/number-parameter";
import NumberParameters from "./number-parameters";

export default function NumberParameter() : Validator<unknown, number, Readonly<Instance<unknown, string>>>;

export default function NumberParameter<MessageT>(
    message : Dynamic<unknown, MessageT>
) : Validator<unknown, number, Readonly<Instance<unknown, MessageT>>>;

export default function NumberParameter<MessageT>(
    message : Dynamic<unknown, MessageT|string> = NumberString
) : Validator<unknown, number, Readonly<Instance<unknown, MessageT|string>>> {

    return NumberParameters((value, valid) => message({value, valid}))
}
