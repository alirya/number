import LowerParameters from './lower-parameters';
import Value from '@alirya/value/value';
import Inclusive from '../inclusive/inclusive';
import Maximum from '../maximum/maximum';
/**
 * check if {@param number} is lower than {@param maximum} or equal if {@param inclusive} is true
 *
 * @param number
 * @param maximum
 * @param inclusive
 */

export default function LowerParameter(
    {
        value,
        maximum,
        inclusive,
    } : Value<number> & Maximum & Inclusive
) : boolean {

    return LowerParameters(value, maximum, inclusive);
}
