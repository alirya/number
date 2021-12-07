import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import FiniteParameters from "./finite-parameters";

export default function FiniteParameter(
    {
        value,
        valid,
        subject,
    } : Value<number> & Validatable & {subject ?: string}
) : string {

    return FiniteParameters(value, valid, subject);
}
