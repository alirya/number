import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import Value from "@dikac/t-value/value";
import LowerValidatable from "../validatable/lower";
import Inclusive from "../inclusive/inclusive";
import Maximum from "../maximum/maximum";
export default function Lower<MessageT>(maximum: number, inclusive: boolean, message: (result: Readonly<Value<number> & Inclusive & Maximum & Validatable>) => MessageT): Validator<number, number, boolean, boolean, LowerValidatable<number, MessageT>>;
