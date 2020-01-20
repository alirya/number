function RandomInteger (maximum : number) : number
function RandomInteger (minimum : number, maximum : number) : number
function RandomInteger (minimum : number, maximum ?: number) : number {

    if (maximum === undefined) {

        maximum = minimum;
        minimum = 0;
    }

    if(minimum > maximum) {

        throw new Error(`minimum(${minimum}) must not greater than maximum(${maximum})`)
    }

    let random = Math.random() * (maximum - minimum + 1);

    return Math.floor(random + minimum);
}

export default RandomInteger;