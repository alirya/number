import IntegerType from '../string/integer-parameters';

export default function IntegerParameters(
    value : number,
    subject ?: string
) : Error {

    return new Error(IntegerType(value, false, subject));
}
