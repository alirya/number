import LowerThanMaximumBoolean from "../boolean/lower-than-maximum";
import LowerThanMaximumError from "./throwable/lower-than-maximum";
import Callback from "@dikac/t-function/assert/callback";
export default function LowerThanMaximum(object, error = LowerThanMaximumError) {
    Callback(object, LowerThanMaximumBoolean, error);
}
//# sourceMappingURL=lower-than-maximum.js.map