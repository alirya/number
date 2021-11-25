import GreaterThanMinimumParameters, { GreaterThanMinimumArgument, GreaterThanMinimumArgumentMessage } from "./greater-than-minimum-parameter";
import GreaterThanMinimumParameter from "./greater-than-minimum-parameters";
declare namespace GreaterThanMinimum {
    const Parameters: typeof GreaterThanMinimumParameters;
    const Parameter: typeof GreaterThanMinimumParameter;
    type Argument = GreaterThanMinimumArgument;
    type ArgumentMessage<Type extends GreaterThanMinimumArgument, MessageT> = GreaterThanMinimumArgumentMessage<Type, MessageT>;
}
export default GreaterThanMinimum;
