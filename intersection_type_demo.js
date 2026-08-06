// TypeScript 交叉类型
// 使用工具类型
const partialConfig = { host: "localhost" };
const requiredConfig = { host: "localhost", port: 8080 };
const readonlyConfig = { host: "localhost", port: 8080 };
console.log("部分: " + JSON.stringify(partialConfig));
console.log("必填: " + JSON.stringify(requiredConfig));
console.log("只读: " + JSON.stringify(readonlyConfig));
export {};
