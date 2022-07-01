import LowerThanMaximumString from '../../string/greater-than-minimum';
import Minimum from '../../../minimum/minimum';
import Maximum from '../../../maximum/maximum';
import Inclusive from '../../../inclusive/inclusive';

export function GreaterThanMinimumParameters(
    maximum : number,
    minimum : number,
    inclusive : boolean,
) : Error {

    return new Error(LowerThanMaximumString.Parameters(maximum, false, minimum, inclusive));
}

export type GreaterThanMinimumArgument = Readonly<Minimum & Maximum & Inclusive>;

export function GreaterThanMinimumParameter(
    {
        maximum, minimum, inclusive
    } : GreaterThanMinimumArgument,
) : Error {

    return GreaterThanMinimumParameters(maximum, minimum, inclusive);
}


namespace GreaterThanMinimum {
    export const Parameters = GreaterThanMinimumParameters;
    export const Parameter = GreaterThanMinimumParameter;
    export type Argument = GreaterThanMinimumArgument;
}
export default GreaterThanMinimum;
