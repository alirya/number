import Value from "@alirya/value/value";
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
    {
        value,
        minimum,
        inclusive,
    } : Value<number> & Minimum & Inclusive
) : boolean {

    return GreaterParameters(value, minimum, inclusive);
}
