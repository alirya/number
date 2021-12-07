import LowerThanMaximumString from "../../string/greater-than-minimum-parameters";

export default function GreaterThanMinimumParameters(
    maximum : number,
    minimum : number,
    inclusive : boolean,
) : Error {

    return new Error(LowerThanMaximumString(maximum, false, minimum, inclusive));
}
