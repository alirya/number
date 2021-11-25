import NegativeParameters from "./negative-parameters";
import NegativeParameter, {NegativeArgument} from "./negative-parameter";

namespace Negative {

    export const Parameters = NegativeParameters
    export const Parameter = NegativeParameter
    export type Argument<MessageT> = NegativeArgument<MessageT>
}

export default Negative;
