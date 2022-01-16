import Value from '@alirya/value/value';
import Validatable from '@alirya/validatable/validatable';
import PositiveParameters from './positive-parameters';

export default function PositiveParameter(
    {
        value,
        valid,
        subject,
    } : Value<number> & Validatable & {subject ?: string}
) : string {

    return PositiveParameters(value, valid, subject);

}

