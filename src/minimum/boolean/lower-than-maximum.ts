import {GreaterParameters} from '../../boolean/greater';
import Minimum from '../../minimum/minimum';
import Maximum from '../../maximum/maximum';
import Inclusive from '../../inclusive/inclusive';
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
