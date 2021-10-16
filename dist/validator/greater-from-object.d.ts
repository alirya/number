import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
import Inclusive from "../inclusive/inclusive";
import Minimum from "../minimum/minimum";
import Validator from "@dikac/t-validator/validator";
import GreaterValidatable from "../validatable/greater";
export default function GreaterFromObject<MessageType>(object: Minimum & Inclusive & Message<(result: Readonly<Value<number> & Inclusive & Minimum & Validatable>) => MessageType>): Validator<number, number, boolean, boolean, GreaterValidatable<number, MessageType>>;
