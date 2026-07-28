"use strict";
// JavaScript 中 this 有三种常见情况：
// 1. 普通函数调用中的 this
// 2. 对象方法调用中的 this
// 3. 顶层代码中的 this
// 1. 普通函数调用：严格模式下 this = undefined
// function test(this: any): any {
// // function test(this: void): void {
//     return this;
// }
// console.log(test());  // undefined in strict mode
// 普通函数调用：非严格模式下 this = window (浏览器) 或 global (Node.js)，也就是 this === globalThis
// console.log(test() === globalThis); // false in strict mode, true in non-strict mode
// 2. 对象方法调用：this = 调用对象
// // const obj: { test(): any } = {
// const obj = {
//     test() {
//         return this;
//     }
// }
// console.log(obj.test() === obj); // true, 与严格模式无关
// 3. 顶层代码中的 this
// 模块顶层代码（top-level code）
// console.log(this);
// console.log(globalThis);
// 在浏览器 Script 中
// this 指向 window 对象
// globalThis 指向 window 对象
// 顶层 this 是由执行环境决定的，不属于函数调用规则
// console.log(this === globalThis); // true
// 在 Node.js 中 （CommonJS）
// Node.js 默认使用 CommonJS 模块系统，顶层 this 指向 module.exports 对象，而 globalThis 指向全局对象 global
// 使用 node 直接执行以下代码 (与是否严格模式无关)：
// console.log(this === globalThis); // false
// console.log(this === module.exports); // true
// console.log(this);  // {}
// console.log(module.exports);  // {}
// console.log(globalThis === global);  // true
// 在 Node.js 中 （ES Module）
// 创建 this_demo.mjs 文件，内容如下：
// Node.js ES Module 模块系统，顶层 this 指向 undefined，而 globalThis 指向全局对象 global
// 使用 node 直接执行以下代码 (与是否严格模式无关)：
// console.log(this === globalThis); // false
// console.log(this === undefined); // true
// console.log(this);  // undefined
// // console.log(module.exports);  // {}  ESM 模块中没有 module.exports
// console.log(globalThis === global);  // true
// Bound methods in classes
// class Car {
//     constructor() {
//         // Bind sayBye but not sayHi to show the difference
//         this.sayBye = this.sayBye.bind(this);
//     }
//     sayHi() {
//         console.log(`Hello from ${this.name}`);
//     }
//     sayBye() {
//         console.log(`Bye from ${this.name}`);
//     }
//     get name() {
//         return "Ferrari";
//     }
// }
// class Bird {
//     get name() {
//         return "Tweety";
//     }
// }
// const car = new Car();
// const bird = new Bird();
// // The value of 'this' in methods depends on their caller
// car.sayHi(); // Hello from Ferrari
// bird.sayHi = car.sayHi;
// bird.sayHi(); // Hello from Tweety
// // For bound methods, 'this' doesn't depend on the caller
// bird.sayBye = car.sayBye;
// bird.sayBye(); // Bye from Ferrari
// this with a getter or setter
function sum() {
    return this.a + this.b + this.c;
}
const o = {
    a: 1,
    b: 2,
    c: 3,
    get average() {
        return (this.a + this.b + this.c) / 3;
    },
};
Object.defineProperty(o, "sum", {
    get: sum,
    enumerable: true,
    configurable: true,
});
console.log(o.average, o.sum); // 2 6
