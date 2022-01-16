import Value from '@alirya/value/value';
import Validatable from '@alirya/validatable/validatable';
import IntegerParameters from './integer-parameters';

export default function IntegerParameter(
    {
        value,
        valid,
        subject,
    } : Value<number> & Validatable & {subject ?: string}
) : string {

    return IntegerParameters(value, valid, subject);

}
