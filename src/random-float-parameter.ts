import Minimum from './minimum/minimum';
import Maximum from './maximum/maximum';
import RandomFloatParameters from './random-floaparameters';
import Inclusive from './inclusive/inclusive';

export default function RandomFloatParameter ({
  minimum,
  maximum,
  inclusive,
} : Minimum & Maximum & Partial<Inclusive>) : number {

    return  RandomFloatParameters(minimum, maximum, inclusive);
}
