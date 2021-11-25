export default function LowerThanMaximumParameters(minimum, valid, maximum, inclusive) {
    let parts = [];
    parts.push(`minimum "${maximum}"`);
    if (valid) {
        parts.push(`is lower`);
    }
    else {
        parts.push(`must lower`);
    }
    if (inclusive) {
        parts.push('or equal');
    }
    parts.push(`than maximum "${minimum}"`);
    return parts.join(' ') + '.';
}
//# sourceMappingURL=lower-than-maximum-parameters.js.map