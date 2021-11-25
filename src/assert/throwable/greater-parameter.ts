import Value from "@dikac/t-value/value";
import Minimum from "../../minimum/minimum";
import Inclusive from "../../inclusive/inclusive";
import GreaterParameters from "./greater-parameters";

export default function GreaterParameter(
    //number : number,
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

    return GreaterParameters(value, minimum, inclusive, subject);
}
