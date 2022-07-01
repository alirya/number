import Value from '@alirya/value/value';
import Minimum from '../minimum/minimum';
import Inclusive from '../inclusive/inclusive';
/**
 * check if {@param value} is greater than {@param minimum} or equal if {@param inclusive} is true
 *
 * @param value
 * @param minimum
 * @param inclusive
 */
export function GreaterParameters(
    value : number,
    minimum : number,
    inclusive : boolean = false
) : boolean {

    return inclusive ? value >= minimum : value > minimum;
}

export type GreaterArgument = Value<number> & Minimum & Inclusive;
/**
 * check if {@param number} is greater than {@param minimum} or equal if {@param inclusive} is true
 *
 * @param number
 * @param minimum
 * @param inclusive
 */

export function GreaterParameter(
    {
        value,
        minimum,
        inclusive,
    } : GreaterArgument
) : boolean {

    return GreaterParameters(value, minimum, inclusive);
}


namespace Greater {
    export const Parameters = GreaterParameters;
    export const Parameter = GreaterParameter;
    export type Argument = GreaterArgument;
}
export default Greater;
