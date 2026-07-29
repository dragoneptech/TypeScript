"use strict";
// TypeScript null 和 undefined
// 在 TypeScript 中，null 和 undefined 有特殊的处理方式
// 启用 strictNullChecks 后，需要显式处理这些值，这有助于编写更安全的代码
// null
// 表示"空值"
// 需要显式声明
// string | null
// undefined
// 表示"未定义"
// 可选属性自动包含
// name?: string
// 安全处理方式
// 可选链: obj?.prop
// 空值合并: value ?? default
// 类型守卫: if (val !== null)
// 为什么需要处理 null 和 undefined
// JavaScript 中 null 和 undefined 是常见的错误来源，很多运行时错误都与之相关
// TypeScript 的 strictNullChecks 选项要求开发者显式处理可能为空的值
// 这虽然增加了编码工作量，但能大幅减少空值导致的运行时错误，提高代码可靠性
// 概念说明：null 表示"空值"，即这里没有值；undefined 表示"未定义"，即这里还没有被赋值
// null 和 undefined 基础
// null 表示"空值"，undefined 表示"未定义"。两者在 TypeScript 中是独立的类型
// 声明 null 类型的变量
// 只能赋值为 null
// var empty: null = null;
// empty = undefined; // error TS2322: Type 'undefined' is not assignable to type 'null'
// 声明 undefined 类型的变量
// 只能赋值为 undefined
// var notDefined: undefined = undefined;
// notDefined = null; // error TS2322: Type 'null' is not assignable to type 'undefined'
// const eitherNullOrUndefined: null | undefined = null; // 可以赋值为 null 或 undefined
// let eitherNullOrUndefined: void = undefined; // 可以赋值为 undefined
// eitherNullOrUndefined = null;  // error TS2322: Type 'null' is not assignable to type 'void'
// 说明：在不启用 strictNullChecks 的情况下，这些类型可以相互赋值。启用后需要显式声明
// 联合类型处理 null
// 启用 strictNullChecks 后，需要使用联合类型显式声明可能为 null 的值
// 联合类型：可以是字符串或 null
// 显式声明值可能为空
// var uname: string | null = "Alice";
// uname = null;  // 正确：可以赋值为 null
// 访问可能为 null 的值需要先检查
// 函数参数可能是字符串或 null
// function getLength(str?: string | null | undefined): number {
//     // 使用条件检查是否为 null
//     // type guard
//     if (str === null || str === undefined) {
//         return 0;  // null 时返回 0
//     }
//     // TypeScript 会推断 str 不是 null
//     return str.length;
// }
// console.log("长度: " + getLength("hello"));
// console.log("长度: " + getLength(null));
// console.log("长度: " + getLength());
// 最佳实践：使用类型守卫（if 检查）来收窄类型，让 TypeScript 知道具体是什么类型
// 可选参数和属性
// 可选参数和可选属性自动包含 undefined，不需要显式声明 null
// 说明：可选参数 name?: string 等同于 string | undefined
// 可选参数：使用 ? 标记
// 参数可能是 string 或 undefined
// function greet(name?: string): string {
//     // 检查是否为 undefined
//     if (name === undefined) {
//         return "Hello, stranger!";
//     }
//     return "Hello, " + name;
// }
// console.log(greet("Alice"));
// console.log(greet());
// 可选属性：使用 ? 标记
// age 属性是可选的，可能不存在
// interface User {
//     name: string;
//     age?: number;  // 可选属性
// }
// var user: User = { name: "Bob" };
// console.log("用户: " + JSON.stringify(user));
// console.log("年龄: " + (user?.age));  // 使用可选链处理 undefined
// console.log("年龄: " + (user.age ?? "未提供"));  // 使用空值合并运算符处理 undefined
// 非空断言运算符 !
// 使用 ! 告诉编译器值不为 null 或 undefined
// 应该谨慎使用
// function getLength(str?: string | null): number {
//     // 非空断言：告诉编译器 str 不为 null
//     // 这是一个危险的写法，如果 str 真的为 null 会报错
//     // return str!.length;
//     // 更安全的写法：先检查是否为 null
//     // if (str === null || str === undefined) {
//     //     return 0;  // null 时返回 0
//     // } else {
//     //     return str.length;  // str 不为 null，可以安全访问 length
//     // }
//     return str?.length ?? 0; // 使用可选链和空值合并运算符处理 null 和 undefined
// }
// console.log("长度: " + getLength("hello"));
// // console.log("长度: " + getLength(null)); // 如果使用 return str!.length; 这会报错，因为 null 被断言为非空
// console.log("长度: " + getLength()); // 如果使用 return str!.length; 这会报错，因为 undefined 被断言为非空
// 警告：非空断言会绕过 TypeScript 的类型检查，如果值实际为 null，运行时仍会报错
// 尽量避免使用
// 空值合并运算符
// 使用 ?? 提供默认值，只有当值为 null 或 undefined 时才使用默认值
// 初始值为 null
// var uname: string | null = null;
// // ?? 运算符：左侧为 null/undefined 时使用右侧值
// // 如果 name 为 null，使用 "Guest"
// var displayName = uname ?? "Guest";
// console.log("显示名称: " + displayName);
// // 对比 || 运算符（会把 0 和空字符串视为 falsy）
// var num: number | null = 0;
// var result1 = num ?? 100;  // 0（正确：0 不是 null/undefined）
// var result2 = num || 100;  // 100（错误：0 被视为 falsy）
// console.log("?? 结果: " + result1);  // 输出: 0
// console.log("|| 结果: " + result2);  // 输出: 100
// 建议：优先使用 ?? 而不是 ||，因为 ?? 只会处理 null 和 undefined，不会错误地将 0 或空字符串视为 falsy
// 可选链
// 使用 ?. 安全访问可能不存在的嵌套属性，避免多层嵌套时的空值检查
// 定义人员类型，地址是可选的
// interface Person {
//     name: string;
//     address?: {
//         city: string;
//     };
// }
// // 创建人员对象，没有地址
// var person: Person = { name: "Alice" };
// // 可选链：安全访问可能不存在的属性
// // 如果 address 不存在，返回 undefined 而不会报错
// var city = person?.address?.city;
// // 结合空值合并运算符
// console.log("城市: " + city);
// console.log("城市: " + (person?.address?.city ?? "未知"));
// 最佳实践：可选链 ?. 是处理嵌套可选属性的最佳方式，配合空值合并运算符 ?? 可以提供默认值的兜底
// 注意事项
// 严格模式：建议启用 strictNullChecks 以获得更好的类型安全
// 避免断言：尽量不要使用非空断言 !
// ?? vs ||：优先使用 ?? 避免误判 0 和空字符串
// 可选链：处理嵌套可选属性时使用 ?.
// 最佳实践：使用类型守卫、可选链和空值合并运算符来处理 null 和 undefined，让代码更安全、更易读
// 总结
// 正确处理 null 和 undefined 是编写安全 TypeScript 代码的关键
// 严格模式：启用 strictNullChecks 后需显式处理
// 联合类型：使用 string | null 声明
// 可选参数/属性（使用？）：自动包含 undefined
// 非空断言：使用 !（谨慎使用）
// 空值合并：使用 ?? 提供默认值
// 可选链：使用 ?. 安全访问
// 建议：养成处理空值的习惯，使用可选链和空值合并运算符让代码更健壮
// ?. 是 JavaScript / TypeScript 中的 可选链操作符（Optional Chaining Operator）
// 它的作用：
// 当访问对象的属性、方法或数组元素时，如果前面的对象是 null 或 undefined，不会报错，而是直接返回 undefined
// 简单理解：
// ?. 可以安全地访问可能不存在的数据
// interface User {
//     name: string;
//     age?: number;  // 可选属性
//     address: {
//         city: string;
//     };
// }
// const user: User = {
//     name: "Alice",
//     address: {
//         city: "Beijing"
//     }
// };
// console.log(user.address.city);
// // console.log(user.age);
// // error TS2339: Property 'age' does not exist on type '{ name: string; address: { city: string; }; }'
// console.log(user?.age);  // undefined  // ?. 可选链操作符
// console.log(user.age ?? "Not specified");  // Not specified // ?? 空值合并运算符
