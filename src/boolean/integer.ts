/**
 * check if {@param number} is infinite
 * @param number
 */
export default function Integer(number : number) : boolean {

    if(isFinite(number)) {

        return number === Math.ceil(number);

    }

    return false;
}

export {Integer as IsInteger};