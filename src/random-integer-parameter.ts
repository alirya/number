import Minimum from './minimum/minimum';
import Maximum from './maximum/maximum';
import RandomIntegerParameters from './random-integer-parameters';
import Inclusive from './inclusive/inclusive';

export default function RandomIntegerParameter ({
    minimum,
    maximum,
    inclusive,
}:  Minimum & Maximum & Partial<Inclusive>) : number {

    return  RandomIntegerParameters(minimum, maximum, inclusive);
}
