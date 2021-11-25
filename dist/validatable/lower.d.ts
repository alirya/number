import LowerParameters, { LowerType } from "./lower-parameters";
import LowerParameter, { LowerArgument } from "./lower-parameter";
declare namespace Lower {
    const Parameters: typeof LowerParameters;
    const Parameter: typeof LowerParameter;
    type Argument<ValueT extends number, MessageT> = LowerArgument<ValueT, MessageT>;
    type Type<ValueT extends number, MessageT> = LowerType<ValueT, MessageT>;
}
export default Lower;
