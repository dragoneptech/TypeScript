// TypeScript 的一些关键特性：

// 静态类型检查
// 类型推断
// 接口 (interface) 和类型 (type) 定义
// 类和模块支持
// 工具和编辑器支持
// 兼容 JavaScript


// 静态类型
// let name: string = "Alice";
// let age: number = 30;

// 类型推断
// let isActive = true; // TypeScript 会推断 isActive 的类型为 boolean

// 接口 (interface)
// 接口可以定义属性和方法，
// 还可以通过 implements 关键字实现接口，
// 或者通过 extends 进行扩展，便于定义复杂的数据类型
// interface Person {
//     name: string;
//     age: number;
//     greet(): void;
// }

// class Student implements Person {
//     constructor(public name: string, public age: number) {
//         this.name = name;
//         this.age = age;
//     };

//     greet() {
//         console.log(`Hello, my name is ${this.name}`);
//     };
// }

// const s1 = new Student("Alice", 20);
// s1.greet();

// 类型别名 (Type Alias)
// type StringOrNumber = string | number;
// let value: StringOrNumber = "Hello";
// console.log(value); // 输出: Hello
// value = 42; // 也可以赋值为 number
// console.log(value); // 输出: 42


// 枚举 (Enum)
// enum Direction {
//     Up,
//     Down,
//     Left,
//     Right
// }
// let dir: Direction = Direction.Up;
// console.log(dir); // 输出: 0
// console.log(Direction[dir]); // 输出: Up

// enum Direction {
//     Up = "UP",
//     Down = "DOWN",
//     Left = "LEFT",
//     Right = "RIGHT"
// }
// let dir: Direction = Direction.Up;
// console.log(dir); // 输出: UP


// 元组 (Tuple)
// let point: [number, number] = [10, 20];
// console.log(point[0]); // 输出: 10
// console.log(point[1]); // 输出: 20
// console.log(point.length); // 输出: 2
// console.log(point); // 输出: [10, 20]


// 访问控制修饰符 (Access Modifier)
// TypeScript 在类中提供了 public、private 和 protected 修饰符，允许控制属性或方法的可见性，支持更好的封装
// class Person {
//     private name: string;
//     protected age: number;
//     public constructor(name: string, age: number) {
//         this.name = name;
//         this.age = age;
//     };
// }

// const p1 = new Person("Alice", 30);
// console.log(p1.name);
// Error: Property 'name' is private and only accessible within class 'Person'
// console.log(p1.age);
// Error: Property 'age' is protected and only accessible within class 'Person' and its subclasses


// 抽象类 (Abstract Class)
// TypeScript 支持抽象类，抽象类不能直接实例化，需要由子类实现
// 抽象类适用于定义通用行为和抽象方法的类层次结构
// abstract class Animal {
//     abstract makeSound(): void;
// }

// class Dog extends Animal {
//     makeSound(): void {
//         console.log("Woof!");
//     };
// }

// const dog = new Dog();
// dog.makeSound(); // 输出: Woof!

// 泛型 (Generics)
// TypeScript 支持泛型，允许在类、接口和函数中使用参数化类型，
// 使得代码可以适应不同的类型需求，同时保持类型安全
// function identity<T>(arg: T): T {
//     return arg;
// }

// let num: number = identity<number>(42);
// console.log(num); // 输出: 42

// let str: string = identity<string>("Hello");
// console.log(str); // 输出: Hello


// 模块和命名空间
// Please refer to the math_demo.ts and main_demo.ts files for examples of how to use modules and namespaces in TypeScript.


// 类型守卫 (Type Guards)
// TypeScript 提供了类型守卫，可以在代码中检查变量类型，帮助编译器推断更加具体的类型。这对于联合类型尤为重要
// function printId(id: number | string) {
//     if (typeof id === "string") {
//         console.log(`ID is a string: ${id.toUpperCase()}`);
//     } else {
//         console.log(`ID is a number: ${id.toFixed(2)}`);
//     };
// }
// let myId: void = printId("abc123");  // 输出: ID is a string: ABC123
// console.log(myId);  // 输出: undefined
// myId = printId(42);  // 输出: ID is a number: 42.00
// console.log(myId);  // 输出: undefined


// 可选链和空值合并运算符
// TypeScript 增加了 JavaScript 的可选链 (?.) 和空值合并运算符 (??)，
// 简化了代码中对可能为 null 或 undefined 值的处理
// let user: { name: string; address?: { city: string } } = { name: "Alice" };
// interface User {
//     name: string;
//     address?: {
//         city: string;
//     };
// }
// let user: User = { name: "Alice" };
// console.log(user.address?.city); // 输出: undefined
// user.address = { city: "New York" };
// console.log(user.address?.city); // 输出: New York

// let value: string | null | undefined = null;
// console.log(value ?? "Default Value"); // 输出: Default Value
// value = undefined;
// console.log(value ?? "Default Value"); // 输出: Default Value
// value = "Hello";
// console.log(value ?? "Default Value"); // 输出: Hello


// 类型兼容性和工具类型
// TypeScript 提供了一些工具类型，如 Partial、Pick、Readonly、Record 等，
// 这些类型可以帮助生成新的类型，简化类型定义
// interface Todo {
//     title: string;
//     description: string;
// }

// let partialTodo: Partial<Todo> = {
//     title: "Learn TypeScript"
// };
// console.log(partialTodo); // 输出: { title: 'Learn TypeScript' }

// 编译期错误检查

// ES 新特性支持
