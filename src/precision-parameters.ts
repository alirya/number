export default function PrecisionParameters(
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
