// TypeScript 模板字面量类型

// 模板字面量类型 (Template Literal Types) 是基于字符串字面量类型 (string) 构建
// 支持通过插值生成新的字符串类型，类似于 JavaScript 中的模板字符串 (Template String)
// 这让 TypeScript 能够对字符串进行更精确的类型检查，适用于事件名、路径、类名等场景

// 模板字面量类型工作原理

// 内置工具类型
// Uppercase
// Lowercase
// Capitalize
// Uncapitalize

// 为什么需要模板字面量类型?
// 在开发中，我们经常需要处理格式化的字符串
// 如事件名（onClick）、API 路径（get:/users）、CSS 类名（btn-primary-md）等
// 使用普通的 string 类型无法精确描述这些格式，而模板字面量类型让我们可以精确地定义这些字符串的类型
// 这大大增强了 TypeScript 的类型安全性，减少了运行时错误

// 概念说明：模板字面量类型使用反引号（``）和 ${} 插值语法来定义字符串类型
// 类似于 JavaScript 的模板字符串，但用在类型层面

// 基本语法
// 模板字面量类型使用反引号和插值来定义类型

// 定义基础字符串字面量类型
// type World = "world";

// 使用模板字面量类型
// `Hello ${World}` 相当于 "Hello world"
// type Greeting = `Hello ${World}`;

// 只能赋值符合类型定义的字符串
// const greeting: Greeting = "Hello world";
// console.log("问候: " + greeting);

// 说明：模板字面量类型会将插值的位置替换为实际的字符串，生成新的字面量类型

// 内置工具类型
// TypeScript 提供了四个内置的工具类型来处理字符串大小写

// Uppercase：将字符串转为大写
// type UpperHello = Uppercase<"hello">;  // "HELLO"
// const upperHello: UpperHello = "HELLO";  // 正确

// Lowercase：将字符串转为小写
// type LowerHELLO = Lowercase<"HELLO">;  // "hello"
// const lowerHello: LowerHELLO = "hello";  // 正确

// Capitalize：将字符串首字母大写
// type CapitalizedHello = Capitalize<"hello">;  // "Hello"
// const capitalizedHello: CapitalizedHello = "Hello";  // 正确

// Uncapitalize：将字符串首字母小写
// type UncapitalizedHello = Uncapitalize<"Hello">;  // "hello"
// const uncapitalizedHello: UncapitalizedHello = "hello";  // 正确

// console.log("Uppercase: " + upperHello);
// console.log("Lowercase: " + lowerHello);
// console.log("Capitalize: " + capitalizedHello);
// console.log("Uncapitalize: " + uncapitalizedHello);

// 应用场景：这些工具类型在处理事件名、方法名等需要统一格式的场景非常有用

// 事件类型
// 使用模板字面量类型可以精确地定义事件名称的类型

// 构建事件名类型
// `on${Capitalize<string>}` 生成以 "on" 开头，首字母大写的字符串
// type EventName = `on${Capitalize<string>}`;
// `handle${Capitalize<string>}` 生成以 "handle" 开头，首字母大写的字符串
// type Handler = `handle${Capitalize<string>}`;

// 只能赋值符合格式的字符串
// const clickEvent: EventName = "onClick";
// const focusEvent: EventName = "onFocus";
// const handler: Handler = "handleSubmit";

// console.log("事件: " + clickEvent);
// console.log("事件: " + focusEvent);
// console.log("处理器: " + handler);

// 优势：使用模板字面量类型后，像 "onclick"（小写）这样的错误格式会被 TypeScript 拒绝

// 路径类型
// 使用模板字面量类型可以精确地定义 API 路径的类型

// 定义 HTTP 方法类型
// type HttpMethod = "get" | "post" | "put" | "delete";

// 定义路径格式
// type ApiEndpoint = `/${string}`;  // 以斜杠开头的字符串

// 组合成完整的 API 路径类型
// type ApiPath = `${HttpMethod}:${ApiEndpoint}`;

// 只能赋值符合格式的路径
// const getUsers: ApiPath = "get:/users";
// const createUser: ApiPath = "post:/users";

// console.log("路径: " + getUsers);
// console.log("路径: " + createUser);

// 类型安全：像 "/users"（没有方法前缀）这样的路径会被 TypeScript 报错

// 复杂示例
// 模板字面量类型可以组合多个联合类型，生成所有可能的组合

// 带数字的模板类型
// ${number} 匹配任意数字
// type Row = `row${number}`;
// type Row10 = Row;  // Row10 是 Row 的别名

// const row12: Row10 = "row12";  // 正确
// console.log("行: " + row12); // 输出: 行: row12

// 组合多个类型
// type Variant = "primary" | "secondary";
// type Size = "sm" | "md" | "lg";
// 这会生成 6 种组合：btn-primary-sm, btn-primary-md, btn-primary-lg...
// type ClassName = `btn-${Variant}-${Size}`;

// 只能赋值生成的 6 种组合之一
// const className: ClassName = "btn-primary-md";
// console.log("类名: " + className);

// 组合爆炸：模板字面量类型会自动展开所有组合
// 如果联合类型有很多选项，生成的类型可能会非常庞大

// 自定义工具类型
// 可以创建自己的模板字面量工具类型

// 添加前缀的工具类型
// T 是任意字符串，P 是要添加的前缀
// type Prefix<T extends string, P extends string> = `${P}${Capitalize<T>}`;

// 添加后缀的工具类型
// T 是任意字符串，S 是要添加的后缀
// type Suffix<T extends string, S extends string> = `${Capitalize<T>}${S}`;

// 使用自定义工具类型
// type HandlerName = Prefix<"click", "on">;  // 生成 "onClick"
// type ButtonId = Suffix<"submit", "Btn">;  // 生成 "SubmitBtn"

// const handler: HandlerName = "onClick";
// const id: ButtonId = "SubmitBtn";

// console.log("处理器: " + handler);
// console.log("ID: " + id);

// 泛型模板：模板字面量类型可以与泛型结合，创建可复用的工具类型

// 注意事项
// 插值类型：模板中的 ${} 可以是具体字符串、联合类型、string、number 等
// 组合数量：组合多个联合类型时，生成的类型可能非常大
// 大小写处理：使用内置工具类型处理字符串大小写

// 最佳实践：使用模板字面量类型处理事件名、路径、类名等有固定格式的字符串，可以获得更好的类型安全

// 总结
// 模板字面量类型是 TypeScript 强大的类型系统的一部分

// 模板语法：使用反引号和 ${T} 插值构建类型
// 内置工具：Uppercase、Lowercase、Capitalize、Uncapitalize
// 应用场景：事件名、API 路径、CSS 类名等
// 自定义：创建可复用的工具类型

// 建议：在需要格式化字符串的场景，优先使用模板字面量类型来获得编译期的类型检查
