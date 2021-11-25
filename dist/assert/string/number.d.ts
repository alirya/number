import NumberParameters from "./number-parameters";
import NumberParameter from "./number-parameter";
declare namespace Number {
    const Parameters: typeof NumberParameters;
    const Parameter: typeof NumberParameter;
}
export default Number;
