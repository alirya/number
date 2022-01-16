import FiniteType from '../string/finite-parameters';

export default function FiniteParameters(
    value : number,
    subject ?: string
) : Error {

    return new Error(FiniteType(value, false, subject));
}
