/**
 * check if {@param value} is lower than {@param maximum} or equal if {@param inclusive} is true
 *
 * @param value
 * @param maximum
 * @param inclusive
 */
export default function LowerParameters(value, maximum, inclusive = false) {
    return inclusive ? value <= maximum : value < maximum;
}
//# sourceMappingURL=lower-parameters.js.map