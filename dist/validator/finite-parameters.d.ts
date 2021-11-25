import Validator from "@dikac/t-validator/validator";
import Instance from "@dikac/t-validator/validatable/validatable";
import Dynamic from "@dikac/t-validator/message/function/dynamic-parameters";
export default function FiniteParameters(): Validator<number, number, boolean, boolean, Readonly<Instance<number, string>>>;
export default function FiniteParameters<MessageType>(message: Dynamic<number, MessageType>): Validator<number, number, boolean, boolean, Readonly<Instance<number, MessageType>>>;
