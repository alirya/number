import Validator from "@dikac/t-validator/validator";
import FiniteValidatable from "../validatable/finite-parameters";
import Instance from "@dikac/t-validator/validatable/validatable";
import FiniteString from "../assert/string/finite-parameters";
import Dynamic from "@dikac/t-validator/message/function/dynamic-parameters";

export default function FiniteParameters() : Validator<number, number, boolean, boolean, Readonly<Instance<number, string>>>;

export default function FiniteParameters<MessageType>(
    message : Dynamic<number, MessageType>
) : Validator<number, number, boolean, boolean, Readonly<Instance<number, MessageType>>>;

export default function FiniteParameters<MessageType>(
    message : Dynamic<number, MessageType|string> = FiniteString
) : Validator<number, number, boolean, boolean, Readonly<Instance<number, MessageType|string>>> {

    return function (value) {

        return FiniteValidatable(value, message);

    } as Validator<number, number, boolean, boolean, Readonly<Instance<number, MessageType|string>>>
}
