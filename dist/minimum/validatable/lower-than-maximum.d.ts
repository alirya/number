import LowerThanMaximumParameters, { LowerThanMaximumArgument, LowerThanMaximumArgumentMessage } from "./lower-than-maximum-parameter";
import LowerThanMaximumParameter from "./lower-than-maximum-parameters";
declare namespace LowerThanMaximum {
    const Parameters: typeof LowerThanMaximumParameters;
    const Parameter: typeof LowerThanMaximumParameter;
    type Argument = LowerThanMaximumArgument;
    type ArgumentMessage<Type extends LowerThanMaximumArgument, MessageT> = LowerThanMaximumArgumentMessage<Type, MessageT>;
}
export default LowerThanMaximum;
