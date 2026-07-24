// TypeScript 运算符

// TypeScript 主要包含以下几种运算：

// 算术运算符
// 逻辑运算符
// 关系运算符
// 按位运算符
// 赋值运算符
// 三元/条件运算符
// 字符串运算符
// 类型运算符

// 算术运算符
// ++
// x = ++ y;  // 前置递增运算符，先将 y 的值加 1，然后将结果赋值给 x
// x = y ++;  // 后置递增运算符，先将 y 的值赋值给 x，然后将 y 的值加 1

// var x: number;
// var y: number = 5;
// console.log(`y = ${y}`); // 输出: y = 5
// x = ++y;
// console.log(`前置递增运算符: x = ++y, x = ${x}`); // 输出: 前置递增运算符: x = ++y, x = 6
// y = 5; // 重置 y 的值为 5
// x = y++;
// console.log(`后置递增运算符: x = y++, x = ${x}`); // 输出: 后置递增运算符: x = y++, x = 5


// 关系运算符
// == vs ===
// == 只比较值是否相等，=== 比较值和类型是否都相等
// var x: number = 5;
// var y: string = "5";
// console.log(`x == y: ${x == (y as any)}`); // 输出: x == y: true
// console.log(`x === y: ${x === (y as any)}`); // 输出: x === y: false

// 逻辑运算符
// && 逻辑与
// || 逻辑或
// ! 逻辑非
// 短路运算符(&& 与 ||)


// 按位运算符
// 按位与 &
// 按位或 |
// 按位异或 ^
// 按位非 ~
// 左移 <<
// 右移 >>
// 无符号右移 >>>


// 赋值运算符
// =
// +=
// -=
// *=
// /=
// %=

// 三元/条件运算符
// 条件 ? 表达式1 : 表达式2
// 如果条件为 true，则执行表达式1，否则执行表达式2
// var num: number = -2;
// var result: string = (num >0) ? "大于 0" : "小于等于 0";
// console.log(`num = ${num}, result: ${result}`); // 输出: num = -2, result: 小于等于 0


// 类型运算符
// typeof
// instanceof
// as
// is
// var str: string = "Hello, TypeScript!";
// console.log(`str 的类型是: ${typeof str}`); // 输出: str 的类型是: string

// instanceof 只能用于对象类型，不能用于 TypeScript 的原始类型（primitive type
// class Person {
// }
// const p = new Person();
// console.log(p instanceof Person);

// var num: any = 42.123;
// console.log(`num = ${num}, 类型是: ${typeof num}`); // 输出: num = 42.123, 类型是: number
// console.log(`num = ${(num as number).toFixed(2)}`); // 输出: num = 42.12

// 使用 is 自定义类型守卫（Custom Type Guard）
// function isString(value: any) {
//     return typeof value === "string";
// }

// function printconsole(value: string | number) {
//     if (isString(value)) {
//         console.log(value.toUpperCase());
//     } else {
//         console.log(value.toFixed(2));
//     }
// }

// printconsole("hello");

// printconsole(3.14159);

// function isString(value: any): value is string {
//     return typeof value === "string";
// }

// function printconsole(value: string | number) {
//     if (isString(value)) {
//         console.log(value.toUpperCase());
//     } else {
//         console.log(value.toFixed(2));
//     }
// }

// printconsole("hello");

// printconsole(3.14159);


// 负号运算符
// var num: number = 5;
// var negNum: number = -num;
// console.log(`num = ${num}, negNum = ${negNum}`); // 输出: num = 5, negNum = -5


// 字符串运算符
// + 连接运算符
// var message: string = "Hello, " + "World!";
// console.log(message); // 输出: Hello, World!

