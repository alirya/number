import Minimum from '../../minimum/minimum.js';
import Maximum from '../../maximum/maximum.js';
import GreaterThanMaximumBoolean from '../boolean/greater-than-minimum.js';
import GreaterThanMaximumError from './throwable/greater-than-minimum.js';
import Callback from '@alirya/function/assert/callback.js';
import Inclusive from '../../inclusive/inclusive.js';

export default function GreaterThanMaximum<Object extends  Readonly<Minimum & Maximum & Inclusive>>(
    object : Readonly<Object>,
    error : (object:Object)=>Error = GreaterThanMaximumError.Parameter
) : asserts object is Object {

    Callback.Parameters(object, GreaterThanMaximumBoolean.Parameter, error);

}
