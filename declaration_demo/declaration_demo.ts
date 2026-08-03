// TypeScript 声明文件
// declaration file

// 声明文件是 TypeScript 与 JavaScript 库之间的翻译官
// 它告诉 TypeScript, 一个 JavaScript 库暴露了哪些功能、参数是什么类型、返回值是什么类型

// 第三方的 JavaScript 库（比如 jQuery）
// $('#foo');
// // 或
// jQuery('#foo');  // error TS2304: Cannot find name 'jQuery'
// TypeScript 的核心功能就是类型检查——它在编译阶段就要知道每个变量、每个函数的类型
// 但 jQuery 是一个纯 JavaScript 库，没有任何类型信息，TypeScript 自然看不懂它

// 快速修复：declare 关键字
// 最简单的方式是用 declare 关键字手动告诉 TypeScript：「这个变量存在，它的类型是这样的」：
declare const jQuery: (selector: string) => any;
// 这行代码的含义是：
// 声明一个变量 jQuery，它是一个函数，接收一个 string 类型的参数，返回值可以是任意类型（any）
jQuery('#foo');  // ok

// declare 关键字声明的类型只在编译阶段起作用
// 编译后的 JavaScript 代码中会被完全删除，不会影响运行时的行为

// 但 declare 只能解决单个文件的临时问题
// 如果一个库有很多方法、很多类，在每个文件里都手写 declare 显然不现实
// 这就是声明文件的用武之地

// 声明文件：一劳永逸的方案
// 声明文件就是把所有 declare 声明集中放到一个单独的文件里，项目中的任何 TypeScript 文件都可以引用它

// 文件命名规范
// 声明文件统一以 .d.ts 为后缀，d 代表 declaration（声明）

// 基本语法 (旧版)
// 1. declare var 变量名: 类型;
// 2. declare function 函数名(参数: 类型): 返回值类型;
// 3. declare class 类名 {
//     constructor(参数: 类型);
//     方法名(参数: 类型): 返回值类型;
//   }
// 4. declare namespace 命名空间名 {
//     var 变量名: 类型;
//     function 函数名(参数: 类型): 返回值类型;
//   }
// 5. declare module 模块名 {
//     var 变量名: 类型;
//     function 函数名(参数: 类型): 返回值类型;
//   }
// 6. 在 TypeScript 文件中通过三斜线指令引入声明文件:
// 三斜线指令是 TypeScript 特有的语法，用于告诉编译器在编译时需要包含指定的声明文件
// /// <reference path="jquery.d.ts" />


// 基本语法 (新版)
// 1. export declare var 变量名: 类型;
// 2. export declare function 函数名(参数: 类型): 返回值类型;
// 3. export declare class 类名 {
//     constructor(参数: 类型);
//     方法名(参数: 类型): 返回值类型;
//   }
// 4. export declare namespace 命名空间名 {
//     var 变量名: 类型;
//     function 函数名(参数: 类型): 返回值类型;
//   }
// 5. export declare module 模块名 {
//     var 变量名: 类型;
//     function 函数名(参数: 类型): 返回值类型;
//   }
// 6. declare 关键字不是必须的，export 关键字就足够了
// 7. 在 TypeScript 文件中通过 import 引入声明文件:
// import * as $ from 'jquery';
// import { jQuery } from 'jquery';

// 很多流行第三方库（如 jQuery、Lodash）的声明文件已经由社区维护好了
// 存放在 DefinitelyTyped 项目中
// 你只需要通过 npm 安装对应的 @types/xxx 包即可使用，无需手动编写

// 完整实例：从零创建声明文件

// CalcThirdPartyJsLib.js
// 这个库用到了一个常见模式：立即执行函数（IIFE, Immediately Invoked Function Expression）
// 通俗理解，就是把代码包在一个函数里立即运行，这样函数里定义的变量不会跑到外面去，避免和其他代码的变量名冲突

// Calc.d.ts
// 声明文件和普通 .ts 文件的最大区别：
// 声明文件只有类型签名，没有实现代码
// 它只回答「这个函数长什么样」，不回答「这个函数做了什么」

// CalcTest.ts 文件代码

// CalcTest.js 编译产物
// 可以看到，三斜线指令和声明文件中的类型信息在编译产物中都不见了，只剩下纯粹的 JavaScript 运行代码

// index.html 文件代码

// 小结
// 声明文件本质上是一份「类型说明书」，让 TypeScript 能够理解和检查纯 JavaScript 库
// 整个工作流程可以概括为三步：
// 1. 拿到一个 JS 库，分析它暴露了哪些 API
// 2. 编写 .d.ts 声明文件，描述这些 API 的类型签名
// 3. 在 TypeScript 代码中引用声明文件，即可享受完整的类型检查保护

// 对于日常开发中常用的第三方库，绝大多数已经有现成的声明文件（通过 npm install @types/xxx 安装）
// 只有当你用到非常冷门的库或内部私有库时，才需要手动编写声明文件

