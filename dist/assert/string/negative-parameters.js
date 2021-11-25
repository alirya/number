import ReplaceParameters from "@dikac/t-array/replace-parameters";
export default function NegativeParameters(value, valid, subject = 'value') {
    const strings = [];
    strings.push(subject);
    if (valid) {
        strings.push('is');
    }
    else {
        strings.push('must');
    }
    strings.push('negative number');
    if (!valid) {
        ReplaceParameters(strings, 2, value => value + ',');
        strings.push('actual', `"${value}"`);
    }
    return strings.join(' ') + '.';
}
//# sourceMappingURL=negative-parameters.js.map