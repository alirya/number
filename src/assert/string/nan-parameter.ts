import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import NanParameters from "./nan-parameters";

export default function NanParameter(
    {
        value,
        valid,
        subject,
    } : Value<number> & Validatable & {subject ?: string}
) : string {

    return NanParameters(value, valid, subject);
 }
