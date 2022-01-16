import NaturalType from '../string/natural-parameters';

export default function NaturalParameters(
    value : number,
    subject ?: string
) : Error {

    return new Error(NaturalType(value, false, subject));
}
