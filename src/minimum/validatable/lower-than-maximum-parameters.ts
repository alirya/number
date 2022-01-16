import Dynamic from "@alirya/validator/message/function/validatable-parameters";
import LowerThanMaximumParameter, {LowerThanMaximumArgument} from "./lower-than-maximum-parameter";

export default class LowerThanMaximumParameters<MessageT>
    extends LowerThanMaximumParameter<MessageT, LowerThanMaximumArgument>
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
