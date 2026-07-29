// TypeScript 特殊类型：never、void、unknown、any

// TypeScript 有四个特殊的类型：never、void、unknown 和 any

// 四种特殊类型对比

// any
// 任意类型
// 绕过类型检查
// 无安全性

// unknown
// 安全的任意类型
// 使用需检查
// 有安全性

// void
// 无返回值
// 用于函数
// 可返回 undefined

// never
// 永不返回
// 抛出异常/循环
// 所有类型的子类型

// 为什么需要特殊类型
// TypeScript 的类型系统非常强大，除了常规的类型外，还提供了四个特殊类型来处理特定的场景
// 理解这四种特殊类型的区别，能够帮助我们编写更安全、更准确的类型代码

// 概念说明：any、unknown、void、never 是 TypeScript 的特殊类型，它们各自有不同的含义和使用场景

// never 类型
// never 表示永不返回的类型。通常用于抛出异常或无限循环的函数

// 抛出异常的函数
// 函数永远不会正常返回，总会抛出错误
// function throwError(message: string): never {
//     throw new Error(message);
// }

// // 无限循环的函数
// // 函数永远不会返回，程序会一直运行
// function infiniteLoop(): never {
//     while (true) {
//         console.log("运行中...");
//     }
// }

// // never 是所有类型的子类型
// // 这意味着 never 可以赋值给任何类型
// var neverValue: never;
// // neverValue = throwError("这是一个错误");  // 正确：throwError 返回 never
// var num: number = neverValue;  // 正确：never 是 number 的子类型
// console.log("never 赋值给 number: " + num);  // 不会被执行，因为 throwError 会抛出异常

// 重要：never 是所有类型的子类型，这意味着 never 可以赋值给任何类型
// 但任何类型都不能赋值给 never（除了 never 本身）
// never 值不能直接赋值给 never 类型的变量，除非它是通过抛出异常或无限循环的函数返回的

// void 类型
// void 表示没有返回值，通常用于声明没有 return 语句的函数

// 无返回值函数
// 函数执行后没有返回值
// function logMessage(message: string): void {
//     console.log("日志: " + message);
//     // 没有 return 语句，或 return undefined
// }

// logMessage("Hello");

// // void 变量（很少使用）
// // 只能赋值为 undefined
// var empty: void = undefined;
// console.log("void 变量: " + empty);
// // 非 strict 模式下，void 变量也可以赋值为 null
// // tsc --strictNullChecks false
// empty = null;
// console.log("void 变量赋值为 null: " + empty);

// 说明：void 实际上和 undefined 很相似，主要用于函数的返回类型声明，表示这个函数没有返回值

// unknown 类型
// unknown 是类型安全的 any
// 使用 unknown 时，必须先进行类型检查(typeof 或 is)、类型断言(如 as、! 等)、类型守卫(如 typeof、instanceof、in 等)才能使用

// unknown 接受任意类型
// 这是"安全的" any
// var value: unknown = "hello";
// value = 42;
// value = true;

// unknown 类型不能直接赋值给其他类型
// 如果取消注释下一行，编译器会报错
// var str: string = value;

// 需要进行类型检查后，才能赋值
// if (typeof value === "string") {
//     // TypeScript 知道 value 是 string 类型
//     var str: string = value;
//     console.log("字符串长度: " + str.length);
// }

// 也可以使用类型断言
// const str2: string = value as string;
// console.log("字符串长度: " + str2.length);

// 安全：unknown 强制要求在使用前进行类型检查，这保护了类型安全
// 处理未知来源的数据时，应该使用 unknown 而不是 any

// any 类型
// any 完全绕过类型检查，可以赋值为任意类型
// 这是 TypeScript 中最不安全的类型

// any 可以是任意类型
// 完全绕过类型检查
// var anything: any = "hello";
// anything = 42;
// anything = true;

// // any 可以赋值给任意类型
// // 这会破坏类型安全
// var str: string = anything;
// var num: number = anything;

// console.log("字符串: " + str);
// console.log("数字: " + num);

// // any 类型的对象可以调用任意方法
// // 编译器不会报错，但运行时可能出错
// var obj: any = {};
// obj.foo();  // 不会报错，但实际上 foo 方法不存在
// obj.bar = "value";

// 警告：any 类型会完全绕过 TypeScript 的类型检查，应该尽量避免使用
// 在必须使用的情况下，要确保值的类型是正确的


// 对比 any vs unknown
// 建议：处理未知类型的数据时，优先使用 unknown 而不是 any，这样能强制进行类型检查

// never vs void
// 关键区别：never 表示函数永远不会正常返回（要么抛异常，要么死循环）
// void 表示函数正常执行完毕，但没有返回值

// 实际应用：Exhaustive Check
// never 类型的一个重要用途是进行穷举检查，确保所有可能的情况都被处理

// 定义形状的联合类型
// type Shape = { kind: "circle", radius: number }
//            | { kind: "square", side: number };
//         //    | { kind: "triangle", base: number, height: number };
// // Exhaustive Check：这种模式确保当添加新的类型分支时
// // 如果忘记在 switch 中处理，编译器会报错，因为新增的类型无法赋值给 never


// // 计算形状面积
// function area(shape: Shape): number {
//     switch (shape.kind) {
//         case "circle":
//             return Math.PI * shape.radius ** 2;
//         case "square":
//             return shape.side ** 2;
//         default:
//             // default 分支应该处理所有未预料到的情况
//             // 如果添加新的 Shape 类型但忘记处理，编译器会报错
//             // 因为新增的类型无法赋值给 never
//             var _exhaustive: never = shape;
//             return _exhaustive;
//     }
// }

// var circle = { kind: "circle" as const, radius: 5 };
// var square = { kind: "square" as const, side: 4 };

// console.log("圆形面积: " + area(circle).toFixed(2));
// console.log("正方形面积: " + area(square));

// 注意事项
// never 是子类型：never 可以赋值给任何类型，但任何类型都不能赋值给 never
// void vs undefined：在 JavaScript 中，void 和 undefined 基本等同
// unknown 需要检查：使用 unknown 类型的值前，必须进行类型检查
// unkown vs any：unknown 是类型安全的 any，优先使用 unknown
// 避免 any：尽量不要使用 any，优先使用 unknown

// 最佳实践：从高到低的类型安全程度：never > void > unknown > any。尽量使用更安全的类型

// 总结
// 理解这四种特殊类型对于编写高质量的 TypeScript 代码非常重要

// never：永不返回，用于 exhaustive check（穷举检查），是所有类型的子类型
// void：无返回值，用于普通没有返回值的函数
// unknown：安全的任意类型，使用前必须进行类型检查
// any：绕过所有类型检查，应该尽量避免使用

// 建议：编写代码时，优先使用更严格的类型。处理未知数据使用 unknown，函数无返回值使用 void，需要穷举检查时使用 never





