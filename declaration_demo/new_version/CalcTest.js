// 文件路径：CalcTest.ts
// 三斜线指令：告诉 TypeScript 编译器引入声明文件
/// <reference path = "Calc.d.ts" />  // 旧版引入方式，已不推荐使用
// import 语句：引入声明文件，推荐使用
// import { Runoob } from "./Calc";  // 引入 Calc.d.ts 中的 Runoob 模块
// 创建 Calc 实例，TypeScript 现在能正确识别 obj 的类型
// var obj = new Runoob.Calc();
// obj.doSum("Hello"); // 编译错误！"Hello" 是字符串，而 doSum 要求传入 number
// console.log(obj.doSum(10)); // 正确调用：传入 10，期望得到 55
// 模块方式:
import { Calc } from "./Calc"; // 引入 Calc.d.ts 中的 Runoob 模块
// import { Calc } from "./Calc";
const obj2 = new Calc();
console.log(obj2.doSum(10)); // 正确调用：传入 10，期望得到 55
// 全局方式:
// 通过 export as namespace Runoob; 声明的全局命名空间 Runoob
// 可以直接使用 Runoob.Calc，而不需要 import
// const obj3 = new Runoob.Calc();
// console.log(obj3.doSum(10)); // 正确调用：传入 10，期望得到 55
