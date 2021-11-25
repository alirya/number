import Return from "@dikac/t-validator/validatable/simple";
import Instance from "@dikac/t-validator/validatable/validatable";
import Dynamic from "@dikac/t-validator/message/function/dynamic-parameters";
export default function NumberParameters<Argument>(value: Argument): Return<any, Argument, number, Readonly<Instance<Argument, string>>>;
export default function NumberParameters<Argument, MessageT>(value: Argument, message: Dynamic<Argument, MessageT>): Return<any, Argument, number, Readonly<Instance<Argument, MessageT>>>;
