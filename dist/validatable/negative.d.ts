import NegativeParameters from "./negative-parameters";
import NegativeParameter, { NegativeArgument } from "./negative-parameter";
declare namespace Negative {
    const Parameters: typeof NegativeParameters;
    const Parameter: typeof NegativeParameter;
    type Argument<MessageT> = NegativeArgument<MessageT>;
}
export default Negative;
