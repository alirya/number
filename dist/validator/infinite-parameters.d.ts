import Validator from "@dikac/t-validator/validator";
import Instance from "@dikac/t-validator/validatable/validatable";
import Dynamic from "@dikac/t-validator/message/function/dynamic-parameters";
export default function InfiniteParameters(): Validator<number, number, boolean, boolean, Readonly<Instance<number, string>>>;
export default function InfiniteParameters<MessageT>(message: Dynamic<number, MessageT>): Validator<number, number, boolean, boolean, Readonly<Instance<number, MessageT>>>;
