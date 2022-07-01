import Minimum from '../../minimum/minimum';
import Maximum from '../maximum';
import Inclusive from '../../inclusive/inclusive';
import {GreaterParameters} from '../../boolean/greater';

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
