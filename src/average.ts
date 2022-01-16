import Sum from './sum';

export default function Average(...numbers : ReadonlyArray<number>) : number {

    return Sum(...numbers) / numbers.length;

}
