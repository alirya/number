import GreaterParameters from "../../boolean/greater-parameters";

export default function LowerThanMaximumParameters(
    maximum : number,
    minimum : number,
    inclusive : boolean
) : boolean {

    return GreaterParameters(maximum, minimum, inclusive);
}
