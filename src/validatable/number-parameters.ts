import Callback from "@alirya/validator/validatable/callback-function-parameters";
import NumberGuard from "../boolean/number";
import Return from "@alirya/validator/validatable/simple";
import Instance from "@alirya/validator/validatable/validatable";
import Dynamic from "@alirya/validator/message/function/validatable-parameters";
import NumberMessage from "../assert/string/number-parameters";

export default function NumberParameters<Argument>(
    value : Argument,
) : Return<Argument, number, Readonly<Instance<Argument, string>>>

export default function NumberParameters<Argument, MessageT>(
    value : Argument,
    message : Dynamic<Argument, MessageT>
) : Return<Argument, number, Readonly<Instance<Argument, MessageT>>>

export default function NumberParameters<Argument, MessageT>(
    value : Argument,
    message : Dynamic<Argument, MessageT|string> = NumberMessage
) : Return<Argument, number, Readonly<Instance<Argument, MessageT>>> {

    return <Return<Argument, number, Readonly<Instance<Argument, MessageT>>>> Callback(value, NumberGuard, message);
}
