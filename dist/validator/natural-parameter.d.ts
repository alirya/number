import Validator from "@dikac/t-validator/validator";
import Instance from "@dikac/t-validator/validatable/validatable";
import Dynamic from "@dikac/t-validator/message/function/dynamic-parameter";
export default function NaturalParameter(): Validator<number, number, boolean, boolean, Readonly<Instance<number, string>>>;
export default function NaturalParameter<MessageT>(message: Dynamic<number, MessageT>): Validator<number, number, boolean, boolean, Readonly<Instance<number, MessageT>>>;
