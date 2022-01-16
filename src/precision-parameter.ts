import Value from "@alirya/value/value";
import PrecisionParameters from "./precision-parameters";

export default function PrecisionParameter(
    {
        value,
        precision,
    } : Value<number> & {precision : number}
) : number {

    return PrecisionParameters(value, precision);
}
