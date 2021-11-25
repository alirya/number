import GreaterThanMinimumParameter from "./greater-than-minimum-parameter";
export default class GreaterThanMinimumParameters extends GreaterThanMinimumParameter {
    constructor(minimum, maximum, inclusive, message) {
        super({
            minimum,
            maximum,
            inclusive,
            message: ({ minimum, valid, maximum, inclusive }) => {
                return message(minimum, valid, maximum, inclusive);
            }
        });
    }
}
//# sourceMappingURL=greater-than-minimum-parameters.js.map