import Value from '@alirya/value/value';
import Validatable from '@alirya/validatable/validatable';
import NaturalParameters from './natural-parameters';

export default function NaturalParameter(
    {
        value,
        valid,
        subject,
    } : Value<number> & Validatable & {subject ?: string}
) : string {

    return NaturalParameters(value, valid, subject);
}
