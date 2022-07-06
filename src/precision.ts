import Value from '@alirya/value/value.js';
export function PrecisionParameters(
    value: number,
    precision : number
) : number {

    let strings = value.toString().split('.');

    if(strings[1] !== undefined) {

        strings[1] = strings[1].substr(0, precision);

        value = parseFloat(strings.join('.'));
    }

    return value;
}

export type PrecisionArgument = Value<number> & {precision : number};

export function PrecisionParameter(
    {
        value,
        precision,
    } : PrecisionArgument
) : number {

    return PrecisionParameters(value, precision);
}


namespace Precision {
    export const Parameters = PrecisionParameters;
    export const Parameter = PrecisionParameter;
}
export default Precision;
