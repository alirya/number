import Callback from "@dikac/t-value/message/callback";
import NumberGuard from "../boolean/number";
import Validatable from "@dikac/t-validatable/validatable";
import Return from "@dikac/t-validator/return/return";
import Value from "@dikac/t-value/value";
import Function from "@dikac/t-function/function";
import Instance from "@dikac/t-validator/parameter/instance/instance";

export default function Number<MessageT, Argument>(
    value : Argument,
    message : Function<[Readonly<Value<Argument> & Validatable>], MessageT>
) : Return<any, Argument, number, Readonly<Instance<Argument, MessageT>>> {

    return <Return<any, Argument, number, Readonly<Instance<Argument, MessageT>>>> Callback(value, NumberGuard, message);
}
