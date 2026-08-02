// 命名导入：从模块中导入指定的内容
// 对 name 和 age 使用原始名称导入
// import { name, age, greet } from './user_demo.js';

// console.log(`Name: ${name}, Age: ${age}`);
// console.log(greet(name));

// 使用重命名后的名称导入
// import { userName, userAge } from './user_demo.js';

// console.log(`User Name: ${userName}, User Age: ${userAge}`);
// console.log(greet(userName));

// 原名称和别名可以同时导入
// import { name, userName, age, userAge, greet } from "./user_demo.js";

// console.log(`Name: ${name}, Age: ${age}`);
// console.log(`User Name: ${userName}, User Age: ${userAge}`);
// console.log(greet(name));
// console.log(greet(userName));

// 默认导入：导入模块的默认导出
// import User from './user_demo.js';

// const user = new User("Bob");
// console.log(user.introduce());

// 全部导入：将模块所有导出放入一个对象
// import * as UserModule from './user_demo.js';
// console.log(UserModule.name); // Alice
// console.log(UserModule.userName); // Alice
// console.log(UserModule.age); // 25
// console.log(UserModule.userAge); // 25
// console.log(UserModule.greet(UserModule.name)); // Hello, Alice
// console.log(UserModule.greet(UserModule.userName)); // Hello, Alice
// console.log(new UserModule.default("Charlie").introduce()); // I am Charlie

// console.log(new UserModule.User("David").introduce()); 
// error TS2339: Property 'User' does not exist on type 'typeof import('./user_demo.js')';

// const user = new UserModule.default("David");
// console.log(user.introduce());

// const user = new UserModule.User("David");
// console.log(user.introduce());
// error TS2339: Property 'User' does not exist on type 'typeof import('./user_demo.js')';

// const config: UserModule.Config = {
//     host: "localhost",
//     port: 8080
// };
// console.log(`Config - Host: ${config.host}, Port: ${config.port}`);

// interface 接口更推荐采用 import type 导入
// 如果采用普通 import 导入接口，编译后可能会产生一些意外的副作用
// import { Config } from './user_demo.js';
// const config: Config = {
//     host: "localhost",
//     port: 8080
// };
// console.log(`Config - Host: ${config.host}, Port: ${config.port}`);

// import type 导入
// import type { Config } from './user_demo.js';
// const config: Config = {
//     host: "localhost",
//     port: 8080
// };
// console.log(`Config - Host: ${config.host}, Port: ${config.port}`);

// 重命名导入：避免命名冲突
// import { greet as sayHello } from './user_demo.js';
// 使用导入的内容
// console.log(greet("World"));  // Error TS2304: Cannot find name 'greet'
// console.log(sayHello("TypeScript"));

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


// 使用重新导出的 index_demo 模块
import { name, age, greet} from './index_demo.js';
console.log(`Name: ${name}, Age: ${age}`);
console.log(greet(name));

import { userName, userAge } from './index_demo.js';
console.log(`User Name: ${userName}, User Age: ${userAge}`);
console.log(greet(userName));

// import { User } from './index_demo.js';
// 对应 index_demo.ts 中的 export { default as User } from "./user_demo.js";

import User from './index_demo.js';
// 对应 index_demo.ts 中的 export { default } from './user_demo.js';

const user = new User("Eve");
console.log(user.introduce());

// 导入接口（仅用于类型检查）
import type { Config } from './index_demo.js';
const config: Config = {
    host: "localhost",
    port: 8080
};

console.log(`Config - Host: ${config.host}, Port: ${config.port}`);

