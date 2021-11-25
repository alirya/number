import Value from "@dikac/t-value/value";
import FiniteParameters from "./finite-parameters";

export default function FiniteParameter(
    //value : number,
    //subject ?: string,
    {
        value,
        subject,
    } : Value<number> & {subject ?: string}
) : Error {

    return FiniteParameters(value, subject);
    //return new Error(FiniteType(value, false, subject))
}
