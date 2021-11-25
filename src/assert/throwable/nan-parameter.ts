import NanParameters from "./nan-parameters";
import Value from "@dikac/t-value/value";

export default function NanParameter(
    // value : number,
    // subject ?: string,
    {
        value,
        subject,
    } : Value<number> & {subject ?: string}
) : Error {

    return NanParameters(value, subject)
}
