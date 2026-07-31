"use strict";
// TypeScript 泛型
// 泛型默认值与泛型约束结合使用
function defaultValue(arg) {
    return arg;
}
// 使用带默认值的泛型函数
let result1 = defaultValue("hello"); // 推断为 string 类型
console.log(result1); // 输出: hello
// let result2 = defaultValue(42);      // 推断为 number 类型
// console.log(result2); // 输出: 42
