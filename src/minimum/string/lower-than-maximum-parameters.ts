export default function LowerThanMaximumParameters(
    minimum : number,
    valid : boolean,
    maximum : number,
    inclusive : boolean,
) : string {

    let parts : string[] = [];

    parts.push(`minimum "${maximum}"`);

    if(valid) {

        parts.push(`is lower`);

    } else {

        parts.push(`must lower`);
    }

    if(inclusive) {

        parts.push('or equal');
    }

    parts.push(`than maximum "${minimum}"`);

    return parts.join(' ') + '.';
}
