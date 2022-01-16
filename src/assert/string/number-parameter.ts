import Value from '@alirya/value/value';
import Validatable from '@alirya/validatable/validatable';
import NumberParameters from './number-parameters';

export default function NumberParameter(
    {
        value,
        valid,
        subject,
        conversion,
    } : Value &
        Validatable & {
        subject ?: string,
        conversion ?: (value:unknown)=>string
    }
) : string {

    return NumberParameters(value, valid, subject, conversion);
}
