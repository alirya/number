import Minimum from "../../../minimum/minimum";
import Maximum from "../../../maximum/maximum";
import Inclusive from "../../../inclusive/inclusive";
import GreaterThanMinimumParameters from "./greater-than-minimum-parameters";

export default function GreaterThanMinimumParameter(
    {
        maximum, minimum, inclusive
    } : Readonly<Minimum & Maximum & Inclusive>,
) : Error {

    return GreaterThanMinimumParameters(maximum, minimum, inclusive);
}
