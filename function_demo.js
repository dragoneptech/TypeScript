"use strict";
// TypeScript 函数
function display(x, y) {
    if (y !== undefined) {
        console.log(`x = ${x}, y = ${y}`);
    }
    else {
        console.log(`x = ${x}`);
    }
}
display("abc");
display(1, "xyz");
