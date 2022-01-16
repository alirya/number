import InfiniteParameters from "./infinite-parameters";
import Value from "@alirya/value/value";

export default function InfiniteParameter(
    {
        value,
        subject,
    } : Value<number> & {subject ?: string}
) : Error {

    return InfiniteParameters(value, subject);
}
