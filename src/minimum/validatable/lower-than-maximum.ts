import LowerThanMaximumParameters, {
    LowerThanMaximumArgument,
    LowerThanMaximumArgumentMessage
} from "./lower-than-maximum-parameter";
import LowerThanMaximumParameter from "./lower-than-maximum-parameters";

namespace LowerThanMaximum {

    export const Parameters = LowerThanMaximumParameters
    export const Parameter = LowerThanMaximumParameter
    export type Argument = LowerThanMaximumArgument
    export type ArgumentMessage<Type extends LowerThanMaximumArgument, MessageT> = LowerThanMaximumArgumentMessage<Type, MessageT>
}

export default LowerThanMaximum;
