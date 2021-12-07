import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import NaturalParameters from "./natural-parameters";

export default function NaturalParameter(
    {
        value,
        valid,
        subject,
    } : Value<number> & Validatable & {subject ?: string}
) : string {

    return NaturalParameters(value, valid, subject);
}
