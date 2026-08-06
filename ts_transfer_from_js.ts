// TypeScript 从 JavaScript 迁移

// 将现有 JavaScript 项目逐步迁移到 TypeScript

// 迁移策略
// 添加 tsconfig.json
// 重命名 .js 为 .ts
// 逐步添加类型注解
// 启用严格模式

// 配置 tsconfig.json

// {
//     "compilerOptions": {
//         // 初始阶段：宽松配置
//         "target": "ES2020",
//         "module": "commonjs",
//         "strict": false,
//         "noImplicitAny": false,
//         "strictNullChecks": false,
//         "skipLibCheck": true,

//         // 允许 JS 文件
//         "allowJs": true,
//         "checkJs": false,

//         // 输出目录
//         "outDir": "./dist",
//         "rootDir": "./src"
//     },
//     "include": ["src/**/*"],
//     "exclude": ["node_modules", "dist"]
// }


// 逐步启用严格检查

// 阶段 1: 基础迁移
// {
//     "compilerOptions": {
//         "strict": false,
//         "noImplicitAny": false
//     }
// }

// 阶段 2: 启用类型检查
// {
//     "compilerOptions": {
//         "strict": true,
//         "noImplicitAny": true,
//         "strictNullChecks": true
//     }
// }

// 阶段 3: 完全严格
// {
//     "compilerOptions": {
//         "strict": true,
//         "noImplicitAny": true,
//         "strictNullChecks": true,
//         "strictFunctionTypes": true,
//         "strictPropertyInitialization": true
//     }
// }

// JSDoc 类型注释
// 在 JavaScript 中使用 JSDoc 添加类型

// 类型声明文件
// 为没有类型定义的模块创建声明


// src/types/my-module.d.ts

// declare module "my-module" {
//     export function doSomething(param: string): void;
//     export class MyClass {
//         constructor(options: { name: string });
//         name: string;
//     };
// }

// declare module 的作用
// 第一种含义：声明一个外部模块（Ambient Module Declaration）
// 用途：给没有类型声明的 JavaScript/npm 包添加类型
// 第二种含义：模块增强（Module Augmentation）
// 用途：给已经存在的模块增加类型


// declare 关键字

// 声明全局变量
// declare var GLOBAL_CONFIG: {
//     apiUrl: string;
//     version: string;
// };

// 声明全局函数
// declare function myFunction(param: string): void;

// 声明命名空间
// declare namespace MyNamespace {
//     function doSomething(): void;
// }

// 使用
// console.log(GLOBAL_CONFIG.apiUrl);
// myFunction("hello");
// MyNamespace.doSomething();

// 迁移工具
// tsc --allowJs：编译 JS 文件
// checkJs：检查 JS 类型
// // @ts-check：单文件类型检查
// // @ts-ignore：忽略错误

// 最佳实践
// 从关键模块开始迁移
// 添加单元测试
// 逐步启用严格模式
// 使用 JSDoc 注释
// 创建类型声明文件


// 总结
// 渐进式：逐步迁移
// JSDoc：类型注释
// 声明文件：.d.ts
// 严格模式：分阶段启用

