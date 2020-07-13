import NegativeType from "../string/negative";

export default function Integer(number : number) : Error {

    return new Error(NegativeType(number, false))
}
