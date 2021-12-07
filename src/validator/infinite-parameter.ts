import Validator from "@dikac/t-validator/validator";
import Instance from "@dikac/t-validator/validatable/validatable";
import Dynamic from "@dikac/t-validator/message/function/validatable-parameter";
import InfiniteString from "../assert/string/infinite-parameter";
import InfiniteParameters from "./infinite-parameters";

export default function InfiniteParameter() : Validator<number, number, boolean, boolean, Readonly<Instance<number, string>>>;

export default function InfiniteParameter<MessageT>(
    message : Dynamic<number, MessageT>
) : Validator<number, number, boolean, boolean, Readonly<Instance<number, MessageT>>>;

export default function InfiniteParameter<MessageT>(
    message : Dynamic<number, MessageT|string> = InfiniteString
) : Validator<number, number, boolean, boolean, Readonly<Instance<number, MessageT|string>>> {

    return InfiniteParameters((value, valid) => message({value, valid}))
}
