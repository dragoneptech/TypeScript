"use strict";
// TypeScript 循环
// for loop
// var num: number = 5;
// var i: number;
// var factorial: number = 1;
// for (i = num; i >= 1; i--) {
//     factorial *= i;
// }
// console.log("The factorial of " + num + " is " + factorial);  // 输出 The factorial of 5 is 120
// for (var j in [1, 2, 3, 4, 5]) {
//     console.log(j);  // 输出 0 1 2 3 4
// }
// for (var k of [1, 2, 3, 4, 5]) {
//     console.log(k);  // 输出 1 2 3 4 5
// }
// for...in 遍历的是对象的属性名（property keys）
// 对于数组来说，遍历的是数组的索引（index），而不是数组元素的值
// for (var j in [1, "2", 3, "4", true]) {
//     console.log(j);  // 输出数组索引 0 1 2 3 4
// }
// for (var k of [1, "2", 3, "4", true]) {
//     console.log(k);  // 输出数组元素 1 "2" 3 "4" true
// }
// const arr: number[] = [1, 2, 3, 4, 5];
// for (let i=0; i < arr.length; i++) {
//     console.log(arr[i]);  // 输出数组元素 1 2 3 4 5
// }
// const str: any = "Hello, TypeScript!";
// for (let i in str) {
//     console.log(i);  // 输出字符串索引 0 1 2 3 4 5 6 7 8 9 10 11
//     console.log(str[i]);  // 输出字符串元素 H e l l o ,   T y p e S c r i p t !
// }
// let someArray = [1, "string", false];
// let someArray: any[] = [1, "string", false];
// let someArray: (number | string | boolean)[] = [1, "string", false];
// let someArray: Array<number | string | boolean> = [1, "string", false];
// let someArray: [number, string, boolean] = [1, "string", false];
// for (let entry of someArray) {
//     console.log(entry);  // 输出数组元素 1 "string" false
// }
// let list = [4, 5, 6];
// list.forEach((val, idx, array) => {
//     // val: 当前值
//     // idx：当前index
//     // array: Array
//     console.log(val, idx, array);  // 输出 4 0 [4, 5, 6] 5 1 [4, 5, 6] 6 2 [4, 5, 6]
// });
// let list = [4, 5, 6];
// list.every((val, idx, array) => {
//     // val: 当前值
//     // idx：当前index
//     // array: Array
//     console.log(val, idx, array);  // 输出 4 0 [4, 5, 6] 5 1 [4, 5, 6] 6 2 [4, 5, 6]
//     return true; // Continues
//     // Return false will quit the iteration
// });
// while loop
// let num: number = 5;
// let factorial: number = 1;
// while (num >= 1) {
//     factorial *= num;
//     num--;
// }
// console.log("The factorial of 5 is " + factorial);  // 输出 The factorial of 5 is 120
// do...while loop
// let num: number = 10;
// do {
//     console.log(num);  // 输出 10 9 8 7 6 5 4 3 2 1
//     if (num === 5) {
//         break;  // 当 num 等于 5 时，跳出循环
//     }
//     num--;
// } while (num > 0);
// break 语句用于跳出循环，continue 语句用于跳过当前循环的剩余部分，直接进入下一次循环
// let num: number = 1;
// while (num <= 10) {
//     if ( num % 5 === 0 ) {
//         console.log(`${num} is divisible by 5, breaking the loop.`);
//         break;  // 当 num 能被 5 整除时，跳出循环
//     }
//     num++;
// }
// 对于 for 循环，continue 语句执行后自增语句仍然会执行
// 对于 while 和 do...while 循环，continue 语句执行后会重新执行条件判断语句
// let num: number = 0;
// let count: number = 0;
// for (num; num <= 20; num++) {
//     if (num % 2 === 0) {
//         continue;  // 当 num 能被 2 整除时，跳过当前循环的剩余部分，直接进入下一次循环
//     }
//     count++;
// } 
// console.log(`There are ${count} odd numbers between 0 and 20.`);
// 输出 There are 10 odd numbers between 0 and 20.
// 无限循环
// for (;;) {
//     // 无限循环体
//     console.log("这段代码会不停的执行") 
// }
while (true) {
    // 无限循环体
    console.log("这段代码会不停的执行");
}
