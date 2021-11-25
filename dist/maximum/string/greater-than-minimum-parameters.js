export default function GreaterThanMinimumParameters(maximum, valid, minimum, inclusive) {
    let parts = [];
    parts.push(`maximum "${maximum}"`);
    if (valid) {
        parts.push(`is greater`);
    }
    else {
        parts.push(`must greater`);
    }
    if (inclusive) {
        parts.push('or equal');
    }
    parts.push(`than minimum "${minimum}"`);
    return parts.join(' ') + '.';
}
//# sourceMappingURL=greater-than-minimum-parameters.js.map