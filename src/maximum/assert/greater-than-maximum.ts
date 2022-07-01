import Minimum from '../../minimum/minimum';
import Maximum from '../../maximum/maximum';
import GreaterThanMaximumBoolean from '../boolean/greater-than-minimum';
import GreaterThanMaximumError from './throwable/greater-than-minimum';
import Callback from '@alirya/function/assert/callback';
import Inclusive from '../../inclusive/inclusive';

export default function GreaterThanMaximum<Object extends  Readonly<Minimum & Maximum & Inclusive>>(
    object : Readonly<Object>,
    error : (object:Object)=>Error = GreaterThanMaximumError.Parameter
) : asserts object is Object {

    Callback.Parameters(object, GreaterThanMaximumBoolean.Parameter, error);

}
