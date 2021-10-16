import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import Value from "@dikac/t-value/value";
import Instance from "@dikac/t-validator/validatable/validatable";
export default function Infinite<MessageT>(message: (result: Readonly<Value<number> & Validatable>) => MessageT): Validator<number, number, boolean, boolean, Readonly<Instance<number, MessageT>>>;
