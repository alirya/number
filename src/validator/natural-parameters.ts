import Validator from "@dikac/t-validator/validator";
import NaturalValidatable from "../validatable/natural-parameters";
import Instance from "@dikac/t-validator/validatable/validatable";
import Dynamic from "@dikac/t-validator/message/function/dynamic-parameters";
import NaturalString from "../assert/string/natural-parameters";

export default function NaturalParameters() : Validator<number, number, boolean, boolean, Readonly<Instance<number, string>>>

export default function NaturalParameters<MessageT>(
    message : Dynamic<number, MessageT>
) : Validator<number, number, boolean, boolean, Readonly<Instance<number, MessageT>>>

export default function NaturalParameters<MessageT>(
    message : Dynamic<number, MessageT|string> = NaturalString
) : Validator<number, number, boolean, boolean, Readonly<Instance<number, MessageT>>> {

    return function (value) {

        return NaturalValidatable(value, message);
    } as Validator<number, number, boolean, boolean, Readonly<Instance<number, MessageT>>>

}
