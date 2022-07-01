import {GreaterParameters} from './boolean/greater';
import {LowerParameters} from './boolean/lower';
import LowerThanMaximum from './minimum/assert/lower-than-maximum';
import Minimum from './minimum/minimum';
import Maximum from './maximum/maximum';
import Inclusive from './inclusive/inclusive';

/**
 * get random integer
 * @param minimum
 * @param maximum
 * @param inclusive
 */
export function RandomIntegerParameters (
    minimum : number,
    maximum : number,
    inclusive : boolean = true
) : number {

    LowerThanMaximum({
        maximum : maximum,
        minimum : minimum,
        inclusive : inclusive,
    });

    if((maximum - minimum) <= 1) {

        if(!inclusive) {

            throw new Error(`minimum (${minimum}) and maximum (${maximum}) different must greater than 1 in exclusive mode`);
        }
    }

    let random = Math.random() * (maximum - minimum + 1);
    random = Math.floor(random + minimum);

    if(inclusive) {

        return random;

    } else {

        if(GreaterParameters(random, minimum, inclusive) && LowerParameters(random, maximum, inclusive)) {

            return random;

        } else {

            return  RandomIntegerParameters(minimum, maximum, inclusive);
        }
    }
}


export type RandomIntegerArgument = Minimum & Maximum & Partial<Inclusive>;

export function RandomIntegerParameter ({
    minimum,
    maximum,
    inclusive,
} : RandomIntegerArgument) : number {

    return  RandomIntegerParameters(minimum, maximum, inclusive);
}


namespace RandomInteger {
    export const Parameters = RandomIntegerParameters;
    export const Parameter = RandomIntegerParameter;
    export type Argument = RandomIntegerArgument;
}
export default RandomInteger;
