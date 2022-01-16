import IntegerParameters from "./integer-parameters";
import Value from "@alirya/value/value";

export default function IntegerParameter(
    {
        value,
        subject,
    } : Value<number> & {subject ?: string}
) : Error {

    return IntegerParameters(value, subject);
}
