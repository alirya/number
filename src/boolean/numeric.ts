import NumericString from '@alirya/string/boolean/numeric';
import Number from './number';
import String from '@alirya/string/boolean/string';
/**
 * check if {@param value} is number type
 * @param value
 */

export default function Numeric(value : unknown) : value is number|string {

    if(Number(value)) {

        return true;
    }

    if(String(value) && NumericString(value)) {

        return true;
    }

    return false;
}
