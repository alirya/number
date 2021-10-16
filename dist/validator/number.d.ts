import Validator from "@dikac/t-validator/simple";
import Validatable from "@dikac/t-validatable/validatable";
import Value from "@dikac/t-value/value";
import Instance from "@dikac/t-validator/validatable/validatable";
export default function Number<MessageT>(message: (result: Readonly<Value> & Readonly<Validatable>) => MessageT): Validator<unknown, number, Readonly<Instance<unknown, MessageT>>>;
