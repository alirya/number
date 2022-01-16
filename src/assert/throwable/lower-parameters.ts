import LowerType from '../string/lower-parameters';

export default function LowerParameters(
    value : number,
    minimum : number,
    inclusive : boolean,
    subject ?: string
) : Error {

    return new Error(LowerType(value, false, minimum, inclusive));
}
