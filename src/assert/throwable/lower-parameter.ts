import LowerParameters from './lower-parameters';
import Value from '@alirya/value/value';
import Minimum from '../../minimum/minimum';
import Inclusive from '../../inclusive/inclusive';

export default function LowerParameter(
    {
        value,
        minimum,
        inclusive,
        subject,
    } : Value<number> & Minimum & Inclusive & {subject ?: string}
) : Error {

    return LowerParameters(value, minimum, inclusive, subject);
}
