import PositiveParameters from './positive-parameters';
import Value from '@alirya/value/value';

export default function PositiveParameter(
    {
        value,
        subject,
    } : Value<number> & {subject ?: string}
) : Error {

    return PositiveParameters(value, subject);
}
