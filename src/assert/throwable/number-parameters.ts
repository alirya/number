import NumberType from "../string/number-parameters";

export default function NumberParameters(
    value : any,
    subject ?: string ,
    conversion ?: (value:unknown)=>string
) : Error {

    return new Error(NumberType(false, value, subject, conversion))
}
