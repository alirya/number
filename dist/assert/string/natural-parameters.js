export default function NaturalParameters(value, valid, subject = 'value') {
    const strings = [];
    strings.push(subject);
    if (valid) {
        strings.push('is');
    }
    else {
        strings.push('must');
    }
    strings.push('natural number');
    // const sentence = SentencesMust(valid, [subject]);
    //
    // sentence.expect = ['natural number'];
    // sentence.comma.push('expect');
    if (!valid) {
        strings.push('actual', `"${value}"`);
    }
    return strings.join(' ') + '.';
}
//# sourceMappingURL=natural-parameters.js.map