import IntegerParameters from "./integer-parameters";
import IntegerParameter, {IntegerArgument} from "./integer-parameter";

namespace Integer {

    export const Parameters = IntegerParameters
    export const Parameter = IntegerParameter
    export type Argument<MessageT> = IntegerArgument<MessageT>
}

export default Integer;
