import NaturalParameters from './natural-parameters';
import Value from '@alirya/value/value';

export default function NaturalParameter(
    {
        value,
        subject,
    } : Value<number> & {subject ?: string}
) : Error {

    return NaturalParameters(value, subject);
}
