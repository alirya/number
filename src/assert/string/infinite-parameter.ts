import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import InfiniteParameters from "./infinite-parameters";

export default function InfiniteParameter(
    {
        value,
        valid,
        subject,
    } : Value<number> & Validatable & {subject ?: string}
) : string {

    return InfiniteParameters(value, valid, subject);
}
