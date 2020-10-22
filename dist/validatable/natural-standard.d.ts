import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
export default function NaturalStandard(number: number): Readonly<Validatable & Message<string> & Value<number>>;
