import Return from "@dikac/t-validator/validatable/simple";
import Value from "@dikac/t-value/value";
import Instance from "@dikac/t-validator/validatable/validatable";
import Dynamic from "@dikac/t-validator/message/function/dynamic-parameter";
import StrictOmit from "@dikac/t-object/strict-omit";
export declare type PositiveArgument<Argument, MessageT> = Value<Argument> & {
    message?: Dynamic<any, MessageT>;
};
export default function NumberParameter<Argument, MessageT>({ value }: StrictOmit<PositiveArgument<Argument, MessageT>, 'message'>): Return<any, Argument, number, Readonly<Instance<Argument, MessageT>>>;
export default function NumberParameter<Argument, MessageT>({ message, value }: Readonly<PositiveArgument<Argument, MessageT>>): Return<any, Argument, number, Readonly<Instance<Argument, MessageT>>>;
