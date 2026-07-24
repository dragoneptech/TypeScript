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