import NegativeType from '../string/negative-parameters';

export default function NegativeParameters(
    value : number,
    subject ?: string
) : Error {

    return new Error(NegativeType(value, false));
}
