import Minimum from "../../minimum/minimum";
import Maximum from "../../maximum/maximum";
import LowerThanMaximumBoolean from "../boolean/lower-than-maximum-parameter";
import LowerThanMaximumError from "./throwable/lower-than-maximum-parameter";
import Callback from "@dikac/t-function/assert/callback-parameters";
import Inclusive from "../../inclusive/inclusive";

export default function LowerThanMaximum<Object extends Readonly<Minimum & Maximum & Inclusive>>(
    object : Readonly<Object>,
    error : (value:Object)=>Error = LowerThanMaximumError
) : asserts object is Object {

    Callback(object, LowerThanMaximumBoolean, error);

}
