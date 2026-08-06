// TypeScript 交叉类型

// 交叉类型（Intersection Types）将多个类型合并成一个新类型，新类型包含所有成员的类型
// 这类似于面向对象中的多重继承 (Multiple Inheritance)，让一个类型可以拥有多个类型的特性

// 交叉类型工作原理
// 交叉类型使用 & 符号将多个类型组合在一起，形成一个新的类型

// 交叉类型使用场景
// 类型组合: 合并多个类型特性
// Mixin 模式: 组合多个类的功能
// 替代接口继承: 当需要组合多个接口的特性时, 可以使用交叉类型, 更简洁的类型组合

// 为什么需要交叉类型?
// 在开发中，一个类型往往需要拥有多个类型的特性
// 交叉类型让我们可以将多个类型合并成一个，满足这种需求

// 概念说明：交叉类型使用 & 符号连接多个类型，表示新类型包含所有类型的成员
// 这类似于多重继承的概念

// 基本语法
// 使用 & 符号组合多个类型

// 定义人员类型
// 包含姓名和年龄
// interface Person {
//     name: string;
//     age: number;
// }

// 定义工作者类型
// 包含公司名称和薪资
// interface Worker {
//     company: string;
//     salary: number;
// }

// 使用交叉类型合并两个接口
// Employee 类型同时具有 Person 和 Worker 的所有属性
// type Employee = Person & Worker;

// 创建同时具有两个类型特性的对象
// const employee: Employee = {
//     name: "Alice",
//     age: 25,
//     company: "Google",
//     salary: 100000
// };

// console.log("员工: " + JSON.stringify(employee));

// 说明：交叉类型 A & B 意味着新类型同时具有 A 和 B 的所有属性，缺一不可

// 交叉类型与接口继承
// 交叉类型可以替代接口的多重继承

// 定义类型 A
// interface A {
//     a: string;
// }

// 定义类型 B
// interface B {
//     b: number;
// }

// 使用接口继承多个接口
// 需要使用 extends 继承多个接口
// interface AB extends A, B {
//     c: boolean;
// }

// 使用交叉类型（更简洁）
// 直接使用 & 符号组合类型
// type ABType = A & B & { c: boolean };

// // 两种方式都能创建包含所有属性的类型
// const obj: ABType = { a: "hello", b: 42, c: true };
// console.log("对象: " + JSON.stringify(obj));

// const obj2: AB = { a: "world", b: 100, c: false };
// console.log("对象2: " + JSON.stringify(obj2));

// 对比：交叉类型比接口继承更简洁，特别是当需要继承多个类型且需要添加额外属性时

// 类型混合（Mixin 模式）(Type Mixins)
// 使用交叉类型实现 Mixin 模式，可以动态组合类的功能

// 定义构造函数类型
// 接受任意参数，返回一个对象
// type Constructor = new (...args: any[]) => {};

// Mixin：添加时间戳功能
// 返回一个扩展了 Base 的新类
// function Timestamped<T extends Constructor>(Base: T) {
//     return class extends Base {
//         timestamp = Date.now();
//     };
// }

// Mixin：添加序列化功能
// 返回一个扩展了 Base 的新类，包含 serialize 方法
// function Serializable<T extends Constructor>(Base: T) {
//     return class extends Base {
//         serialize() {
//             return JSON.stringify(this);
//         }
//     };
// }

// 基础用户类
// class User {
//     name: string;
//     constructor(name: string) {
//         this.name = name;
//     }
// }

// 组合 Mixin
// 创建具有时间戳功能的用户类
// const TimestampedUser = Timestamped(User);
// 创建具有序列化功能的用户类
// const SerializableUser = Serializable(User);
// 组合两个 Mixin
// const FullUser = Serializable(Timestamped(User));

// 创建实例并测试
// const user = new FullUser("Alice");
// console.log("时间戳: " + user.timestamp);
// console.log("序列化: " + user.serialize());

// Mixin 模式：这是一种强大的模式，可以在不修改原有类的情况下为其添加新功能
// Mixin 本质是一个泛型函数，接收一个基类作为参数，返回一个扩展了该基类的新类

// 交叉类型与联合类型
// 交叉类型和联合类型结合时需要特别注意优先级

// 联合类型：可以是字符串或数字
// type StringOrNumber = string | number;

// 交叉类型：不兼容类型的交叉
// string & number = never（没有类型同时是字符串和数字）
// type Both = string & number;  // 结果是 never 类型

// function loop(): never {
//     while (true) {
//         console.log("无限循环中...");
//     }
// }
// let neverValue: Both = loop(); // 由于 Both 是 never 类型，无法赋值任何值

// 定义三个对象类型
// type A = { a: string };
// type B = { b: number };
// type C = { c: boolean };

// 联合类型与交叉类型结合
// (A | B) & C 会将联合类型的每个分支都与 C 交叉
// type Combined = (A | B) & C;
// type Combined = (A & C) | (B & C);

// 实际结果是：{ a: string; c: boolean } | { b: number; c: boolean }
// 即要么是 A + C，要么是 B + C
// const obj: Combined = { a: "hello", c: true };
// console.log("组合: " + JSON.stringify(obj));
// const obj2: Combined = { b: 42, c: false };
// console.log("组合2: " + JSON.stringify(obj2));

// 重要：不兼容的类型进行交叉会得到 never 类型
// 例如 string & number 得到 never 类型，表示没有任何值可以同时满足这两个类型

// 实用交叉类型
// 交叉类型常用于创建工具类型，实现类型的转换

// 映射类型：将所有属性变为可选
// 遍历 T 的所有属性，添加 ? 使其可选
// type Partial<T> = { [P in keyof T]?: T[P] };

// 映射类型：将所有属性变为必填
// 遍历 T 的所有属性，移除 ? 使其必填
// type Required<T> = { [P in keyof T]-?: T[P] };

// 映射类型：将所有属性变为只读
// 遍历 T 的所有属性，添加 readonly
// type Readonly<T> = { readonly [P in keyof T]: T[P] };

// 定义配置接口
// interface Config {
//     host: string;
//     port: number;
// }

// 使用工具类型
// const partialConfig: Partial<Config> = { host: "localhost" };
// const requiredConfig: Required<Config> = { host: "localhost", port: 8080 };
// const readonlyConfig: Readonly<Config> = { host: "localhost", port: 8080 };

// console.log("部分: " + JSON.stringify(partialConfig));
// console.log("必填: " + JSON.stringify(requiredConfig));
// console.log("只读: " + JSON.stringify(readonlyConfig));

// 工具类型：TypeScript 标准库中提供了许多基于交叉类型、条件类型和映射类型的工具类型
// 如 Partial、Required、Readonly 等

// 注意事项
// 不兼容类型：交叉不兼容的类型会得到 never
// 优先级：联合类型的优先级高于交叉类型
// 方法冲突：如果两个类型有同名的方法，需要手动处理冲突

// 最佳实践：交叉类型适合组合多个接口或类型，当需要多重继承时，优先使用交叉类型而非接口继承

// 总结
// 交叉类型是 TypeScript 中强大的类型组合工具

// 语法：使用 & 符号连接多个类型
// 合并：新类型包含所有类型的成员
// Mixin：可以用于实现类的功能组合
// never：不兼容类型交叉会得到 never 类型

// 建议：合理使用交叉类型可以创建灵活的类型组合，但要注意避免不必要类型交叉导致的 never 类型




export {}; // 确保文件是一个模块