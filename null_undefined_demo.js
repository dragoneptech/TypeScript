"use strict";
// TypeScript null 和 undefined
// 创建人员对象，没有地址
var person = { name: "Alice" };
// 可选链：安全访问可能不存在的属性
// 如果 address 不存在，返回 undefined 而不会报错
var city = person?.address?.city;
// 结合空值合并运算符
console.log("城市: " + city);
console.log("城市: " + (person?.address?.city ?? "未知"));
// ?. 是 JavaScript / TypeScript 中的 可选链操作符（Optional Chaining Operator）
// 它的作用：
// 当访问对象的属性、方法或数组元素时，如果前面的对象是 null 或 undefined，不会报错，而是直接返回 undefined
// 简单理解：
// ?. 可以安全地访问可能不存在的数据
// interface User {
//     name: string;
//     age?: number;  // 可选属性
//     address: {
//         city: string;
//     };
// }
// const user: User = {
//     name: "Alice",
//     address: {
//         city: "Beijing"
//     }
// };
// console.log(user.address.city);
// // console.log(user.age);
// // error TS2339: Property 'age' does not exist on type '{ name: string; address: { city: string; }; }'
// console.log(user?.age);  // undefined  // ?. 可选链操作符
// console.log(user.age ?? "Not specified");  // Not specified // ?? 空值合并运算符
