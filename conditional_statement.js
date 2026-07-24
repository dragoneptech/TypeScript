"use strict";
// TypeScript 条件语句
// if statement
// if ... else statement
// if ... else if ... else statement
// switch statement
// var num: number = 10;
// // if statement
// if (num > 0) {
//     console.log(`${num} 是正数`);
// }
// var num: number = -5;
// if (num > 0) {
//     console.log(`${num} 是正数`);
// } else {
//     console.log(`${num} 不是正数`);
// }
// var num: number = 0;
// if (num > 0) {
//     console.log(`${num} 是正数`);
// } else if (num < 0) {
//     console.log(`${num} 是负数`);
// } else {
//     console.log(`${num} 是零`);
// }
// switch statement
var grade = 'A';
switch (grade) {
    case 'A':
        console.log('优秀');
        break;
    case 'B':
        console.log('良好');
        break;
    case 'C':
        console.log('中等');
        break;
    case 'D':
        console.log('及格');
        break;
    case 'F':
        console.log('不及格');
        break;
    default:
        console.log('未知成绩');
        break;
}
