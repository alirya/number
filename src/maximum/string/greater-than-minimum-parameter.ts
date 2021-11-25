import Minimum from "../../minimum/minimum";
import Maximum from "../maximum";
import Validatable from "@dikac/t-validatable/validatable";
import Inclusive from "../../inclusive/inclusive";
import GreaterThanMinimumParameters from "./greater-than-minimum-parameters";

export default function GreaterThanMinimumParameter({
    maximum,
    valid,
    minimum,
    inclusive,
} : Readonly<Minimum & Maximum & Validatable & Inclusive>) : string {

    return GreaterThanMinimumParameters(maximum, valid, minimum, inclusive);
}
