import Minimum from "../../minimum";
import Maximum from "../../../maximum/maximum";
import Inclusive from "../../../inclusive/inclusive";
import LowerThanMaximumParameters from "./lower-than-maximum-parameters";

export default function LowerThanMaximumParameter(
    {
        minimum,
        maximum,
        inclusive,
    } : Readonly<Minimum & Maximum & Inclusive>,
) : Error {

    return LowerThanMaximumParameters(minimum, maximum, inclusive);
}
