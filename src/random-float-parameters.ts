import GreaterParameters from "./boolean/greater-parameters";
import LowerParameters from "./boolean/lower-parameters";
import LowerThanMaximum from "./minimum/assert/lower-than-maximum";

export default  function RandomFloatParameters (
    minimum : number,
    maximum : number,
    inclusive : boolean = true
) : number {

    LowerThanMaximum({
        maximum : maximum,
        minimum : minimum,
        inclusive : inclusive,
    });

    if((maximum - minimum) === 0) {

        if(!inclusive) {

            throw new Error(`minimum (${minimum}) and maximum (${maximum}) different must greater than 0 in exclusive mode`);
        }
    }

    let random = Math.random() * (maximum - minimum);

    let result = random + minimum;

    if(inclusive) {

        return result;

    } else {

        if(GreaterParameters(result, minimum, inclusive) && LowerParameters(result, maximum, inclusive)) {

            return result;

        } else {

            return  RandomFloatParameters(minimum, maximum, inclusive);
        }

    }
}


