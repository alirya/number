import Minimum from '../../minimum/minimum.js';
import Maximum from '../../maximum/maximum.js';
import Validatable from '@alirya/validatable/validatable.js';
import Inclusive from '../../inclusive/inclusive.js';
export type LowerThanMaximumArgument = Readonly<Minimum & Maximum & Validatable & Inclusive>;

export function LowerThanMaximumParameters(
    minimum : number,
    valid : boolean,
    maximum : number,
    inclusive : boolean,
) : string {

    const parts : string[] = [];

    parts.push(`minimum "${maximum}"`);

    if(valid) {

        parts.push(`is lower`);

    } else {

        parts.push(`must lower`);
    }

    if(inclusive) {

        parts.push('or equal');
    }

    parts.push(`than maximum "${minimum}"`);

    return parts.join(' ') + '.';
}



export function LowerThanMaximumParameter({
   minimum,
   valid,
   maximum,
   inclusive,
} : LowerThanMaximumArgument) : string {

    return LowerThanMaximumParameters(minimum, valid, maximum, inclusive);
}


namespace LowerThanMaximum {
    export const Parameters = LowerThanMaximumParameters;
    export const Parameter = LowerThanMaximumParameter;
}
export default LowerThanMaximum;
