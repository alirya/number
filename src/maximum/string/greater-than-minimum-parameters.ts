export default function GreaterThanMinimumParameters(
    maximum : number,
    valid : boolean,
    minimum : number,
    inclusive : boolean,
) : string {

    let parts : string[] = [];
    parts.push(`maximum "${maximum}"`);

    if(valid) {

        parts.push(`is greater`);

    } else {

        parts.push(`must greater`);
    }

    if(inclusive) {

        parts.push('or equal');
    }

    parts.push(`than minimum "${minimum}"`);

    return parts.join(' ') + '.';
}
