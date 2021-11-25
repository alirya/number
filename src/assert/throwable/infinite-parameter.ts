import InfiniteParameters from "./infinite-parameters";
import Value from "@dikac/t-value/value";

export default function InfiniteParameter(
    // value : number,
    // subject ?: string,
    {
        value,
        subject,
    } : Value<number> & {subject ?: string}
) : Error {

    return InfiniteParameters(value, subject);
}
