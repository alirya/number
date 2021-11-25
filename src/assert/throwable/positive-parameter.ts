import PositiveParameters from "./positive-parameters";
import Value from "@dikac/t-value/value";

export default function PositiveParameter(
    // value : number,
    // subject ?: string,
    {
        value,
        subject,
    } : Value<number> & {subject ?: string}
) : Error {

    return PositiveParameters(value, subject)
}
