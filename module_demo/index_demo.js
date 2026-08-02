// 从其他模块重新导出指定内容
export { name, age, greet, userName, userAge } from './user_demo.js';
// 重新导出默认导出（需要重命名）
// export { default as User } from "./user_demo.js";
// 重新导出默认导出和命名导出
export { default } from './user_demo.js';
// 重新导出所有内容
// export * from "./user_demo.js";
