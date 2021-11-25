import GreaterParameters, {GreaterType} from "./greater-parameters";
import GreaterParameter, {GreaterArgument} from "./greater-parameter";

namespace Greater {

    export const Parameters = GreaterParameters
    export const Parameter = GreaterParameter
    export type Argument<ValueT extends number, MessageT> = GreaterArgument<ValueT, MessageT>
    export type Type<ValueT extends number, MessageT> = GreaterType<ValueT, MessageT>
}

export default Greater;
