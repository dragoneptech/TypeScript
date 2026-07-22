"use strict";
// TypeScript vs JavaScript 对比
// TypeScript 和 JavaScript 是前端开发中两个最重要的语言，理解它们之间的区别对于现代 Web 开发至关重要
// JavaScript 是 Web 的原生脚本语言，而 TypeScript 是 JavaScript 的超集，添加了类型系统和其他高级特性
// JavaScript - 变量类型可以随时改变
// var message = "Hello, World!";  // 这在 JavaScript 中是允许的，但是在TypeScript中需要显式声明类型
// var message: any = "Hello, World!";
// console.log(message);
// message = 123; // 这在 JavaScript 中是允许的
// console.log(message);
// message = true; // 这在 JavaScript 中也是允许的
// console.log(message);
// 运行前不知道变量类型
// function greet(name) {  // 这在 JavaScript 中是允许的，但是在TypeScript中需要显式声明类型
// function greet(name: any) {
//     return "Hello, " + name;
// }
// console.log(greet("Alice"));
// console.log(greet(123));
// TypeScript - 声明时指定类型
// var message: string = "Hello";
// message = 123;    // 编译错误：Type 'number' is not assignable to type 'string'
// 函数参数和返回值类型明确
// function greet(name: string): string {
//     return "Hello, " + name;
// }
// 类型错误会在编译时发现
// greet(123);  // 编译错误：Argument of type 'number' is not assignable to parameter of type 'string'
// interface User {
//     name: string;
//     age: number;
// }
// function createUser(name: string, age: number): User {
//     return {
//         name,
//         age
//     };
// }
// var user = createUser("Alice", 30);
// console.log(user);
// TypeScript 自动推断类型
// var num = 10;          // 推断为 number
// var str = "hello";    // 推断为 string
// var isActive = true;  // 推断为 boolean
// // 函数重载
// function add(a:number,b:number):number;
// function add(a:string,b:string):string;
// function add(
//     a:number|string,
//     b:number|string
// ):number|string {
//     if (typeof a === "number" && typeof b === "number") {
//         return a+b;
//     }
//     if (typeof a === "string" && typeof b === "string") {
//         return a+b;
//     }
//     throw new Error("Invalid arguments");
// }
// var result = add(1, 2);  // result 类型为 number
// var result2 = add("hello", "world");  // result2 类型为 string
// 选择 TypeScript 的理由
// 为什么选择 TypeScript：
// 编译时错误检测，提前发现 bug
// 更好的代码可读性和可维护性
// 强大的 IDE 智能提示
// 安全的重构
// 现代前端框架的标配（React、Vue、Angular）
// node ts_vs_js.ts 可以运行
// tsc ts_vs_js.ts 编译报错
// function greet(name) {  //  Parameter 'name' implicitly has an 'any' type
//     return "Hello, " + name;
// }
// console.log(greet("Alice"));
// @ts-nocheck
// after using @ts-nocheck, JS code can be written without type annotations
function greet(name) {
    return "Hello, " + name;
}
console.log(greet("Alice"));
console.log(greet(123));
