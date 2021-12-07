import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import NumberParameters from "./number-parameters";

export default function NumberParameter(
    {
        value,
        valid,
        subject,
        conversion,
    } : Value &
        Validatable & {
        subject ?: string,
        conversion ?: (value:unknown)=>string
    }
) : string {

    return NumberParameters(value, valid, subject, conversion);
}
