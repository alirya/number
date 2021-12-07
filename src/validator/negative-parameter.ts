import Validator from "@dikac/t-validator/validator";
import Instance from "@dikac/t-validator/validatable/validatable";
import Dynamic from "@dikac/t-validator/message/function/validatable-parameter";
import PositiveString from "../assert/string/positive-parameter";
import NegativeParameters from "./negative-parameters";

export default function NegativeParameter() : Validator<number, number, boolean, boolean, Readonly<Instance<number, string>>>;

export default function NegativeParameter<MessageT>(
    message : Dynamic<number, MessageT>
) : Validator<number, number, boolean, boolean, Readonly<Instance<number, MessageT>>>;

export default function NegativeParameter<MessageT>(
    message : Dynamic<number, MessageT|string> = PositiveString
) : Validator<number, number, boolean, boolean, Readonly<Instance<number, MessageT|string>>> {

    return NegativeParameters((value, valid) => message({value, valid}))
}
