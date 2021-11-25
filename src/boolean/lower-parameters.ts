/**
 * check if {@param value} is lower than {@param maximum} or equal if {@param inclusive} is true
 *
 * @param value
 * @param maximum
 * @param inclusive
 */
export default function LowerParameters(
    value : number,
    maximum : number,
    inclusive : boolean = false
) : boolean {

    return inclusive ? value <= maximum : value < maximum;
}
