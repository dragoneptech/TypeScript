// TypeScript 可选链

// 可选链（Optional Chaining）是 TypeScript 和 JavaScript 中一种安全的属性访问方式
// 它允许开发者以链式调用的方式安全地访问嵌套对象属性
// 当访问路径中的任意一个属性为 null 或 undefined 时，整个表达式会短路返回 undefined，而不会抛出错误
// 这极大地简化了深层嵌套对象的属性访问代码，避免了大量的条件判断

// 可选链工作原理
// 传统方式（冗长）
// 需要多层检查，采用短路运算
// const city = user && user.address && user.address.city;  // 容易出错，代码冗余

// 可选链方式（简洁）
// 一行搞定，采用可选链运算符 ?. 进行安全访问
// const city = user?.address?.city;  // 安全简洁，自动短路

// 可选链的三种形式
// obj?.prop —— 属性访问
// arr?.[0] —— 数组访问
// obj?.method() —— 方法调用

// 为什么需要可选链？
// 在 JavaScript/TypeScript 开发中，经常需要访问深层嵌套的对象属性
// 传统的写法需要逐层检查属性是否存在
// 这种方式不仅代码冗长，而且容易遗漏检查导致运行时错误

// 概念说明：可选链的核心是"短路求值"
// 当链中某个属性的值为 null 或 undefined 时，整个表达式的结果立即返回 undefined，而不会继续访问后续属性
// 注意短路求值和可选链的行为略有不同，短路求值是基于逻辑运算符的，而可选链是基于属性访问的
// console.log(0 && "Hello"); // 输出 0，短路求值
// const num: number = 0;
// console.log(num && "Hello"); // 输出 0，短路求值
// console.log(num?.toString()); // 输出 "0"，因为 num 不为 null 或 undefined
// console.log(num.toFixed(2)); // 输出 "0.00"，正常调用方法

// 基本语法
// 使用 ?. 运算符安全访问可能不存在的属性
// 与传统的 && 链式检查相比，可选链语法更加简洁直观

// 定义一个嵌套的用户对象
// 包含姓名和地址信息，地址中有城市
// const user = {
//     name: "RUNOOB",
//     address: {
//         city: "Beijing"
//     }
// };

// 传统方式：使用 && 逐层检查
// 这种方式代码冗长，容易遗漏
// const city1 = user && user.address && user.address.city;

// 可选链方式：使用 ?. 运算符
// 如果任意一层为 null 或 undefined，直接返回 undefined
// const city2 = user?.address?.city;

// console.log("传统方式: " + city1);
// console.log("可选链: " + city2);

// 提示：当对象属性存在时，两种方式的结果相同
// 但可选链的代码更简洁，更易读

// 处理不存在的属性
// 当访问路径中的属性不存在时，可选链会安全地返回 undefined，而不会抛出错误
// 这对于处理来自 API 的数据或用户表单输入特别有用

// 定义一个不完整用户对象
// 只有 name 属性，没有 address 属性
// interface User {
//     name: string;
//     address?: {
//         city?: string;
//         country?: {
//             name: string;
//         };
//     };
// }
// const user: User = {
//     name: "RUNOOB"
//     // address 属性不存在
// };

// 使用可选链访问深层属性
// user.address 为 undefined，所以 city 也是 undefined
// const city = user?.address?.city;

// 访问更深的嵌套属性
// 即使 country 也不存在，仍然返回 undefined 而不报错
// const country = user?.address?.country?.name;

// console.log("城市: " + city);
// console.log("国家: " + country);

// 注意：可选链只会在属性访问时返回 undefined，不会创建新的对象或属性


// 可选链与数组结合
// 可选链可以与数组下标访问结合使用，安全地访问数组中的元素
// 使用 ?.[index] 语法，可以在数组元素不存在时返回 undefined

// 定义一个用户数组
// const users: { name: string }[] = [
//     { name: "Alice" },
//     { name: "Bob" }
// ];

// 安全访问数组第一个元素的名字
// users?.[0] 存在，返回 "Alice"
// const firstUser = users?.[0]?.name;

// 安全访问数组中不存在的元素
// users?.[9] 不存在（数组只有2个元素），返回 undefined
// const tenthUser = users?.[9]?.name;

// console.log("第一个用户: " + firstUser);
// console.log("第十个用户: " + tenthUser);

// 说明：?.[index] 与 ?. 的区别在于：前者用于数组，后者用于对象属性

// 可选链与方法调用
// 可选链可以用于安全地调用可能不存在的方法
// 使用 ?.() 语法，如果方法不存在则返回 undefined，而不会抛出错误

// 定义一个用户对象，包含姓名和 greet 方法
// interface User {
//     name: string;
//     greet?: () => string; // greet 方法是可选的
//     sayHello?: () => string; // sayHello 方法是可选的
// }

// const user: User = {
//     name: "Alice",
//     // 定义一个打招呼方法
//     greet: function() {
//         return "Hello, " + this.name;
//     }
// };

// 安全调用存在的方法
// user.greet 存在，正常调用并返回结果
// const message1 = user.greet?.();

// 安全调用不存在的方法
// user.sayHello 不存在，返回 undefined 而不报错
// const message2 = user.sayHello?.();

// console.log("greet: " + message1);
// console.log("sayHello: " + message2);

// 应用场景：这在处理可选的回调函数或事件处理程序时特别有用

// 可选链赋值
// TypeScript / JavaScript 不允许使用可选链作为赋值运算符的左侧（Left-Hand Side）
// 可选链只能用于读取

// 定义一个简单的用户对象
// interface User {
//     name: string;
//     address?: {
//         city?: string;
//     };
// }

// var user: User = {
//     name: "Alice"
// };

// 尝试使用可选链赋值
// user?.address?.city = "Beijing";
// user?.name = "Bob"; // 直接修改 name 属性，失败

// console.log("用户: " + JSON.stringify(user));

// 注意：可选链不能用于赋值操作，因为它可能会导致不明确的行为！！！

// 可选链与空值合并与 (?. or ??)
// 可选链经常与空值合并运算符 ?? 结合使用
// 这种组合可以在属性不存在时提供默认值，使代码更加健壮

// 定义一个不完整的用户对象
// interface User {
//     name: string;
//     address?: {
//         city?: string;
//         country?: {
//             name: string;
//         };
//     };
// }

// const user: User = {
//     name: "Alice"
//     // address 不存在
// };

// 可选链 + 空值合并：当 city 为 null 或 undefined 时使用默认值
// const city = user?.address?.city ?? "未知城市";
// const city = user?.address?.city || "未知城市";

// console.log("城市: " + city);

// 对比：传统方式的复杂写法
// const country = user && user.address && user.address.country
//     ? user.address.country
//     : "未知国家";

// console.log("国家: " + country);

// 说明：?? 只在值为 null 或 undefined 时使用默认值
// 而 || 会在值为 falsy（0、""、false）时也使用默认值。在处理数字或字符串时，应优先使用 ??


// 注意事项
// 短路求值：可选链遇到 null 或 undefined 会立即返回，不会继续访问后续属性
// 不能创建属性：可选链不能用于赋值操作（不能出现在赋值运算符 = 的左侧），它只用于读取属性
// 与空值合并配合：建议始终使用 ?? 提供默认值，而少用或不用 ||
// 性能考虑：虽然可选链更安全，但在属性一定存在的情况下，直接访问性能更好

// 建议：在实际开发中，对于来自外部数据（如 API 响应、用户输入）的属性，优先使用可选链进行安全访问

// 总结
// 可选链是现代 JavaScript/TypeScript 中处理嵌套对象的重要特性

// ?.：安全访问对象属性
// ?.[index]：安全访问数组元素
// ?.()：安全调用可能不存在的方法
// ??：提供默认值，处理 undefined 情况

// 最佳实践：对于可能不存在的深层属性访问，始终使用可选链
// 结合空值合并运算符，可以写出既安全又简洁的代码


// 截至 TypeScript 7.x，仍然不支持可选链赋值（Optional Chaining Assignment）
// 这个限制来自 JavaScript ECMAScript 规范

// 当前推荐替代方案
// 方法1：if 判断（最清晰）
// let user = {
//     name: "Alice"
//     // address 不存在
// };
// if (user) {
//     user.name="Bob";
// }

// console.log("用户: " + JSON.stringify(user));

// 方法2：逻辑与 &&
let user: { name:string } | undefined;

user = { name: "Alice" };
user && (user.name="Bob");

console.log("用户: " + JSON.stringify(user));