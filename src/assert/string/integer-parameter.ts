import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import IntegerParameters from "./integer-parameters";

export default function IntegerParameter(
    {
        value,
        valid,
        subject,
    } : Value<number> & Validatable & {subject ?: string}
) : string {

    return IntegerParameters(value, valid, subject);

}
