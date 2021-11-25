import LowerThanMaximumString from "../../string/greater-than-minimum-parameters";

export default function GreaterThanMinimumParameters(
    // object : Readonly<Minimum & Maximum & Inclusive>,
    maximum : number,
    minimum : number,
    inclusive : boolean,
) : Error {

    return new Error(LowerThanMaximumString(maximum, false, minimum, inclusive));
}
