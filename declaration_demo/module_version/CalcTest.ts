// 文件路径：CalcTest.ts

// 模块方式:
import { Calc } from "./Calc.js";  // 引入 Calc.d.ts 中的 Runoob 模块

const obj = new Calc();
console.log(obj.doSum(10)); // 正确调用：传入 10，期望得到 55
