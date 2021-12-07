import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import PositiveParameters from "./positive-parameters";

export default function PositiveParameter(
    {
        value,
        valid,
        subject,
    } : Value<number> & Validatable & {subject ?: string}
) : string {

    return PositiveParameters(value, valid, subject);

}

