import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
export default function NumberParameter({ value, valid, subject, conversion, }: Value & Validatable & {
    subject?: string;
    conversion?: (value: unknown) => string;
}): string;
