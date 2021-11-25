import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
export default function FiniteParameter({ value, valid, subject, }: Value<number> & Validatable & {
    subject?: string;
}): string;
