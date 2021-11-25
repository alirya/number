import Validator from "@dikac/t-validator/validator";
import InfiniteValidatable from "../validatable/infinite-parameters";
import Instance from "@dikac/t-validator/validatable/validatable";
import Dynamic from "@dikac/t-validator/message/function/dynamic-parameters";
import InfiniteString from "../assert/string/infinite-parameters";

export default function InfiniteParameters() : Validator<number, number, boolean, boolean, Readonly<Instance<number, string>>>;

export default function InfiniteParameters<MessageT>(
    message : Dynamic<number, MessageT>
) : Validator<number, number, boolean, boolean, Readonly<Instance<number, MessageT>>>;

export default function InfiniteParameters<MessageT>(
    message : Dynamic<number, MessageT|string> = InfiniteString
) : Validator<number, number, boolean, boolean, Readonly<Instance<number, MessageT>>> {

    return function (value) {

        return InfiniteValidatable(value, message);

    } as Validator<number, number, boolean, boolean, Readonly<Instance<number, MessageT>>>
}
