import Value from "@dikac/t-value/value";
import Minimum from "../minimum/minimum";
import Inclusive from "../inclusive/inclusive";
import GreaterParameters from "./greater-parameters";
/**
 * check if {@param number} is greater than {@param minimum} or equal if {@param inclusive} is true
 *
 * @param number
 * @param minimum
 * @param inclusive
 */

export default function GreaterParameter(
    // number : number,
    // minimum : number,
    // inclusive : boolean = false,
    {
        value,
        minimum,
        inclusive,
    } : Value<number> & Minimum & Inclusive
) : boolean {

    return GreaterParameters(value, minimum, inclusive);
}
