import Minimum from '../../minimum/minimum';
import Maximum from '../../maximum/maximum';
import Inclusive from '../../inclusive/inclusive';
import GreaterParameters from '../../boolean/greater-parameters';

export default function LowerThanMaximumParameter({
    maximum,
    minimum,
    inclusive,
} : Readonly<Minimum & Maximum & Inclusive>) : boolean {

    return GreaterParameters(maximum, minimum, inclusive);
}
