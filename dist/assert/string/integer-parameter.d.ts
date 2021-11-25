import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
export default function IntegerParameter({ value, valid, subject, }: Value<number> & Validatable & {
    subject?: string;
}): string;
