/**
 * message for between validation
 */
export default function Lower(value : number, maximum:number, inclusive : boolean, valid : boolean) : string {

    let parts : string[] = [];
    parts.push(`value "${value}"`);

    if(valid) {

        parts.push(`is lower`);

    } else {

        parts.push(`must lower`);
    }

    if(inclusive) {

        parts.push('or equal');
    }

    parts.push(`than "${maximum}"`);

    return parts.join(' ');

}
