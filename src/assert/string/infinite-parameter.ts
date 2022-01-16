import Value from "@alirya/value/value";
import Validatable from "@alirya/validatable/validatable";
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
