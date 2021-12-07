import Validator from "@dikac/t-validator/validator";
import Instance from "@dikac/t-validator/validatable/validatable";
import Dynamic from "@dikac/t-validator/message/function/validatable-parameter";
import IntegerString from "../assert/string/integer-parameter";
import IntegerParameters from "./integer-parameters";

export default function IntegerParameter() : Validator<number, number, boolean, boolean, Readonly<Instance<number, string>>>

export default function IntegerParameter<MessageT>(
    message : Dynamic<number, MessageT>
) : Validator<number, number, boolean, boolean, Readonly<Instance<number, MessageT>>>

export default function IntegerParameter<MessageT>(
    message : Dynamic<number, MessageT|string> = IntegerString
) : Validator<number, number, boolean, boolean, Readonly<Instance<number, MessageT|string>>> {

    return IntegerParameters((value, valid) => message({value, valid}))
}
