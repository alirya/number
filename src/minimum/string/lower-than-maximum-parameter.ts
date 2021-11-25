import Minimum from "../../minimum/minimum";
import Maximum from "../../maximum/maximum";
import Validatable from "@dikac/t-validatable/validatable";
import Inclusive from "../../inclusive/inclusive";
import LowerThanMaximumParameters from "./lower-than-maximum-parameters";

export default function LowerThanMaximumParameter({
   minimum,
   valid,
   maximum,
   inclusive,
} : Readonly<Minimum & Maximum & Validatable & Inclusive>) : string {

    return LowerThanMaximumParameters(minimum, valid, maximum, inclusive);
}
