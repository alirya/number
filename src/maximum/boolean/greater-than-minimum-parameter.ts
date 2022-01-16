import Minimum from '../../minimum/minimum';
import Maximum from '../maximum';
import Inclusive from '../../inclusive/inclusive';
import GreaterParameters from '../../boolean/greater-parameters';

export default function GreaterThanMinimumParameter(object : Readonly<Minimum & Maximum & Inclusive>) : boolean {

    return GreaterParameters(object.maximum, object.minimum, object.inclusive);
}
