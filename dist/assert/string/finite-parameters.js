import ReplaceParameters from "@dikac/t-array/replace-parameters";
export default function FiniteParameters(value, valid, subject = 'value') {
    const strings = [];
    strings.push(subject);
    if (valid) {
        strings.push('is');
    }
    else {
        strings.push('must');
    }
    strings.push('finite number');
    // const sentence = SentencesMust(valid, [subject]);
    //
    // sentence.expect = ['finite number'];
    // sentence.comma.push('expect');
    if (!valid) {
        ReplaceParameters(strings, 2, value => value + ',');
        strings.push('actual', `"${value}"`);
    }
    return strings.join(' ') + '.';
}
//# sourceMappingURL=finite-parameters.js.map