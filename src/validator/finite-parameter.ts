import Validator from "@alirya/validator/validator";
import Instance from "@alirya/validator/validatable/validatable";
import FiniteString from "../assert/string/finite-parameter";
import Dynamic from "@alirya/validator/message/function/validatable-parameter";
import FiniteParameters from "./finite-parameters";

export default function FiniteParameter()
    : Validator<number, number, boolean, boolean, Readonly<Instance<number, string>>>;

export default function FiniteParameter<MessageType>(
    message : Dynamic<number, MessageType>
) : Validator<number, number, boolean, boolean, Readonly<Instance<number, MessageType>>>;

export default function FiniteParameter<MessageType>(
    message : Dynamic<number, MessageType|string> = FiniteString
) : Validator<number, number, boolean, boolean, Readonly<Instance<number, MessageType|string>>> {

    return FiniteParameters((value, valid) => message({value, valid}))
}
