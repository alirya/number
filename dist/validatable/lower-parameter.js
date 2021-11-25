import LowerParameters from "./lower-parameters";
export default class LowerParameter extends LowerParameters {
    constructor({ value, maximum, inclusive, message, }) {
        super(value, maximum, inclusive, (value, valid, maximum, inclusive) => message({ value, valid, maximum, inclusive }));
    }
}
//# sourceMappingURL=lower-parameter.js.map