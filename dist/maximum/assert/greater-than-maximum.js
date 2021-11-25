import GreaterThanMaximumBoolean from "../boolean/greater-than-minimum-parameter";
import GreaterThanMaximumError from "./throwable/greater-than-minimum-parameter";
import Callback from "@dikac/t-function/assert/callback-parameters";
export default function GreaterThanMaximum(object, error = GreaterThanMaximumError) {
    Callback(object, GreaterThanMaximumBoolean, error);
}
//# sourceMappingURL=greater-than-maximum.js.map