/**
 * message for lower validation
 */
import Sentences from "@dikac/t-string/message/sentences";
export default function Lower(valid, value, minimum, inclusive, subject = 'number') {
    const sentence = new Sentences(valid);
    sentence.subject.push(subject);
    sentence.comma.push('expect');
    if (valid) {
        sentence.accept.push(`is lower`);
    }
    else {
        sentence.reject.push(`must lower`);
    }
    if (inclusive) {
        sentence.expect.push(`or equal`);
    }
    sentence.expect.push('than', `"${minimum.toString()}"`);
    sentence.actual.push('actual', `"${value.toString()}"`);
    return sentence.message;
}
//# sourceMappingURL=lower.js.map