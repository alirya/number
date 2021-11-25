import LowerParameters from "./lower-parameters";
import LowerParameter, {LowerArgument} from "./lower-parameter";

namespace Lower {

    export const Parameters = LowerParameters
    export const Parameter = LowerParameter
    export type Argument<MessageT> = LowerArgument<MessageT>
}

export default Lower;
