import AssertInfinite from '../assert/infinite.js';
import InfiniteError from '../assert/throwable/infinite.js';

export default function Infinite(
    value : number,
    error : (value:number)=> Error = InfiniteError.Parameters
) : number {

     AssertInfinite(value, error);

     return value;
}
