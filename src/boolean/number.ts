/**
 * check if {@param value} is number type
 * @param value
 */
export default function Number(value : unknown) : value is number {

    return typeof value === 'number';
}
