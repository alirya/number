import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
import Inclusive from "../inclusive/inclusive";
import Minimum from "../minimum/minimum";
import Greater from "./greater";
export default function GreaterFromObject<MessageType>(object: Minimum & Inclusive & Message<(result: Readonly<Value<number> & Inclusive & Minimum & Validatable>) => MessageType>): Greater<MessageType>;
