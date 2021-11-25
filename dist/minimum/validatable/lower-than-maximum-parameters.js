import LowerThanMaximumParameter from "./lower-than-maximum-parameter";
export default class LowerThanMaximumParameters extends LowerThanMaximumParameter {
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
//# sourceMappingURL=lower-than-maximum-parameters.js.map