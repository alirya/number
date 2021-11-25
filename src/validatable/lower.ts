import LowerParameters, {LowerType} from "./lower-parameters";
import LowerParameter, {LowerArgument} from "./lower-parameter";

namespace Lower {

    export const Parameters = LowerParameters
    export const Parameter = LowerParameter
    export type Argument<ValueT extends number, MessageT> = LowerArgument<ValueT, MessageT>
    export type Type<ValueT extends number, MessageT> = LowerType<ValueT, MessageT>
}

export default Lower;
