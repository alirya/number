import Validator from "@dikac/t-validator/validator";
import Instance from "@dikac/t-validator/validatable/validatable";
import Dynamic from "@dikac/t-validator/message/function/validatable-parameter";
import NaturalString from "../assert/string/natural-parameter";
import NaturalParameters from "./natural-parameters";

export default function NaturalParameter() : Validator<number, number, boolean, boolean, Readonly<Instance<number, string>>>

export default function NaturalParameter<MessageT>(
    message : Dynamic<number, MessageT>
) : Validator<number, number, boolean, boolean, Readonly<Instance<number, MessageT>>>

export default function NaturalParameter<MessageT>(
    message : Dynamic<number, MessageT|string> = NaturalString
) : Validator<number, number, boolean, boolean, Readonly<Instance<number, MessageT|string>>> {

    return NaturalParameters((value, valid) => message({value, valid}))

}
