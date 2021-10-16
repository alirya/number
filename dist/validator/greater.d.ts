import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import Value from "@dikac/t-value/value";
import GreaterValidatable from "../validatable/greater";
import Inclusive from "../inclusive/inclusive";
import Minimum from "../minimum/minimum";
export default function Greater<MessageT>(minimum: number, inclusive: boolean, message: (result: Readonly<Value<number> & Inclusive & Minimum & Validatable>) => MessageT): Validator<number, number, boolean, boolean, GreaterValidatable<number, MessageT>>;
