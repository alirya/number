import LowerThanMaximumString from "../../string/lower-than-maximum-parameters";

export default function LowerThanMaximumParameters(
    minimum : number,
    maximum : number,
    inclusive : boolean,
) : Error {

    return new Error(
        LowerThanMaximumString(minimum, false, maximum, inclusive)
    );
}
