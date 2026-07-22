"use strict";
// TypeScript 基本结构
// 声明部分：包括类型声明、接口声明等
// declarations: includes type declarations, interface declarations, etc.
// let name: string = "Alice";
// let age: number = 30;
// interface Person {
//     name: string;
//     age: number;
// }
// 变量声明：包括 let, const 和 var 的使用
// variable declaration: includes the use of let, const, and var
// 推荐使用 let 和 const，var 用法不再推荐
// let age: number = 30; // 使用 let 声明变量
// const pi: number = 3.14; // 使用 const 声明常量
// 函数声明：包括普通函数和箭头函数
// function declaration: includes regular functions and arrow functions
// function greet(name: string): string {
//     return `Hello, ${name}!`;
// }
// const greet = (name: string): string => { return `Hello, ${name}!` };
// const greet = (name: string): string => `Hello, ${name}!`;  // 箭头函数的简写形式
// 类声明：用于定义类及其成员
// class declaration: used to define classes and their members
// class Person {
//     name: string;
//     age: number;
//     constructor(name: string, age: number) {
//         this.name = name;
//         this.age = age;
//     }
//     greet(): string {
//         return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
//     }
// }
// 接口与类型别名：描述类型的结构
// interfaces and type aliases: describe the structure of types
// interface Animal {
//     name: string;
//     sound: string;
//     makeSound(): void;
// }
// 类实现接口：类可以实现接口，必须实现接口中定义的所有成员
// class Dog implements Animal {
//     name: string;
//     sound: string;
//     constructor(name: string, sound: string) {
//         this.name = name;
//         this.sound = sound;
//     }
//     makeSound(): void {
//         console.log(`${this.name} says ${this.sound}`);
//     }
// }
// 扩展接口：接口可以继承其他接口
// extending interfaces: interfaces can inherit from other interfaces
// interface Pet extends Animal {
//     owner: string;
// }
// 继承类：类可以继承其他类
// class inheritance: classes can inherit from other classes
// class Cat extends Dog {
//     constructor(name: string, sound: string) {
//         super(name, sound);
//     }
//     makeSound(): void {
//         console.log(`${this.name} says ${this.sound}`);
//     }
// }
// type ID = string | number; // 类型别名：ID 可以是字符串或数字
// 模块化：通过 import 和 export 组织代码
// modularization: organize code through import and export
// CommonJS 模块化：使用 require 和 module.exports, node.js 环境下常用
// CommonJS modularization: using require and module.exports, commonly used in node.js environment
// ES 模块化：使用 import 和 export, 浏览器和现代 JavaScript 环境下常用
// ES modularization: using import and export, commonly used in browsers and modern JavaScript environments
// Module & Import/Export
// person.ts
// export class Person {
//     name: string;
//     constructor(name: string) {
//         this.name = name;
//     }
// }
// main.ts
// import { Person } from './person';
// const alice = new Person('Alice');
// console.log(alice.name); // 输出: Alice
// 类型断言：强制类型转换
// type assertion: force type conversion
// let value: any = "Hello, TypeScript!";
// let strLength: number = (value as string).length; // 使用 as 进行类型断言
// 或者使用尖括号语法
// let strLength: number = (<string>value).length; // 使用尖括号进行类型断言
// 泛型：使代码具备更多的复用性
// generics: make code more reusable
// function identity<T, U>(arg: T): U {
//     return (arg as unknown) as U;
// }
// const result1 = identity<string, number>("123"); // T 为 string，U 为 number
// console.log(result1); // 输出: 123
// 注释：增加代码的可读性
// comments: increase code readability
// 单行注释：使用 // 开头
// single-line comments: start with //
// 多行注释：使用 /* */ 包裹
// multi-line comments: wrapped with /* */
// 类型推断：自动推断类型
// type inference: automatically infer types
// let num = 10;  // TypeScript 推断 num 为 number 类型
// 类型守卫：缩小类型范围
// type guards: narrow down the type range
// TypeScript 提供了类型守卫（如 typeof 和 instanceof），用于在运行时缩小变量的类型范围
// function isString(value: any): value is string {
//     return typeof value === 'string';
// }
// 自定义类型守卫
// value is string: 类型谓词（Type Predicate）
// 类型守卫（Type Guard）是 TypeScript 提供的一种机制，
// 用于在运行时检查变量的实际类型，
// 并让 TypeScript 编译器在代码块中自动缩小（Narrowing）变量的类型范围
// 类型守卫就是通过某种判断方式告诉 TypeScript：“经过这个判断后，这个变量一定是什么类型。”
// function printLength(value: string | number) {
//     console.log(value.length);  // Property 'length' does not exist on type 'number'
// }
// function printLength(value: string | number) {
//     if (typeof value === 'string') {
//         console.log(value.length);  // 这里 TypeScript 知道 value 是 string 类型
//     } else {
//         console.log("Value is not a string");
//     }
// }
// 常见类型守卫方式
// TypeScript 常用类型守卫：
// 方法	          用途
// typeof	    基本类型判断
// instanceof	类实例判断
// in	        对象属性判断
// === / !==	字面量类型判断
// 自定义类型谓词	复杂类型判断 (如: value is string, value is Dog 等)
// class Dog {
//     bark() {
//         console.log("汪汪");
//     }
// }
// class Cat {
//     meow() {
//         console.log("喵");
//     }
// }
// function speak(animal: Dog|Cat) {
//     if(animal instanceof Dog){
//         animal.bark();
//     } else {
//         animal.meow();
//     }
// }
// const dog = new Dog();
// speak(dog); // 输出: 汪汪
// interface Car {
//     drive(): void;
// }
// interface Boat {
//     sail(): void;
// }
// function move(vehicle: Car | Boat) {
//     if("drive" in vehicle) {
//         vehicle.drive();
//     } else {
//         vehicle.sail();
//     }
// }
// type Result =
// {
//     status: "success",
//     data: string
// }
// |
// {
//     status: "error",
//     message: string
// }
// function handle(result: Result) {
//     if (result.status === "success") {
//         console.log(result.data);
//     } else {
//         console.log(result.message);
//     }
// }
// 异步编程：支持 async/await
// asynchronous programming: supports async/await
// async function fetchData(): Promise<string> {
//     const response = await fetch("https://example.com");
//     const data = await response.text();
//     return data;
// }
// const dataPromise = fetchData();
// console.log(dataPromise); // 输出: Promise { <pending> }
// 通过 async/await 可以让异步代码看起来像同步代码，增强可读性
// async function main() {
//     try {
//         const data = await fetchData();
//         console.log(data);
//     } catch (error) {
//         console.error("Error fetching data:", error);
//     }
// }
// main();
// 通过 Promise 的 then/catch 方法也可以处理异步操作
// fetchData().then(data => {
//     console.log(data);
// }).catch(error => {
//     console.error("Error fetching data:", error);
// });
// 错误与异常处理：通过 try/catch 进行错误捕捉
// error and exception handling: catch errors through try/catch
try {
    throw new Error("Something went wrong");
}
catch (error) {
    if (error instanceof Error) {
        console.error(error.message);
    }
}
