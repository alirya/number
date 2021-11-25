import LowerThanMaximumBoolean from "../boolean/lower-than-maximum-parameter";
import LowerThanMaximumError from "./throwable/lower-than-maximum-parameter";
import Callback from "@dikac/t-function/assert/callback-parameters";
export default function LowerThanMaximum(object, error = LowerThanMaximumError) {
    Callback(object, LowerThanMaximumBoolean, error);
}
//# sourceMappingURL=lower-than-maximum.js.map