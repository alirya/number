import Validator from "@dikac/t-validator/validator";
import IntegerValidatable from "../validatable/integer-parameters";
import Instance from "@dikac/t-validator/validatable/validatable";
import Dynamic from "@dikac/t-validator/message/function/dynamic-parameters";
import IntegerString from "../assert/string/integer-parameters";

export default function IntegerParameters() : Validator<number, number, boolean, boolean, Readonly<Instance<number, string>>>

export default function IntegerParameters<MessageT>(
    message : Dynamic<number, MessageT>
) : Validator<number, number, boolean, boolean, Readonly<Instance<number, MessageT>>>

export default function IntegerParameters<MessageT>(
    message : Dynamic<number, MessageT|string> = IntegerString
) : Validator<number, number, boolean, boolean, Readonly<Instance<number, MessageT>>> {

    return function (value) {

        return IntegerValidatable(value, message);

    } as Validator<number, number, boolean, boolean, Readonly<Instance<number, MessageT>>>
}
