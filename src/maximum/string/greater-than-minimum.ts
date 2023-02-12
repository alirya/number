import Minimum from '../../minimum/minimum.js';
import Maximum from '../maximum.js';
import Validatable from '@alirya/validatable/validatable.js';
import Inclusive from '../../inclusive/inclusive.js';

export function GreaterThanMinimumParameters(
    maximum : number,
    valid : boolean,
    minimum : number,
    inclusive : boolean,
) : string {

    const parts : string[] = [];
    parts.push(`maximum "${maximum}"`);

    if(valid) {

        parts.push(`is greater`);

    } else {

        parts.push(`must greater`);
    }

    if(inclusive) {

        parts.push('or equal');
    }

    parts.push(`than minimum "${minimum}"`);

    return parts.join(' ') + '.';
}

export type GreaterThanMinimumArgument = Readonly<Minimum & Maximum & Validatable & Inclusive>;

export function GreaterThanMinimumParameter({
    maximum,
    valid,
    minimum,
    inclusive,
} : GreaterThanMinimumArgument) : string {

    return GreaterThanMinimumParameters(maximum, valid, minimum, inclusive);
}


namespace GreaterThanMinimum {
    export const Parameters = GreaterThanMinimumParameters;
    export const Parameter = GreaterThanMinimumParameter;
    export type Argument = GreaterThanMinimumArgument;
}
export default GreaterThanMinimum;
