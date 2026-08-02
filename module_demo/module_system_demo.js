"use strict";
// TypeScript 模块系统
// 可以参阅 TypeScript_tsconfig 目录下的 tsconfig.json 文件介绍
// 模块系统是现代 TypeScript 开发的基础
// TypeScript 完全支持 ES Module 语法，并提供了丰富的模块解析策略
// 通过模块系统，可以将代码分割成可重用的单元，实现代码组织和复用
// 模块导出导入流程(Export and Import Process)
// 1. 在一个文件中定义并导出变量、函数、接口、类等
// 2. 在另一个文件中导入这些内容
// 3. 使用导入的内容进行开发
// 模块导出示例: user.ts
// export const userName = "Alice";  // 导出变量
// export class User {                 // 导出类
//     ...
// };
// default export
// export default class User {                 // 导出默认类
//     ...
// };
// export interface Config {  // 导出接口
//     ...
// }
// 模块导入示例: main.ts
// import { userName, User, Config } from './user';  // destructuring import
// import User from './user';  // default import (if User was exported as default)
// 导出导入方式
// 命名导出/导入
// 默认导出/导入
// 重新导出
// 动态导入
// 为什么需要模块系统？
// 随着项目规模增长，代码量会越来越大
// 将代码分散到多个文件中，通过模块组织，可以提高代码的可维护性和可复用性
// 模块系统让每个文件都有自己的作用域，避免全局变量污染
// 概念说明：模块是包含导出和导入语句的 TypeScript 文件
// 通过 export 导出内容，通过 import 导入内容
// 模块导出
// 使用 export 关键字可以将变量、函数、接口、类等导出供其他模块使用
// user_demo.ts 模块
// 模块导入
// 使用 import 关键字从其他模块导入导出的内容
// main_demo.ts 导入模块
// 注意：接口和类型在编译后的 JavaScript 中不会产生实际代码，它们仅用于 TypeScript 的类型检查
// 路径说明：导入路径可以是相对路径（如 ./user）或绝对路径（如 @/utils）
// 需要在 tsconfig.json 中配置 baseUrl 和 paths，才能使用绝对路径导入模块
// import { greet } from './user_demo.js';  // 相对路径
// import { greet } from '@/utils/user_demo.js';  // 绝对路径（需要配置路径别名）
// 但是 TypeScript 本身不会自动认识 @，需要通过 tsconfig.json 配置路径别名
// tsconfig.json 中的 paths 配置示例：
// {
//   "compilerOptions": {
//     "baseUrl": ".",
//     "paths": {
//       "@/*": ["src/*"]
//     }
//   }
// }
// 这样就可以使用 @ 来表示 src 目录，方便导入模块
// 模块导入说明
// import 导入模块如果采用 ESM 规范，文件扩展名必须明确指定，如 .js、.ts、.tsx 等
// import 导入模块如果采用 CommonJS 规范，文件扩展名可以省略，如 .js、.ts、.tsx 等
// 但是在 TypeScript 中，推荐使用 ESM 规范，并明确指定文件扩展名
// 这样可以避免在不同环境下的模块解析问题，尤其是在浏览器环境中，ESM 规范要求必须指定文件扩展名
// 采用 ESM 规范，但是在 import 语句中希望省略文件扩展名
// 可以通过配置 TypeScript 的 moduleResolution 为 bundler
// 并在 tsconfig.json 中配置 resolveJsonModule 和 esModuleInterop 等选项
// 默认导出
// 每个模块可以有一个默认导出
// 默认导出在导入时不需要使用花括号，且可以取任意名字
// 示例
// math.ts 模块
// 默认导出：一个模块只能有一个默认导出
// export default function add(a: number, b: number): number {
//     return a + b;
// }
// // 可以和其他导出混合使用
// export function multiply(a: number, b: number): number {
//     return a * b;
// }
// 使用 math.ts 模块的 main.ts 导入
// 导入默认导出：可以取任意名字
// import add from "./math";
// import addition from "./math";  // 也可以使用其他名字
// 导入命名导出：需要使用花括号
// import { multiply } from "./math";
// console.log("加法: " + add(2, 3));
// console.log("乘法: " + multiply(4, 5));
// 建议：对于工具函数、类等主要导出内容使用默认导出，对于辅助函数、接口等使用命名导出
// 重新导出
// 重新导出（Re-export）用于聚合多个模块的内容，或将一个模块的导出暴露给另一个模块
// 参考 index_demo.ts 模块
// 应用场景：使用 index.ts（此处为index_demo.ts）作为入口文件，集中导出子模块的内容，方便统一导入
// 模块解析策略
// TypeScript 提供了多种模块解析策略，用于查找导入的模块
// 可以在 tsconfig.json 中配置
// tsconfig.json 配置
// {
//     "compilerOptions": {
//         // Node 解析策略
//         // 遵循 Node.js 的模块解析规则
//         "moduleResolution": "node",
//         // 经典解析策略
//         // TypeScript 早期版本使用的策略
//         "moduleResolution": "classic",
//         // base URL：设置基础路径
//         // 所有非相对路径导入都基于此路径解析
//         "baseUrl": "./src",
//         // 路径映射：为导入路径设置别名
//         "paths": {
//             // @ 开头的导入映射到 src 目录
//             "@/*": ["./*"],
//             // @components 开头的导入映射到 components 目录
//             "@components/*": ["./components/*"]
//         }
//     }
// }
// Node 解析策略
// 遵循 Node.js 的模块解析规则，需要配合 package.json 中的 "type": "module" 或 "type": "commonjs" 使用
// 配置建议：新项目推荐使用 Node 解析策略，它是目前最常用的方式
// 动态导入
// 动态导入（Dynamic Import）使用 import() 语法，可以在运行时按需加载模块
// 这对于代码分割、懒加载非常有用
// 动态导入 - 懒加载
// import() 返回一个 Promise
// async function loadUser() {
//     // 动态导入模块，只有执行到这里才会加载
//     const User = await import("./user_demo.js");
//     // User.default 是默认导出的函数
//     const user = new User.default("Dynamic User");
//     console.log("动态用户: " + user.introduce());
//     // 使用命名导出
//     console.log("动态导入的问候: " + User.greet("Dynamic World"));
//     console.log("动态导入的问候: " + User.greet(User.userName));
// }
// 调用懒加载函数
// loadUser();
// 条件导入：根据条件动态加载不同模块
async function loadFeature(enable) {
    if (enable) {
        // 只有条件满足时才加载模块
        const feature = await import("./user_demo.js");
        console.log("动态导入的问候: " + feature.greet(feature.userName));
    }
}
// 根据条件加载
loadFeature(true);
