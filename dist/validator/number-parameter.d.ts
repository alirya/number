import Validator from "@dikac/t-validator/simple";
import Instance from "@dikac/t-validator/validatable/validatable";
import Dynamic from "@dikac/t-validator/message/function/dynamic-parameter";
export default function NumberParameter(): Validator<unknown, number, Readonly<Instance<unknown, string>>>;
export default function NumberParameter<MessageT>(message: Dynamic<unknown, MessageT>): Validator<unknown, number, Readonly<Instance<unknown, MessageT>>>;
