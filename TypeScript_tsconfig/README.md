# tsconfig.json 的作用
- tsconfig.json 是 TypeScript 编译器配置文件

# 使用 tsc --init 生成 tsconfig.json 配置文件

# npm 项目中生成 tsconfig.json 配置文件
- 初始化 npm: npm init
- 安装 TypeScript: npm install --save-dev typescript / npm install -D typescript
- 生成 tsconfig.json 配置文件: npx tsc --init （使用当前项目安装的 TypeScript 版本）

# module 配置
| 配置       | 模块        |
| -------- | --------- |
| commonjs | Node旧模块   |
| esnext   | ES Module |
| nodenext | Node现代ESM |
| node16   | Node16模块  |

# nodenext 表示：按照最新 Node.js 规则处理 ESM 和 CommonJS
- 根据 package.json 中的 type 决定 ESM / CommonJS
- { "type": "module" } 按照 ESM
- { "type": "commonjs" } 按照 CommonJS
- 这是目前 Node.js + TypeScript 推荐配置

# target: 指定生成 JavaScript 版本
- esnext
- 适合 Node.js 最新版本
- 适合现代浏览器

# types: 指定自动加载哪些类型声明
- 例如: "types": ["node"]
- 安装: npm install -D @types/node
- 会有 node_modules/@types/node，里面包含：process、fs 和 Buffer 等类型

# declaration: 生成 xxx.d.ts 声明文件
- 作用: 给别人使用你的库时提供类型