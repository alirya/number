import Validator from "@dikac/t-validator/validator";
import Instance from "@dikac/t-validator/validatable/validatable";
import Dynamic from "@dikac/t-validator/message/function/validatable-parameter";
import PositiveString from "../assert/string/positive-parameter";
import PositiveParameters from "./positive-parameters";

export default function PositiveParameter() : Validator<number, number, boolean, boolean, Readonly<Instance<number, string>>>;

export default function PositiveParameter<MessageT>(
    message : Dynamic<number, MessageT>
) : Validator<number, number, boolean, boolean, Readonly<Instance<number, MessageT>>>;

export default function PositiveParameter<MessageT>(
    message : Dynamic<number, MessageT|string> = PositiveString
) : Validator<number, number, boolean, boolean, Readonly<Instance<number, MessageT|string>>> {

    return PositiveParameters((value, valid) => message({value, valid}))
}
