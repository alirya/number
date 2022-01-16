import NegativeParameters from './negative-parameters';
import Value from '@alirya/value/value';

export default function NegativeParameter(
    {
        value,
        subject,
    } : Value<number> & {subject ?: string}
) : Error {

    return NegativeParameters(value, subject);
}
