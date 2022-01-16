import Validator from "@alirya/validator/validator";
import Instance from "@alirya/validator/validatable/validatable";
import Dynamic from "@alirya/validator/message/function/validatable-parameter";
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
