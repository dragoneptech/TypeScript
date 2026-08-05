// TypeScript 条件类型

// TypeScript 条件类型
// 条件类型（Conditional Types）是 TypeScript 类型系统中最强大的特性之一
// 它允许根据条件动态地选择类型，类似于编程语言中的三元表达式
// 条件类型使得类型定义更加灵活，是实现高级工具类型（自定义工具类型）的基础

// 条件类型工作原理
// 条件类型语法: T extends U ? X : Y
// 其中，T 和 U 是类型，X 和 Y 是类型表达式
// 如果 T 是 U 的子类型 (或检查 T 能否赋值给 U, 如果 T 能够赋值给 U)，则结果为 X，否则为 Y

// 为什么需要条件类型?
// 在实际的 TypeScript 开发中，我们经常需要根据不同的输入类型返回不同的类型
// 例如，一个函数可能接受字符串或数字参数，我们需要根据参数类型返回不同的结果类型
// 条件类型提供了一种在类型级别进行逻辑判断的能力，使得类型定义更加灵活和强大

// 概念说明：条件类型的语法是 T extends U ? X : Y
// 如果类型 T 可以赋值给类型 U，则返回类型 X，否则返回类型 Y

// 基本语法
// 条件类型使用三元表达式的语法，在类型层面进行条件判断
// 这使得我们可以根据输入类型动态地计算返回类型

// 条件类型语法：T extends U ? X : Y
// 如果 T 是字符串类型，返回 true，否则返回 false
// type IsString<T> = T extends string ? true : false;

// 使用条件类型
// string extends string 为 true，所以 A 类型是 true
// type A = IsString<string>;
// number extends string 为 false，所以 B 类型是 false
// type B = IsString<number>;

// 使用这些类型
// const a: A = true;
// const b: B = false;

// console.log("string 是字符串?: " + a);
// console.log("number 是字符串?: " + b);

// 说明：条件类型会在类型检查时自动进行求值，生成具体的类型


// 实际应用：类型过滤
// 条件类型最常见的应用之一是过滤类型
// 例如，可以创建一个类型来排除 null 和 undefined
// 内置工具类型 NonNullable<T> 就是一个例子，它会从类型 T 中排除 null 和 undefined
// 类型 T 一般是一个联合类型，NonNullable<T> 会返回一个新的类型，该类型不包含 null 和 undefined

// 使用条件类型实现 NonNullable
// 如果 T 是 null 或 undefined，返回 never（空类型），否则返回 T 本身
// type selfNonNullable<T> = T extends null | undefined ? never : T;

// 使用 selfNonNullable 类型
// string 不是 null/undefined，所以类型是 string
// type A = selfNonNullable<string>;
// null 是 null/undefined，所以类型是 never
// type B = selfNonNullable<null>;
// undefined 是 null/undefined，所以类型是 never
// type C = selfNonNullable<undefined>;

// 验证类型
// const a: A = "hello";
// console.log("非空: " + a);
// console.log("类型 A: " + typeof a);  // 输出: string
// const b: B = null; // 这里会报错，因为 B 是 never 类型
// const c: C = undefined; // 这里会报错，因为 C 是 never 类型

// never 类型：never 表示永不存在的类型
// 当条件不满足时，TypeScript 使用 never 来表示"不可用"的类型

// 类型推导：infer 关键字
// infer 关键字是条件类型中最强大的特性之一
// 它允许从类型中"提取"或"推导"出特定的类型部分

// 使用 infer 关键字推导函数的返回类型
// 如果 T 是函数类型，返回推断出的返回类型 R，否则返回 never
// type selfReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

// 定义一个返回用户对象的函数
// function getUser() {
//     return { name: "Alice" };
// }

// 定义一个返回数字的函数
// function getNumber() {
//     return 42;
// }

// 使用 selfReturnType 获取函数返回类型
// 推导为 { name: string }
// type R1 = selfReturnType<typeof getUser>;
// 推导为 number
// type R2 = selfReturnType<typeof getNumber>;

// 使用推导出的类型
// const r1: R1 = { name: "Bob" };
// const r2: R2 = 100;

// console.log("用户: " + JSON.stringify(r1));
// console.log("数字: " + r2);

// infer 关键字的作用：infer 就像类型系统中的"变量"，它可以捕获类型中的特定部分并在结果类型中使用

// 分布条件类型
// 当条件类型的泛型参数是联合类型时，会自动进行"分布"处理
// 也就是说，条件会对联合类型中的每个成员分别执行，然后合并结果

// ToArray 会将类型 T 转换为数组类型
// 当 T 是联合类型时，会自动分布处理每个类型
// type ToArray<T> = T extends any ? T[] : never;

// 联合类型会自动分布
// string | number 会分布为：ToArray<string> | ToArray<number>
// 即：string[] | number[]
// type StrOrNum = ToArray<string | number>;

// 可以赋值 string[] 或 number[]
// let arr: StrOrNum = ["hello"];
// console.log("数组: " + arr);

// 也可以赋值 number[]
// arr = [42];
// console.log("数组: " + arr);

// 分布机制：条件类型的分布特性是自动开启的
// 如果想禁用分布，可以使用方括号：[T] extends U

// 条件类型与映射类型结合
// 条件类型可以与映射类型结合，创建强大的类型转换工具
// 这种组合是实现 TypeScript 内置工具类型的基础

// 定义用户接口
// interface User {
//     // 用户 ID
//     id: number;
//     // 用户名
//     name: string;
//     // 用户邮箱
//     email: string;
// }

// 使用映射类型和条件类型实现 Partial
// 遍历 T 的所有属性，添加可选修饰符 ?
// type selfPartial<T> = {
//     [P in keyof T]?: T[P];
// };

// 使用映射类型和条件类型实现 Required
// 遍历 T 的所有属性，移除可选修饰符 -?
// type selfRequired<T> = {
//     [P in keyof T]-?: T[P];
// };

// 使用 Partial：所有属性变为可选
// var partial: selfPartial<User> = { name: "Alice" };

// 使用 Required：将 Partial<User> 的属性变为必填
// 需要先有 Partial<User> 类型
// type RequiredUser = selfRequired<selfPartial<User>>;
// var required: RequiredUser = { name: "Bob", id: 1, email: "bob@example.com" };

// const user: selfPartial<User> = {
//     name: "Bob",
//     id: 1
// };

// const user = {
//     name: "Bob",
//     id: 1
// };

// type RequiredUser = selfRequired<typeof user>;
// var required: RequiredUser = { name: "Bob", id: 1};


// console.log("可选: " + JSON.stringify(partial));
// console.log("必填: " + JSON.stringify(required));

// 组合使用：条件类型和映射类型的组合可以实现各种复杂的类型转换，如 Partial、Required、Readonly 等内置工具类型

// 高级示例：类型检查
// 条件类型还可以用于实现更复杂的类型检查
// 下面是一些实际开发中有用的类型检查示例

// 检查类型是否为 any
// any 与任何类型交叉都会得到 any，0 extends any 为 true
// type IsAny<T> = 0 extends (1 & T) ? true : false;

// 测试 IsAny
// any 是特殊类型，与任何类型交叉都返回 any
// type A = IsAny<any>;       // true
// // string 不是 any
// type B = IsAny<string>;    // false

// type C = IsAny<unknown>;   // false
// type D = IsAny<never>;     // false

// const a: A = true;
// const b: B = false;
// const c: C = false;
// const d: D = false;

// console.log("any 是 any?: " + a);
// console.log("string 是 any?: " + b);
// console.log("unknown 是 any?: " + c);
// console.log("never 是 any?: " + d);

// 检查类型是否可以赋值
// 如果 T 可以赋值给 U，返回 true，否则返回 false
// type IsAssignableTo<T, U> = T extends U ? true : false;

// 测试类型可赋值性
// string 可以赋值给 any，所以返回 true
// type CanAssign = IsAssignableTo<string, any>;
// const e: CanAssign = true;
// console.log("string 赋值给 any?: " + typeof e);

// 注意：any 是 TypeScript 中最"宽松"的类型，它可以赋值给任何类型，也可以接收任何类型的赋值

// 注意事项
// 延迟求值：条件类型是延迟求值的，只有在使用具体类型时才会进行计算
// 分布特性：联合类型会自动触发条件类型的分布机制
// infer 只能用在 extends 条件中：这是 infer 唯一可以出现的位置
// 配合映射类型：条件类型与映射类型结合可以创建强大的工具类型

// 进阶：许多 TypeScript 内置工具类型（如 Partial、Required、Extract）都是用条件类型实现的

// 总结
// 条件类型是 TypeScript 类型系统中最强大的特性之一

// 基本语法：T extends U ? X : Y
// infer 关键字：从类型中推导特定部分
// 分布特性：联合类型自动分布处理
// 应用场景：类型过滤、类型推导、类型检查
// 工具类型：大多数内置工具类型基于条件类型实现

// 最佳实践：熟练掌握条件类型可以让你写出更加灵活和类型安全的代码









