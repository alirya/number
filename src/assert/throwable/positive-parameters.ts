import PositiveType from "../string/positive-parameters";

export default function PositiveParameters(
    value : number,
    subject ?: string
) : Error {

    return new Error(PositiveType(value, false, subject))
}
