import Value from "@dikac/t-value/value";
import FiniteParameters from "./finite-parameters";

export default function FiniteParameter(
    {
        value,
        subject,
    } : Value<number> & {subject ?: string}
) : Error {

    return FiniteParameters(value, subject);
}
