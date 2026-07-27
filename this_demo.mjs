// 在 Node.js 中 （ES Module）
// 创建 this_demo.mjs 文件，内容如下：
// Node.js ES Module 模块系统，顶层 this 指向 undefined，而 globalThis 指向全局对象 global
// 使用 node 直接执行以下代码 (与是否严格模式无关)：
console.log(this === globalThis); // false
console.log(this === undefined); // true
console.log(this);  // undefined
// console.log(module.exports);  // {}
console.log(globalThis === global);  // true