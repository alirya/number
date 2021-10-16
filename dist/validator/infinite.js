import InfiniteValidatable from "../validatable/infinite";
export default function Infinite(message) {
    return function (value) {
        return InfiniteValidatable(value, message);
    };
}
//# sourceMappingURL=infinite.js.map