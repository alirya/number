import Minimum from "../../minimum";
import Maximum from "../../../maximum/maximum";
import Inclusive from "../../../inclusive/inclusive";
import Greater from "../../../boolean/greater";
import Function from "@dikac/t-function/function";
import PositiveError from "../../../assert/throwable/positive";
import LowerThanMaximumString from "../../string/lower-than-maximum";

export default function LowerThanMaximum(
    object : Readonly<Minimum & Maximum & Inclusive>,
) : Error {

    return new Error(LowerThanMaximumString({
        valid : false,
        maximum : object.maximum,
        minimum : object.minimum,
        inclusive : object.inclusive,
    }));
}
