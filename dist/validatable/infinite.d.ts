import InfiniteParameters, { InfiniteType } from "./infinite-parameters";
import InfiniteParameter, { InfiniteArgument } from "./infinite-parameter";
declare namespace Infinite {
    const Parameters: typeof InfiniteParameters;
    const Parameter: typeof InfiniteParameter;
    type Argument<MessageT> = InfiniteArgument<MessageT>;
    type Type<MessageT> = InfiniteType<MessageT>;
}
export default Infinite;
