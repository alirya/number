import LowerThanMaximumString from '../../string/lower-than-maximum.js';
import Minimum from '../../minimum.js';
import Maximum from '../../../maximum/maximum.js';
import Inclusive from '../../../inclusive/inclusive.js';

export function LowerThanMaximumParameters(
    minimum : number,
    maximum : number,
    inclusive : boolean,
) : Error {

    return new Error(
        LowerThanMaximumString.Parameters(minimum, false, maximum, inclusive)
    );
}

export type LowerThanMaximumArgument = Readonly<Minimum & Maximum & Inclusive>;

export function LowerThanMaximumParameter(
    {
        minimum,
        maximum,
        inclusive,
    } : Readonly<Minimum & Maximum & Inclusive>,
) : Error {

    return LowerThanMaximumParameters(minimum, maximum, inclusive);
}


namespace LowerThanMaximum {
    export const Parameters = LowerThanMaximumParameters;
    export const Parameter = LowerThanMaximumParameter;
    export type Argument = LowerThanMaximumArgument;
}
export default LowerThanMaximum;
