import NegativeParameters from "./negative-parameters";
import Value from "@dikac/t-value/value";

export default function NegativeParameter(
    {
        value,
        subject,
    } : Value<number> & {subject ?: string}
) : Error {

    return NegativeParameters(value, subject);
}
