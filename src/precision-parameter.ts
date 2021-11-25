import Value from "@dikac/t-value/value";
import PrecisionParameters from "./precision-parameters";

export default function PrecisionParameter(
    {
        value,
        precision,
    } : Value<number> & {precision : number}
) : number {

    return PrecisionParameters(value, precision);
}
