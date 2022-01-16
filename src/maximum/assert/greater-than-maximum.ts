import Minimum from '../../minimum/minimum';
import Maximum from '../../maximum/maximum';
import GreaterThanMaximumBoolean from '../boolean/greater-than-minimum-parameter';
import GreaterThanMaximumError from './throwable/greater-than-minimum-parameter';
import Callback from '@alirya/function/assert/callback-parameters';
import Inclusive from '../../inclusive/inclusive';

export default function GreaterThanMaximum<Object extends  Readonly<Minimum & Maximum & Inclusive>>(
    object : Readonly<Object>,
    error : (object:Object)=>Error = GreaterThanMaximumError
) : asserts object is Object {

    Callback(object, GreaterThanMaximumBoolean, error);

}
