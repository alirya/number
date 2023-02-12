import {GreaterParameters} from './boolean/greater.js';
import {LowerParameters} from './boolean/lower.js';
import LowerThanMaximum from './minimum/assert/lower-than-maximum.js';
import Minimum from './minimum/minimum.js';
import Maximum from './maximum/maximum.js';
import Inclusive from './inclusive/inclusive.js';

export  function RandomFloatParameters (
    minimum : number,
    maximum : number,
    inclusive  = true
) : number {

    LowerThanMaximum({
        maximum : maximum,
        minimum : minimum,
        inclusive : inclusive,
    });

    if((maximum - minimum) === 0) {

        if(!inclusive) {

            throw new Error(`minimum (${minimum}) and maximum (${maximum}) different must greater than 0 in exclusive mode`);
        }
    }

    const random = Math.random() * (maximum - minimum);

    const result = random + minimum;

    if(inclusive) {

        return result;

    } else {

        if(GreaterParameters(result, minimum, inclusive) && LowerParameters(result, maximum, inclusive)) {

            return result;

        } else {

            return  RandomFloatParameters(minimum, maximum, inclusive);
        }

    }
}


export type RandomFloatArgument = Minimum & Maximum & Partial<Inclusive>;

export function RandomFloatParameter ({
  minimum,
  maximum,
  inclusive,
} : RandomFloatArgument) : number {

    return  RandomFloatParameters(minimum, maximum, inclusive);
}


namespace RandomFloat {
    export const Parameters = RandomFloatParameters;
    export const Parameter = RandomFloatParameter;
}
export default RandomFloat;
