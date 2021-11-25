import GreaterParameters from "./greater-parameters";
export default class GreaterParameter extends GreaterParameters {
    constructor({ value, minimum, inclusive, message, }) {
        super(value, minimum, inclusive, (value, valid, minimum, inclusive) => message({ value, valid, minimum, inclusive }));
    }
}
//# sourceMappingURL=greater-parameter.js.map