import Value from '@alirya/value/value';
import Validatable from '@alirya/validatable/validatable';
import Template from '@alirya/string/function/template';


function NumericParametersTemplate({
    subject,
    valid
} : Record<'subject'|'valid', string>) : string {

    return `${subject} ${valid} number or numeric string.`;
}

function NumericParametersTemplateValue({
        subject,
        valid,
        value
    } : Record<'subject'|'valid'|'value', string>) : string {

    return `${subject} ${valid} number or numeric string, actual ${value}.`;
}

export function NumericParameters(
    value : unknown,
    valid : boolean,
    subject : string = 'value',
    conversion ?: (value:unknown)=>string
) : string {

    if(conversion) {

        return NumericParametersTemplateValue({
            valid : valid ? 'is' : 'is not',
            subject,
            value : conversion(value),
        });

    } else {

        return NumericParametersTemplate({
            valid : valid ? 'is' : 'is not',
            subject
        });
    }
}


export function NumericParameter(
    {
        value,
        valid,
        subject,
        conversion,
    } : Value &
        Validatable & {
        subject ?: string,
        conversion ?: (value:unknown)=>string
    }
) : string {

    return NumericParameters(value, valid, subject, conversion);
}


namespace Numeric {
    export const Parameters = NumericParameters;
    export const Parameter = NumericParameter;
}
export default Numeric;
