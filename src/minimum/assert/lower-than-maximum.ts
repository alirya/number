import Minimum from '../../minimum/minimum.js';
import Maximum from '../../maximum/maximum.js';
import LowerThanMaximumBoolean from '../boolean/lower-than-maximum.js';
import LowerThanMaximumError from './throwable/lower-than-maximum.js';
import Callback from '@axiona/function/assert/callback.js';
import Inclusive from '../../inclusive/inclusive.js';

export default function LowerThanMaximum<Object extends Readonly<Minimum & Maximum & Inclusive>>(
    object : Readonly<Object>,
    error : (value:Object)=>Error = LowerThanMaximumError.Parameter
) : asserts object is Object {

    Callback.Parameters(object, LowerThanMaximumBoolean.Parameter, error);

}
