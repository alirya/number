import NanType from "../string/nan-parameters";
export default function NanParameters(value, subject) {
    return new Error(NanType(value, false, subject));
}
//# sourceMappingURL=nan-parameters.js.map