import Minimum from '../../minimum/minimum.js';
import Maximum from '../maximum.js';
import Inclusive from '../../inclusive/inclusive.js';
import {GreaterParameters} from '../../boolean/greater.js';

export function GreaterThanMinimumParameters({
    maximum,
    minimum,
    inclusive,
} : Readonly<Minimum & Maximum & Inclusive>) : boolean {

    return GreaterParameters(maximum, minimum, inclusive);
}

export type GreaterThanMinimumArgument = Readonly<Minimum & Maximum & Inclusive>;

export function GreaterThanMinimumParameter(object : GreaterThanMinimumArgument) : boolean {

    return GreaterParameters(object.maximum, object.minimum, object.inclusive);
}


namespace GreaterThanMinimum {
    export const Parameters = GreaterThanMinimumParameters;
    export const Parameter = GreaterThanMinimumParameter;
    export type Argument = GreaterThanMinimumArgument;
}
export default GreaterThanMinimum;
