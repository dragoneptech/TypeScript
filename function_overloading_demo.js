"use strict";
// TypeScript 函数重载
function process(value) {
    if (typeof value === "number") {
        return value * 2;
    }
    else {
        return value.toUpperCase();
    }
}
// TypeScript 知道返回类型
var numResult = process(10); // number
var strResult = process("hello"); // string
console.log("数字结果: " + numResult);
console.log("字符串结果: " + strResult);
