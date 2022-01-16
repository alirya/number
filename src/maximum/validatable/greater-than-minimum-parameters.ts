import Dynamic from "@alirya/validator/message/function/validatable-parameters";
import GreaterThanMinimumParameter, {GreaterThanMinimumArgument} from "./greater-than-minimum-parameter";

export default class GreaterThanMinimumParameters<MessageT>
    extends GreaterThanMinimumParameter<MessageT, GreaterThanMinimumArgument>
{

    constructor(
        minimum : number,
        maximum : number,
        inclusive : boolean,
        message : Dynamic<number, MessageT, [maximum:number, inclusive:boolean]>
    ) {

        super({
            minimum,
            maximum,
            inclusive,
            message :({minimum, valid, maximum, inclusive}) => {

                return message(minimum, valid, maximum, inclusive)
            }
        })

    }
}
