import LowerParameters from "./lower-parameters";
import Value from "@dikac/t-value/value";
import Minimum from "../../minimum/minimum";
import Inclusive from "../../inclusive/inclusive";

export default function LowerParameter(
    //value : number,
    //minimum : number,
    //inclusive : boolean,
    //subject ?: string,
    {
        value,
        minimum,
        inclusive,
        subject,
    } : Value<number> & Minimum & Inclusive & {subject ?: string}
) : Error {

    return LowerParameters(value, minimum, inclusive, subject);
}
