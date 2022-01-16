import Integer from './integer';
/**
 * check if {@param number} is positive finite or zero integer
 * @param number
 */

export default function Natural(number : number) : boolean {

    return number >= 0 && number !== Infinity && Integer(number);
}
