import ValidatorValidatable from "@dikac/t-validator/validatable/validatable";
import Value from "@dikac/t-value/value";
import Dynamic from "@dikac/t-validator/message/function/dynamic-parameter";
import StrictOmit from "@dikac/t-object/strict-omit";
export declare type PositiveArgument<MessageT> = Value<number> & {
    message?: Dynamic<number, MessageT>;
};
export default function PositiveParameter<MessageT>({ value }: StrictOmit<PositiveArgument<MessageT>, 'message'>): ValidatorValidatable<number, MessageT>;
export default function PositiveParameter<MessageT>({ message, value }: Required<PositiveArgument<MessageT>>): ValidatorValidatable<number, MessageT>;
