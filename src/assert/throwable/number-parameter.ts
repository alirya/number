import NumberParameters from "./number-parameters";
import Value from "@dikac/t-value/value";

export default function NumberParameter(
    {
        value,
        subject,
        conversion,
    } : Value<any> & {
        subject ?: string,
        conversion ?: (value:unknown)=>string
    }
) : Error {

    return NumberParameters(value, subject, conversion);
}
