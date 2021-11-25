import InfiniteParameters, {InfiniteType} from "./infinite-parameters";
import InfiniteParameter, {InfiniteArgument} from "./infinite-parameter";

namespace Infinite {

    export const Parameters = InfiniteParameters
    export const Parameter = InfiniteParameter
    export type Argument<MessageT> = InfiniteArgument<MessageT>
    export type Type<MessageT> = InfiniteType<MessageT>
}

export default Infinite;
