// TypeScript 函数重载

// 函数重载（Function Overloading）允许为一个函数定义多个签名，编译器会根据传入的参数类型选择正确的实现

// function add(a: number, b: number): number;
// function add(a: string, b: string): string;
// function add(a: number | string, b: number | string): number | string {
//   if (typeof a === "number" && typeof b === "number") {
//     return a + b;
//   } else if (typeof a === "string" && typeof b === "string") {
//     return a + b;
//   } else {
//     throw new Error("Invalid argument types");
//   }
// }

// console.log(add(1, 2)); // 3
// console.log(add("Hello", " World")); // "Hello World"
// console.log(add(1, "Hello")); // Error: No overload matches this call

// 函数重载签名
// function add(a: number, b: number): number;
// function add(a: string, b: string): string;
// function add(a: any, b: any): any {
//     return a + b;
// }

// console.log("数字相加: " + add(1, 2));
// console.log("字符串相加: " + add("Hello, ", "World"));

// 多参数重载
// 可以定义多个参数的不同组合
// function greet(name: string): string;
// function greet(name: string, greeting: string): string;
// // 实现
// function greet(name: string, greeting?: string): string {
//   if (greeting) {
//     return `${greeting}, ${name}!`;
//   } else {
//     return `Hello, ${name}!`;
//   }
// }

// console.log(greet("Alice")); // Hello, Alice!
// console.log(greet("Alice", "Hi")); // Hi, Alice!


// 方法重载
// 类中的方法也可以使用重载

// class Calculator {
//     // 方法重载
//     // 重载签名
//     add(a: number, b: number): number;
//     add(a: string, b: string): string;
//     add(a: number, b: string): string;
//     add(a: string, b: number): string;
//     // 实现
//     add(a: any, b: any): any {
//         return a + b;
//     }
// }

// let calc = new Calculator();
// console.log("数字: " + calc.add(1, 2));
// console.log("字符串: " + calc.add("Hello", "World"));
// console.log("混合: " + calc.add(5, " apples"));


// 构造函数重载
// 构造函数同样可以重载
// class User {
//     name: string;
//     age: number;

//     // 构造函数重载
//     constructor(name: string);
//     constructor(name: string, age: number);
//     constructor(name: string, age?: number) {
//         this.name = name;
//         this.age = age || 0;
//     }
// }

// var user1 = new User("Alice");
// var user2 = new User("Bob", 25);

// console.log("用户1: " + JSON.stringify(user1));
// console.log("用户2: " + JSON.stringify(user2));


// 重载与联合类型
// 使用重载而不是联合类型可以获得更精确的类型推断
// 推荐：使用重载
function process(value: number): number;
function process(value: string): string;
function process(value: number | string): number | string {
    if (typeof value === "number") {
        return value * 2;
    } else {
        return value.toUpperCase();
    }
}

// TypeScript 知道返回类型
var numResult: number = process(10);  // number
var strResult: string = process("hello");  // string

console.log("数字结果: " + numResult);
console.log("字符串结果: " + strResult);


// 注意事项
// 重载签名必须放在实现签名之前
// 实现签名必须兼容所有重载签名
// 重载签名只是类型声明，不生成实际代码

// 总结
// 函数重载：定义多个签名，编译器选择匹配的实现
// 方法重载：类中同样适用
// 构造函数重载：提供多种初始化方式
// 优于联合类型：返回类型更精确