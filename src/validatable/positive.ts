import PositiveParameters from "./positive-parameters";
import PositiveParameter, {PositiveArgument} from "./positive-parameter";

namespace Positive {

    export const Parameters = PositiveParameters
    export const Parameter = PositiveParameter
    export type Argument<MessageT> = PositiveArgument<MessageT>
}

export default Positive;
