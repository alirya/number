import NanType from '../string/nan-parameters';

export default function NanParameters(
    value : number,
    subject ?: string
) : Error {

    return new Error(NanType(value, false, subject));
}
