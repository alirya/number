import Value from '@alirya/value/value';
import Validatable from '@alirya/validatable/validatable';
import NegativeParameters from './negative-parameters';

export default function NegativeParameter(
    {
        value,
        valid,
        subject,
    } : Value<number> & Validatable & {subject ?: string}
) : string {

    return NegativeParameters(value, valid, subject);

}

