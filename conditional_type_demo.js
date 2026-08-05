"use strict";
// TypeScript 条件类型
const a = true;
const b = false;
const c = false;
const d = false;
console.log("any 是 any?: " + a);
console.log("string 是 any?: " + b);
console.log("unknown 是 any?: " + c);
console.log("never 是 any?: " + d);
const e = true;
console.log("string 赋值给 any?: " + typeof e);
