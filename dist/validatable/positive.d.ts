import PositiveParameters from "./positive-parameters";
import PositiveParameter, { PositiveArgument } from "./positive-parameter";
declare namespace Positive {
    const Parameters: typeof PositiveParameters;
    const Parameter: typeof PositiveParameter;
    type Argument<MessageT> = PositiveArgument<MessageT>;
}
export default Positive;
