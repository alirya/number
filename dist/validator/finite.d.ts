import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import Value from "@dikac/t-value/value";
import Instance from "@dikac/t-validator/validatable/validatable";
export default function Finite(): Validator<number, number, boolean, boolean, Readonly<Instance<number, string>>>;
export default function Finite<MessageType>(message: (result: Readonly<Value<number> & Validatable>) => MessageType): Validator<number, number, boolean, boolean, Readonly<Instance<number, MessageType>>>;
