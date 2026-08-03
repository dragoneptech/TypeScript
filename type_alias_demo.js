"use strict";
// TypeScript type 别名
// 使用映射类型别名
const readonlyUser = { name: "Alice", age: 25 };
// readonlyUser.name = "Bob"; // 错误：只读属性不能修改
const partialUser = { name: "Bob" };
console.log("只读用户: " + JSON.stringify(readonlyUser));
console.log("部分用户: " + JSON.stringify(partialUser));
