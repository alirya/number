/**
 * message for between validation
 */
export default function Greater(valid : boolean, value : number, minimum : number, inclusive : boolean) : string {

    let parts : string[] = [];
    parts.push(`value "${value}"`);

    if(valid) {

        parts.push(`is greater`);

    } else {

        parts.push(`must greater`);
    }

    if(inclusive) {

        parts.push('or equal');

    }

    parts.push(`than "${minimum}"`);

    return parts.join(' ');

}
