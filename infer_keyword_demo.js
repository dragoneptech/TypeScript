// TypeScript infer 关键字
const flatValue = "Flattened Value";
console.log("扁平化 Promise: " + flatValue);
// 使用示例
const user = {
    name: "Alice",
    address: { city: "Beijing", zip: "100000" }
};
// user.name = "Bob"; // 错误：只读
console.log("深度只读: " + user.name);
export {};
