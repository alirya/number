import GreaterParameters, { GreaterType } from "./greater-parameters";
import GreaterParameter, { GreaterArgument } from "./greater-parameter";
declare namespace Greater {
    const Parameters: typeof GreaterParameters;
    const Parameter: typeof GreaterParameter;
    type Argument<ValueT extends number, MessageT> = GreaterArgument<ValueT, MessageT>;
    type Type<ValueT extends number, MessageT> = GreaterType<ValueT, MessageT>;
}
export default Greater;
