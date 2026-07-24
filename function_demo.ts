// TypeScript 函数

// 函数声明告诉编译器函数的名称、参数和返回类型
// 函数定义提供了函数的实际主体

// const func = function (): void {
//     // 函数定义
//     console.log("调用函数")
// }

// func();  // 调用函数: 函数只有通过调用才可以执行函数内的代码

// function test(): void {  // 函数定义
//     console.log("调用函数")
// }

// test();  // 调用函数


// 函数返回值
// 函数定义
// function greet(): string {  // 返回一个字符串
//     return "Hello, World!"
// }

// function caller(): void {
//     var msg: string = greet();  // 调用 greet() 函数
//     console.log(msg)
// }

// caller();  // 调用函数


// 函数参数
// function add(x: number, y: number): number {  // 函数定义
//     return x + y;  // 返回两个参数的和
// }
// console.log(add(5, 3));  // 调用函数并输出结果

// 可选参数
// 可选参数使用问号标识 ？
// function buildName(firstName: string, lastName?: string): string {  // 函数定义
//     if (lastName) {
//         return firstName + " " + lastName;  // 返回完整的名字
//     } else {
//         return firstName;  // 返回只有名字
//     }
// }

// let result1 = buildName("Bob");  // 正确
// console.log(result1)  // 输出: Bob
// let result2 = buildName("Bob", "Adams", "Sr.");  // 错误，参数太多了
// let result3 = buildName("Bob", "Adams");  // 正确
// console.log(result3)  // 输出: Bob Adams

// 可选参数必须跟在必需参数后面

// 默认参数
// 注意：参数不能同时设置为可选和默认
// function calculate_discount(price: number, rate: number = 0.50): number {  // 函数定义
//     var discount = price * rate;  // 计算折扣
//     return discount;  // 返回折扣
// }

// console.log("计算折扣(默认): " + calculate_discount(1000));
// console.log("计算折扣（指定比率0.30）: " + calculate_discount(1000, 0.30));

// 剩余参数
// rest parameters
// 使用 ... 操作符来表示剩余参数
// function buildName(firstName: string, ...restOfName: string[]): string {
//     return firstName + " " + restOfName.join(" ");
// }
// let employeeName = buildName("Joseph", "Samuel", "Lucas", "MacDowell");
// console.log(employeeName);  // 输出: Joseph Samuel Lucas MacDowell

// function addNumbers(...nums: number[]): number {
//     let i: number;
//     let sum: number = 0;
//     for (i = 0; i < nums.length; i++) {
//         sum += nums[i];
//     }
//     return sum;
// }

// console.log(addNumbers(1, 2, 3, 4, 5));  // 输出: 15


// 匿名函数
// anonymous functions
// 匿名函数是一个没有函数名的函数
// 匿名函数在程序运行时动态声明，除了没有函数名外，其他的与标准函数一样
// 可以将匿名函数赋值给一个变量，这种表达式就成为函数表达式
// function expression

// const msg = function(): string {
//     return "Hello, World!";
// }

// console.log(msg());  // 输出: Hello, World!

// const res = function(a: number, b: number): number {
//     return a + b;
// }
// console.log(res(5, 3));  // 输出: 8

// 匿名函数自调用
// 匿名函数自调用在函数后使用 () 即可
// IIFE (Immediately Invoked Function Expression)
// (function() {
//     let x: string = "IIFE 调用";
//     console.log(x);
// })();


// 构造函数
// TypeScript 也支持使用 JavaScript 内置的构造函数 Function() 来定义函数
// const myFunction = new Function("a", "b", "return a * b");
// const myFunction = new Function("a", "b", `return a * b`);
// let result = myFunction(5, 3);
// console.log(result);  // 输出: 15


// 递归函数
// recursive functions
// function factorial(n: number): number {
//     if (n <= 0) {  // 停止执行
//         return 1;
//     } else {
//         return n * factorial(n - 1);  // 调用自身
//     };
// }

// console.log(factorial(6));  // 输出: 720


// lambda functions / lambda expressions
// lambda 函数也称之为箭头函数
// arrow functions
// 箭头函数表达式的语法比函数表达式更短

// let foo: (x: number) => number;
// foo = (x: number): number => 10 + x;
// let foo: (x: number) => number = (x: number): number => 10 + x;

// console.log(foo(5));  // 输出: 15

// const foo: (x: number) => number = (x: number): number => {
//     console.log(10 + x);
//     return 10 + x;
// }

// foo(100);

// const func = (x: any) => {
//     if (typeof x === "number") {
//         console.log(`${x} is a number`);
//     } else if (typeof x === "string") {
//         console.log(`${x} is a string`);
//     } else {
//         console.log(`${x} is neither a number nor a string`);
//     };
// }

// func(100);
// func("Hello");
// func(true);

// 箭头函数单个参数 () 是可选的
// const display = (x: any) => {
//     console.log(`x = ${x}`);
// }
// display(100);
// JavaScript 中的箭头函数, 单个参数时() 是可选的
// TypeScript 中的箭头函数, 由于采用了强类型检查, 所以参数的类型必须明确指定
// 此时 (x: any) 是必须的，所以括号不能省略
// const display = (x: any) => {
//     console.log(`x = ${x}`);
// }
// display(100);

// 无参数时可以设置空括号，但是不能省略
// const display = () => {
//     console.log("无参数");
// }
// display();


// 函数重载
// function overloading
// 重载是函数名 / 方法名字相同，而参数不同，返回类型可以相同也可以不同
// 每个重载的方法（或者构造函数）都必须有一个独一无二的参数类型列表

// 参数类型不同
// function display(x: number): void;
// function display(x: string): void;
// function display(x: boolean): void;
// function display(x: number | string | boolean): void {
//     console.log(x);
// }

// 参数数量不同
// function display(): void;
// function display(x: number): void;
// function display(x: number, y: number): number;
// function display(x?: number, y?: number): number | void {
//     if (x !== undefined && y !== undefined) {
//         return x + y;
//     } else if (x !== undefined) {
//         console.log(x);
//     } else {
//         console.log("No arguments provided");
//     }
// }

// display(); // 输出: No arguments provided
// display(10); // 输出: 10
// console.log(display(10, 20)); // 输出: 30

// 参数类型顺序不同
// function display(x: string, y: number): void;
// function display(x: number, y: string): void;
// function display(x: string | number, y: string | number): void {
//     console.log(`x = ${x}, y = ${y}`);
// }

// display(10, "11")
// display("11", 10)

// 如果参数类型不同，则参数类型应设置为 any 或联合类型
// 参数数量不同你可以将不同的参数设置为可选

function display(x: string): void;
function display(x: number, y: string): void;
function display(x: string | number, y?: string): void {
    if (y !== undefined) {
        console.log(`x = ${x}, y = ${y}`);
    } else {
        console.log(`x = ${x}`);
    }
}

display("abc") 
display(1,"xyz");