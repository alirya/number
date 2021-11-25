import Minimum from "../../minimum/minimum";
import Maximum from "../maximum";
import Inclusive from "../../inclusive/inclusive";
import GreaterParameters from "../../boolean/greater-parameters";

export default function GreaterThanMinimumParameters({
    maximum,
    minimum,
    inclusive,
} : Readonly<Minimum & Maximum & Inclusive>) : boolean {

    return GreaterParameters(maximum, minimum, inclusive);
}
