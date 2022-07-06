import Sum from './sum.js';

export default function Average(...numbers : ReadonlyArray<number>) : number {

    return Sum(...numbers) / numbers.length;

}
