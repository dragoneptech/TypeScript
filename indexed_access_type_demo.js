// TypeScript 索引类型与 keyof 关键字
// 实际应用：函数重载
function getElement(arr, index
// ): T[number] | undefined {
) {
    return index < arr.length ? arr[index] : undefined;
}
const tuple = ["hello", 123, true];
const arr = ["a", "b", "c"];
console.log("元组元素[0]: " + getElement(tuple, 0));
console.log("数组元素[1]: " + getElement(arr, 1));
export {};
