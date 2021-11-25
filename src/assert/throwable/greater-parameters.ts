import GreaterType from "../string/greater-parameters";

export default function GreaterParameters(
    number : number,
    minimum : number,
    inclusive : boolean,
    subject ?: string
) : Error {

    return new Error(GreaterType(number, false, minimum, inclusive, subject))
}
