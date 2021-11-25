import NanParameters from "./nan-parameters";
import NanParameter from "./nan-parameter";
declare namespace Nan {
    const Parameters: typeof NanParameters;
    const Parameter: typeof NanParameter;
}
export default Nan;
