import Value from '@alirya/value/value.js';
import Minimum from '../minimum/minimum.js';
import Inclusive from '../inclusive/inclusive.js';
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
    inclusive  = false
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

export {Greater as IsGreater};
export {GreaterParameters as IsGreaterParameters};
export {GreaterParameter as IsGreaterParameter};