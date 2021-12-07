import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Inclusive from "../../inclusive/inclusive";
import LowerParameters from "./lower-parameters";
import Maximum from "../../maximum/maximum";

/**
 * message for lower validation
 */
export default function LowerParameter(
    {
        valid,
        value,
        maximum,
        inclusive,
        subject,
    } : Value<number> & Validatable & Maximum & Inclusive & {subject ?: string}
) : string {

    return LowerParameters(value, valid, maximum, inclusive, subject);
}
