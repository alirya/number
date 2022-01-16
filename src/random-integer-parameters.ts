import GreaterParameters from './boolean/greater-parameters';
import LowerParameters from './boolean/lower-parameters';
import LowerThanMaximum from './minimum/assert/lower-than-maximum';

/**
 * get random integer
 * @param minimum
 * @param maximum
 * @param inclusive
 */
export default function RandomIntegerParameters (
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
