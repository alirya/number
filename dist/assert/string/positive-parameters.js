export default function PositiveParameters(value, valid, subject = 'value') {
    const strings = [];
    strings.push(subject);
    if (valid) {
        strings.push('is');
    }
    else {
        strings.push('must');
    }
    strings.push('positive number');
    if (!valid) {
        strings[2] = strings[2] + ',';
        strings.push('actual', `"${value}"`);
    }
    return strings.join(' ') + '.';
}
//# sourceMappingURL=positive-parameters.js.map