import GreaterThanMinimumParameters, {
    GreaterThanMinimumArgument,
    GreaterThanMinimumArgumentMessage
} from "./greater-than-minimum-parameter";
import GreaterThanMinimumParameter from "./greater-than-minimum-parameters";

namespace GreaterThanMinimum {

    export const Parameters = GreaterThanMinimumParameters
    export const Parameter = GreaterThanMinimumParameter
    export type Argument = GreaterThanMinimumArgument
    export type ArgumentMessage<Type extends GreaterThanMinimumArgument, MessageT> = GreaterThanMinimumArgumentMessage<Type, MessageT>
}

export default GreaterThanMinimum;
