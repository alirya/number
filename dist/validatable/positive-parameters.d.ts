import ValidatorValidatable from "@dikac/t-validator/validatable/validatable";
import Dynamic from "@dikac/t-validator/message/function/dynamic-parameters";
export default function PositiveParameters<MessageT>(value: number): Readonly<ValidatorValidatable<number, MessageT>>;
export default function PositiveParameters<MessageT>(value: number, message: Dynamic<number, MessageT>): Readonly<ValidatorValidatable<number, MessageT>>;
