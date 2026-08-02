import User from './user_demo.js';

// 从其他模块重新导出指定内容
export { name, age, greet, userName, userAge } from './user_demo.js';

// 重新导出接口（仅用于类型检查）
// 建议采用 export type 语法重新导出接口
export type { Config } from './user_demo.js';

// 重新导出默认导出（需要重命名）
// export { default as User } from "./user_demo.js";

// 重新导出默认导出和命名导出
export { default } from './user_demo.js';

// 重新导出所有内容
// export * from "./user_demo.js";


// 应用场景：使用 index.ts（此处为index_demo.ts）作为入口文件，集中导出子模块的内容，方便统一导入