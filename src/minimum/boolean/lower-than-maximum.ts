import {GreaterParameters} from '../../boolean/greater.js';
import Minimum from '../../minimum/minimum.js';
import Maximum from '../../maximum/maximum.js';
import Inclusive from '../../inclusive/inclusive.js';
export type LowerThanMaximumArgument = Readonly<Minimum & Maximum & Inclusive>;

export function LowerThanMaximumParameters(
    maximum : number,
    minimum : number,
    inclusive : boolean
) : boolean {

    return GreaterParameters(maximum, minimum, inclusive);
}


export function LowerThanMaximumParameter({
    maximum,
    minimum,
    inclusive,
} : LowerThanMaximumArgument) : boolean {

    return GreaterParameters(maximum, minimum, inclusive);
}


namespace LowerThanMaximum {
    export const Parameters = LowerThanMaximumParameters;
    export const Parameter = LowerThanMaximumParameter;
    export type Argument = LowerThanMaximumArgument;
}
export default LowerThanMaximum;
