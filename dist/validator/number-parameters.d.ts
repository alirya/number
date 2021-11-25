import Validator from "@dikac/t-validator/simple";
import Instance from "@dikac/t-validator/validatable/validatable";
import Dynamic from "@dikac/t-validator/message/function/dynamic-parameters";
export default function NumberParameters(): Validator<unknown, number, Readonly<Instance<unknown, string>>>;
export default function NumberParameters<MessageT>(message: Dynamic<unknown, MessageT>): Validator<unknown, number, Readonly<Instance<unknown, MessageT>>>;
