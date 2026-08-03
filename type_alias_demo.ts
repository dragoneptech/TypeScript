// TypeScript type 别名

// type 别名（Type Alias）用于为现有类型创建别名，让代码更简洁、更易读
// 通过类型别名，可以为复杂类型定义一个简短的名字，提高代码的可维护性

// 原始复杂类型
// type 别名

// type 别名应用场景
// 基础类型别名
// 联合类型别名
// 函数类型别名
// 泛型类型别名

// 为什么需要 type 别名
// 1. 提高代码的可读性
// 2. 增强代码的可维护性
// 3. 减少重复代码
// 4. 使类型定义更加清晰和直观

// 当代码中多次使用同一个复杂类型时，每次都写完整类型会很冗长
// type 别名可以为复杂类型定义一个简洁的名字，让代码更易读、更易维护
// 特别是在使用联合类型、函数类型、元组等复杂类型时，type 别名非常有用

// 概念说明：type 别名使用 type 关键字定义，它只是为现有类型起了一个新名字，不会创建新的类型

// 基本用法
// 使用 type 关键字为类型定义别名

// 类型别名：为联合类型定义别名
// ID 可以是字符串或数字
// type ID = string | number;

// 类型别名：为对象类型定义别名
// Point 表示一个坐标点
// type Point = { x: number; y: number };

// 使用类型别名
// const userId: ID = "123";
// const productId: ID = 456;

// 使用 Point 类型别名
// const point: Point = { x: 10, y: 20 };

// console.log("用户ID: " + userId);
// console.log("产品ID: " + productId);
// console.log("坐标: " + JSON.stringify(point));

// 说明：类型别名只是给类型起了个新名字，编译后不会产生实际代码，它完全用于开发时的类型检查

// 接口 vs 类型别名
// 接口（Interface）和类型别名（Type Alias）都可以用来定义类型，但它们有一些区别
// 接口主要用于定义对象的结构，而类型别名可以定义任何类型的别名
// 接口可以被扩展（extend），而类型别名不能
// 接口可以被合并（merge），而类型别名不能
// 在大多数情况下，接口和类型别名可以互换使用，选择哪一个主要取决于具体的需求和偏好

// 使用 type 别名定义对象类型
// type 可以定义任何类型，不仅仅是对象
// type PersonType = {
//     name: string;
//     age: number;
// };

// 使用接口定义对象类型
// 接口可以声明合并，可以被类实现
// interface PersonInterface {
//     name: string;
//     age: number;
// }

// 两者都可以用来声明变量类型
// const person1: PersonType = { name: "Alice", age: 25 };
// const person2: PersonInterface = { name: "Bob", age: 30 };

// console.log("PersonType: " + JSON.stringify(person1));
// console.log("PersonInterface: " + JSON.stringify(person2));

// 区别：type alias 可以定义任何类型（联合类型、元组、函数类型等）
// 而接口主要用于定义对象类型
// 接口支持声明合并，type 不支持

// 类型别名与联合类型（Type alias and union types）
// 联合类型是多个类型的组合，使用 | 分隔

// 联合类型别名：定义状态的可能值
// Status 只能是这三个字符串字面量之一
// type Status = "pending" | "success" | "error";

// 联合类型别名：定义多种可能的返回类型
// Result 可以是字符串、数字或布尔值
// type Result = string | number | boolean;

// 使用联合类型别名
// function getStatus(status: Status): void {
//     console.log("状态: " + status);
// }

// getStatus("success");
// getStatus("error");

// // 使用 Result 类型
// let result: Result = "hello";
// result = 42;
// console.log("结果: " + result);

// 应用场景：联合类型别名常用于定义状态码、错误类型、API 返回值等场景

// 类型别名与元组（Type alias and tuple types）

// 元组类型别名：定义坐标
// Coordinate 是一个包含两个数字的元组
// type Coordinate = [number, number];

// 元组类型别名：定义姓名和年龄
// NameAge 是一个字符串和数字的元组
// type NameAge = [string, number];

// 使用元组类型别名
// const coord: Coordinate = [10, 20];
// const person: NameAge = ["Alice", 25];

// console.log("坐标: " + coord);
// console.log("信息: " + person[0] + ", " + person[1]);

// 说明：元组类型别名让元组的使用更加清晰，避免了每次都需要写出完整元组类型的问题

// 类型别名与函数 (Type alias and function types)
// 函数类型别名可以简化函数类型的声明

// 函数类型别名：定义回调函数类型
// Callback 接受一个字符串参数，返回 void
// type Callback = (result: string) => void;

// 函数类型别名：定义数学运算函数类型
// MathOperation 接受两个数字参数，返回数字
// type MathOperation = (a: number, b: number) => number;

// 使用函数类型别名
// const add: MathOperation = function(a, b) { return a + b; };
// const multiply: MathOperation = function(a, b) { return a * b; };

// console.log("加法: " + add(2, 3));
// console.log("乘法: " + multiply(4, 5));

// 优势：函数类型别名让函数类型声明更简洁，特别是在需要多次使用相同函数签名时

// 类型别名与泛型 (Type alias and generic types)
// 类型别名可以配合泛型使用，创建可复用的类型定义

// 泛型类型别名：定义结果类型
// Result<T> 是一个泛型类型，T 是成功时的数据类型
// type Result<T> = { success: boolean; data?: T; error?: string };

// 泛型类型别名：定义键值对类型
// Pair<K, V> 有两个类型参数
// type Pair<K, V> = { key: K; value: V };

// 使用泛型类型别名
// const result: Result<string> = { success: true, data: "Hello" };
// const pair: Pair<string, number> = { key: "age", value: 25 };

// console.log("结果: " + JSON.stringify(result));
// console.log("键值对: " + JSON.stringify(pair));

// 泛型优势：泛型类型别名可以适应不同的数据类型，提高代码的复用性

// 类型别名与映射类型 (Type alias and map types)
// 类型别名可以与映射类型结合，创建强大的类型转换

// 映射类型：将所有属性变为只读
// ReadonlyObj<T> 遍历 T 的所有属性并添加 readonly
type ReadonlyObj<T> = { readonly [P in keyof T]: T[P] };

// 映射类型：将所有属性变为可选
// PartialObj<T> 遍历 T 的所有属性并添加 ?
type PartialObj<T> = { [P in keyof T]?: T[P] };

// 定义用户接口
interface User {
    name: string;
    age: number;
}

// 使用映射类型别名
const readonlyUser: ReadonlyObj<User> = { name: "Alice", age: 25 };
// readonlyUser.name = "Bob"; // 错误：只读属性不能修改

const partialUser: PartialObj<User> = { name: "Bob" };

console.log("只读用户: " + JSON.stringify(readonlyUser));
console.log("部分用户: " + JSON.stringify(partialUser));

// 提示：映射类型别名是 TypeScript 非常强大的特性，可以基于现有类型创建新的类型变化

// 注意事项
// 不能重复定义：同一个 type 别名不能重复定义（接口可以声明合并）
// 仅编译时有效：type 别名在编译后不产生任何代码
// 可读性优先：不要滥用类型别名，简洁明了的代码更好

// 最佳实践：当类型需要复用，或者类型名称过长时使用 type 别名
// 对于简单的对象类型，可以根据团队习惯选择 type 或接口


// 总结
// type 别名是 TypeScript 中非常有用的特性

// 基本用法：使用 type 关键字为复杂类型定义别名
// 联合类型：定义多个可能类型的组合
// 函数类型：简化函数类型声明
// 泛型：创建可复用的泛型类型
// 映射类型：基于现有类型创建新类型

// 建议：合理使用 type 别名可以让代码更清晰，但不要过度使用，保持代码简洁易读最重要