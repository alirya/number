/**
 * check if {@param value} is greater than {@param minimum} or equal if {@param inclusive} is true
 *
 * @param value
 * @param minimum
 * @param inclusive
 */
export default function GreaterParameters(value, minimum, inclusive = false) {
    return inclusive ? value >= minimum : value > minimum;
}
//# sourceMappingURL=greater-parameters.js.map