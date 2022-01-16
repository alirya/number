import NanParameters from './nan-parameters';
import Value from '@alirya/value/value';

export default function NanParameter(
    {
        value,
        subject,
    } : Value<number> & {subject ?: string}
) : Error {

    return NanParameters(value, subject);
}
