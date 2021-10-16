import Validator from "@dikac/t-validator/simple";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
import NumberValidatable from "../validatable/number";
import Instance from "@dikac/t-validator/validatable/validatable";
import SimpleValidatable from "@dikac/t-validator/validatable/simple";

export default function Number<MessageT>(
    message : (result:Readonly<Value> & Readonly<Validatable>)=>MessageT
) : Validator<unknown, number, Readonly<Instance<unknown, MessageT>>> {

    return function<Type extends number, Argument extends unknown>(value : Type|Argument) {

        return  NumberValidatable(value, message);

    } as Validator<unknown, number, Readonly<Instance<unknown, MessageT>>>
}
