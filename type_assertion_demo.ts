// TypeScript 类型断言

// 类型断言（Type Assertion）是一种告诉编译器"我比你更清楚这个值的类型"的机制
// 它允许开发者手动覆盖 TypeScript 的类型推断结果，类似于其他语言的类型转换
// 但仅在编译阶段生效，不产生任何运行时代码

// 两种语法形式
// 类型断言有两种写法，推荐统一使用 as 语法，尖括号语法在 JSX 文件中会与标签语法冲突

// 尖括号语法（不推荐，在 .tsx 文件中无法使用）
// const str1: any = "hello";
// const len1: number = (<string>str1).length;

// as 语法（推荐）
// const str2: any = "world";
// const len2: number = (str2 as string).length;

// console.log(len1);  // 5
// console.log(len2);  // 5

// 注意：在 React 的 .tsx 文件中，尖括号写法会与 JSX 标签冲突，必须使用 as 语法


// 常见使用场景
// 处理 any / unknown 类型
// 从外部接口、JSON 解析等场景获取的数据通常为 any，通过断言可以恢复类型提示
// const response: any = { name: "Alice", age: 25 };

// 断言为具体类型，获得类型提示
// const user = response as { name: string; age: number };

// console.log(user.name);  // Alice
// console.log(user.age);   // 25

// 收窄联合类型
// 当已知联合类型中的具体分支，但编译器无法自动判断时，可使用断言明确类型
// type Shape = { kind: "circle"; radius: number }
//     | { kind: "rect"; width: number; height: number };

// function getArea(shape: Shape): number {
//     if (shape.kind === "circle") {
//         return Math.PI * (shape as { kind: "circle"; radius: number }).radius ** 2;
//     }
//     const rect = shape as { kind: "rect"; width: number; height: number };
//     return rect.width * rect.height;
// }

// console.log(getArea({ kind: "circle", radius: 5 }).toFixed(2));  // 78.54
// console.log(getArea({ kind: "rect", width: 4, height: 6 }));     // 24

// 提示：优先使用类型守卫（typeof / instanceof / 判别属性）收窄类型，只有在守卫无法覆盖的场景才使用断言
// type Shape = { kind: "circle"; radius: number }
//     | { kind: "rect"; width: number; height: number };

// function getArea(shape: Shape): number {
//     if (shape instanceof Object && "kind" in shape && shape.kind === "circle") {
//         return Math.PI * shape.radius ** 2;
//     } else {
//         // const rect = shape as { kind: "rect"; width: number; height: number };
//         // return rect.width * rect.height;
//         return shape.width * shape.height;
//     }
// }

// console.log(getArea({ kind: "circle", radius: 5 }).toFixed(2));  // 78.54
// console.log(getArea({ kind: "rect", width: 4, height: 6 }));     // 24

// 操作 DOM 元素
// document.querySelector 返回的是 Element | null，断言为具体元素类型后才能访问其专属属性
// 参阅 TypeScript/html_dom_demo/index.ts


// 非空断言 !
// 在值后加 !，告诉编译器该值不为 null 或 undefined，适用于你能确保非空但编译器无法推断的场景
// function printLength(str?: string) {
//     // 用 ! 断言 str 一定有值
//     if (str) {
//         console.log(str.length);
//     } else {
//         console.log(0);
//     }
// }

// function printLength(str?: string) {
//     // 用 ! 断言 str 一定有值
//     console.log(str!.length);
// }

// 运行正常
// printLength("hello");  // 5

// 运行时报错：Cannot read properties of undefined
// printLength();

// 运行正常
// printLength("hello");  // 5

// 运行时报错：Cannot read properties of undefined
// printLength();

// 警告：非空断言会绕过编译器的空值检查，若实际值为 null / undefined，运行时仍会抛出错误。在条件允许时优先使用可选链 ?. 代替

// function printLength(str?: string) {
//     // 用 ! 断言 str 一定有值
//     console.log(str?.length);
// }

// // 运行正常
// printLength("hello");  // 5

// // 运行正常
// printLength();  // undefined

// 常量断言 as const
// as const 将字面量推断为最窄的只读字面量类型，常用于定义枚举值、配置常量和元组
// 普通声明：推断为 string[]，元素可修改
// const colors1 = ["red", "green", "blue"];
// colors1.push("yellow");  // 允许
// console.log(colors1);  // ['red', 'green', 'blue', 'yellow']

// as const：推断为 readonly ["red", "green", "blue"]，元素和长度均不可变
// const colors2 = ["red", "green", "blue"] as const;
// colors2.push("yellow");  // 错误：只读数组不能 push
// error TS2339: Property 'push' does not exist on type 'readonly ["red", "green", "blue"]'

// 对象同理：所有属性变为 readonly 字面量类型
// const config = {
//     host: "localhost",
//     port: 3000
// } as const;
// // config.port = 8080;  // 错误：只读属性不能修改

// // console.log(colors2);         // ['red', 'green', 'blue']
// console.log(config.host);     // localhost
// console.log(config.port);     // 3000

// 断言不是类型转换
// 类型断言只影响编译器的类型检查，编译后不生成任何转换代码。将 "42" 断言为 number，运行时它仍然是字符串
// const strNum: any = "42";

// 断言为 number，但运行时仍是 string
// const wrongNum = strNum as number;
// console.log(typeof wrongNum);    // string（不是 number！）
// console.log(wrongNum + 1);       // 421（字符串拼接，不是数字相加）

// 真正的类型转换需要使用转换函数
// const realNum = Number(strNum);
// console.log(typeof realNum);     // number
// console.log(realNum + 1);        // 43


// 双重断言
// 当两个类型之间没有重叠关系，TypeScript 会拒绝直接断言
// 此时可借助 unknown / any 作为中转，但这是危险操作，应尽量避免
// const num = 42;

// 直接断言：number 与 string 无重叠，编译器报错
// const str = num as string;

// 双重断言：先断言为 unknown / any，再断言为目标类型
// const str = num as unknown as string;
// const str = num as any as string;

// console.log(str);          // 42
// console.log(typeof str);   // number（运行时类型未变，断言只在编译期生效）

// 警告：双重断言会完全绕过 TypeScript 的类型系统，极易引发运行时错误
// 仅在处理第三方库类型不准确等特殊情况下使用，并在代码中注明原因


// 总结
// 语法选择：统一使用 as 语法，避免在 JSX 中使用尖括号写法
// 断言 vs 转换：断言仅影响编译期类型，不产生运行时代码，真正的值转换需使用 Number()、String() 等函数
// 非空断言：使用 ! 前确保值真的非空，否则运行时会报错，条件允许时优先用 ?.
// 常量断言：as const 是安全且实用的断言，推荐用于配置对象和常量数组
// 双重断言：是最后手段，使用时必须注释说明原因



