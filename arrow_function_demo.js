"use strict";
// TypeScript 箭头函数与 this
// 箭头函数（Arrow Function）是 ES6 引入的重要特性，也是 TypeScript 中的常用语法
// 箭头函数的一个重要特点是它们不会创建自己的 this，而是从外层作用域继承 this
// 与普通函数最大的区别是，箭头函数不绑定自己的 this，而是捕获定义时所在上下文的 this
// 普通函数
// setTimeout(function() {
//     console.log(this.name);
// }, 100);
// this 指向 window/undefined
// 箭头函数
// setTimeout(() => {
//     console.log(this.name);
// }, 100);
// this 指向定义时的上下文
// 箭头函数语法
// 多参数
// const add: (a: number, b: number) => number = (a, b) => a + b;
// const add = (a: number, b: number): number => a + b;
// 单参数
// const square = (x: number): number => x * x;
// const square: (x: number) => number = x => x * x;
// 无参数
// const getRandom = (): number => Math.random();
// const getRandom: () => number = () => Math.random();
// 概念说明：箭头函数使用 => 语法定义，它不绑定自己的 this，而是继承外层作用域的 this
// 箭头函数基础
// 箭头函数提供更简洁的函数定义语法
// 它可以省略大括号和 return 关键字（当函数体是单个表达式时）
// 传统函数定义
// const add1 = function(a: number, b: number): number {
//     return a + b;
// }
// 箭头函数：单行函数可以省略大括号和 return
// const add2 = (a: number, b: number): number => a + b;
// const add2: (a: number, b: number) => number = (a, b) => a + b;
// 单参数可以省略括号
// tsc --noImplicitAny false
// const double = n => n * 2;
// 采用如下类型注解，单参不可以省略括号
// const double = (n: number): number => n * 2;
// 采用如下类型注解，单参可以省略括号
// const double: (n: number) => number = n => n * 2;
// 无参数函数
// const getRandom = (): number => Math.random();
// const getRandom: () => number = () => Math.random();
// console.log("add1: " + add1(1, 2));
// console.log("add2: " + add2(3, 4));
// console.log("double: " + double(5));
// console.log("random: " + getRandom().toFixed(2));
// 语法说明：当只有单个参数时，括号可以省略；但没有参数或多于一个参数时，必须使用括号
// 如果采用类型注解，括号可能不能省略
// 箭头函数与 this
// 箭头函数最核心的特性是不绑定自己的 this
// 它会捕获定义时所在外层作用域的 this，并保持不变
// 这解决了普通函数中 this 指向混乱的问题
// 使用普通函数
// tsc noImplicitThis false
// function Person1() {
//     this.name = "Alice";
//     console.log(this)  // 输出 Person1 实例
//     console.log(this.name);  // 输出 "Alice"
//     // 普通函数会创建自己的 this
//     // 在 setTimeout 回调中，this 指向 window（浏览器）或 undefined（严格模式）
//     setTimeout(function() {
//         console.log("普通函数: " + this.name);  // this.name 为 undefined
//     }, 100);
// }
// 使用箭头函数
// function Person2() {
//     this.name = "Bob";
//     console.log(this);  // 输出 Person2 实例
//     console.log(this.name);  // 输出 "Bob"
//     // 箭头函数不创建自己的 this
//     // 它捕获外层的 this，所以能正确访问到 name
//     setTimeout(() => {
//         console.log("箭头函数: " + this.name);  // this.name 为 "Bob"
//     }, 100);
// }
// 测试
// new Person1();
// new Person2();
// class Person1 {
//     name: string;
//     constructor(name: string) {
//         this.name = name;
//     };
//     setTimeout(callback: () => void, delay: number): void {
//         setTimeout(callback, delay);
//         // console.log("普通函数 this: " + this.name);
//     };
//     // setTimeout = (callback: () => void, delay: number): void => {
//     //     setTimeout(callback, delay);
//     //     console.log("箭头函数 this: " + this.name);
//     // };
// }
// const p1 = new Person1("Alice Wang");
// p1.setTimeout(() => {
//     // console.log("箭头函数: " + this.name);  // this 指向 window or undefined
// }, 100)
// p1.setTimeout(() => {
//     console.log("箭头函数: " + p1.name);
// }, 100)
// p1.setTimeout(function() {
//     console.log("普通函数: " + this.name);  // this 指向 window or undefined
// }, 100)
// p1.setTimeout(function() {
//     console.log("普通函数: " + this.name);
// }.bind(p1), 100)
// 关键区别：普通函数的 this 在调用时确定，箭头函数的 this 在定义时确定。这是两者最核心的区别
// 类中的箭头函数
// 在 TypeScript 类中，可以使用箭头函数作为类的方法或属性
// 这样可以确保方法被传递或作为回调使用时，this 仍然指向类的实例
// 定义计数器类
class Counter {
    // 计数器的当前值
    count = 0;
    // 使用箭头函数作为类属性
    // 每次创建实例时，都会创建一个新的函数
    // this 指向实例
    increment = () => {
        this.count++;
        console.log("当前计数: " + this.count);
    };
    // // 普通方法
    // decrement() {
    //     this.count--;
    //     console.log("当前计数: " + this.count);
    // }
    // 箭头方法
    decrement = () => {
        this.count--;
        console.log("当前计数: " + this.count);
    };
}
// 创建计数器实例
const counter = new Counter();
// 调用箭头函数方法
counter.increment();
counter.increment();
// 调用普通方法
counter.decrement();
counter.decrement();
// 权衡：箭头函数属性会在每个实例中创建新函数，可能增加内存开销
// 但当方法需要作为回调传递时，这是最好的选择
// 回调函数中的 this
// 箭头函数在数组方法（map、filter、reduce 等）的回调中特别有用
// 它确保回调内部可以正确访问外层的 this
// 定义处理器对象
// 定义处理器对象
// var handler = {
//     // 处理器名称
//     name: "Handler",
//     // 数字数组
//     numbers: [1, 2, 3],
//     // 处理方法
//     processAll: function() {
//     // processAll: () => {  // error TS7041: The containing arrow function captures the global value of 'this'
//         // 使用箭头函数的回调
//         // 箭头函数捕获外层的 this，所以可以正确访问 this.name
//         this.numbers.forEach((n) => {
//             console.log(this.name + ": " + n);
//         });
//     }
// };
// 调用处理方法
// handler.processAll();
// 最佳实践：在类的回调方法、数组方法的回调、事件处理函数中，优先使用箭头函数以避免 this 问题
// 箭头函数的类型
// TypeScript 中箭头函数的类型注解使用不同的语法
// 使用 => 而不是冒号来定义函数类型
// 直接定义箭头函数类型
// (a: number, b: number) => number 表示接受两个 number 参数，返回 number
// const add: (a: number, b: number) => number = (a, b) => a + b;
// 使用接口定义箭头函数类型
// 这种方式更适合在接口或类型别名中复用
// interface MathOperation {
//     // 定义函数签名
//     (a: number, b: number): number;
// }
// 使用接口类型
// const multiply: MathOperation = (a, b) => a * b;
// console.log("加法: " + add(2, 3));
// console.log("乘法: " + multiply(4, 5));
// 接口定义箭头函数类型
// interface AddFunction {
//     (a: number, b: number): number;
// }
// const add: AddFunction = (a, b) => a + b;
// const multiply: AddFunction = (x, y) => x * y;
// console.log("加法: " + add(2, 3));
// console.log("乘法: " + multiply(4, 5));
// 接口属性定义箭头函数
// interface Person {
//     name: string;
//     sayHello: () => void;
// }
// const person: Person = {
//     name: "Alice",
//     // sayHello: () => {
//     //     console.log("Hello, " + person.name);
//     //     // console.log("Hello, " + this.name);
//     //     // Error: The containing arrow function captures the global value of 'this'
//     //     // console.log("Hello, " + Person.name);
//     //     // Error: 'Person' only refers to a type, but is being used as a value here
//     // }
//     sayHello: function() {
//         console.log("Hello, " + this.name);
//     }
// };
// person.sayHello();
// 注意：箭头函数类型的语法是 (params) => returnType，不是传统的 (params): returnType
// 除非是接口定义箭头函数类型才使用 (params): returnType 语法
// 接口属性定义箭头函数仍然使用 (params) => returnType 语法，函数名: (params) => returnType
// (params): returnType 语法仅在接口定义函数签名时使用  
// 何时使用箭头函数
// 箭头函数虽然简洁，但并非所有场景都适用
// 了解何时使用箭头函数可以写出更好的代码
// 需要保持 this 上下文时：如回调函数、事件处理、数组方法
// 简单的一行函数：如 map、filter、reduce 的回调
// 类方法需要传递时：作为回调传递给其他函数
// 警告：不要在需要动态 this 的场景（如事件处理函数中需要获取事件目标）使用箭头函数，因为此时 this 已经被固定
// 注意事项
// 不绑定 arguments：箭头函数不绑定自己的 arguments 对象
// 不能用作构造函数：不能使用 new 关键字调用箭头函数
// 不能用作方法：在对象字面量中作为方法时，this 可能不符合预期
// 适合回调：在需要保持 this 上下文的场景优先使用
// 最佳实践：根据场景选择：需要 this 绑定时用箭头函数，需要动态 this 时用普通函数
// 总结
// 箭头函数是现代 JavaScript/TypeScript 开发中不可或缺的特性。
// 语法简洁：使用 => 语法
// 不绑定 this：捕获定义时的上下文
// 适合回调：数组方法、事件处理等场景
// 类中使用：箭头属性方法解决传递问题
// 类型注解：使用 => 语法定义类型
// 建议：在 TypeScript 开发中，充分利用箭头函数的 this 绑定特性，可以写出更安全、更易维护的代码
// 箭头函数和普通函数的 this 指向完全不同：
// 普通函数的 this 是动态的（运行时决定），而箭头函数的 this 是静态的（定义时决定）
// 可以参考官方的 MDN Web Docs 了解更多底层细节
// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/this
// 普通函数的 this（运行时决定）
// 谁调用就指向谁：如果通过对象调用（如 obj.fn()），this 指向该对象
// 默认/独立调用：直接调用（如 fn()）在非严格模式下指向全局对象 window（浏览器），严格模式下为 undefined
// 构造函数：使用 new 时，this 指向新创建的对象实例
// 显式绑定：可以通过 call、apply 或 bind 方法改变 this 的指向
//
// 箭头函数的 this（定义时决定）
// 没有自己的 this：它不会创建专属的 this 执行上下文
// 继承外层作用域：它的 this 继承自外层代码块（即定义这个箭头函数时所在的作用域）的 this
// 无法被修改：不能通过 call、apply 或 bind 来改变它的 this 指向
// 不能作构造函数：因为没有自己的 this，所以不能配合 new 使用
