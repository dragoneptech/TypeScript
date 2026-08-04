"use strict";
// TypeScript 访问修饰符
// 访问修饰符（Access Modifiers）是 TypeScript 面向对象编程的核心特性之一
// 它们用于控制类成员（属性、方法、构造函数）的可见性
// 通过访问修饰符，可以实现封装，保护类的内部实现细节
// 防止外部代码直接访问和修改类的内部状态，从而提高代码的安全性和可维护性
// 为什么需要访问修饰符？
// 面向对象编程的三大原则之一是封装
// 封装意味着将数据和操作数据的方法隐藏起来，对外只暴露必要的接口
// 访问修饰符就是实现封装的手段，它控制类成员的可见范围
// 概念说明：访问修饰符决定了类成员可以在哪里被访问
// TypeScript 提供三种访问修饰符：public、protected、private
// public 修饰符
// public 是默认的访问修饰符，表示成员可以在任何地方被访问
// 无论是类内部、子类还是类的外部，都可以访问 public 成员
// 定义动物类
// class Animal {
//     // 使用 public 修饰 name 属性（可以省略，默认就是 public）
//     public name: string;
//     // 构造函数
//     public constructor(name: string) {
//         this.name = name;
//     }
//     // 公开的说话方法
//     public speak(): void {
//         console.log(this.name + " 发出声音");
//     }
// }
// // 创建实例
// const animal = new Animal("动物");
// // 在类外部访问 public 属性
// console.log(animal.name);
// // 在类外部调用 public 方法
// animal.speak();
// 说明：如果不写访问修饰符，TypeScript 会默认使用 public
// 因此 public 可以省略，但为了代码清晰，建议明确声明
// private 修饰符
// private 表示私有成员，只能在定义它的类内部访问
// 子类和类的外部都不能访问 private 成员
// 这常用于隐藏类的内部实现细节，保护数据不被意外修改
// 定义银行账户类
// class BankAccount {
//     // 使用 private 修饰余额，只能在类内部访问
//     private balance: number;
//     // 构造函数
//     constructor(initialBalance: number) {
//         this.balance = initialBalance;
//     }
//     // 存款方法
//     public deposit(amount: number): void {
//         if (amount > 0) {
//             this.balance += amount;  // 类内部可以访问 private 属性
//             console.log("存款成功，当前余额: " + this.balance);
//         }
//     }
//     // 获取余额
//     public getBalance(): number {
//         return this.balance;  // 类内部可以访问 private 属性
//     }
// }
// // 创建账户实例
// const account = new BankAccount(1000);
// // 存款
// account.deposit(500);
// // 通过公共方法获取余额
// console.log("余额: " + account.getBalance());
// 错误：在类外部不能直接访问 private 属性
// console.log(account.balance); // 编译错误！
// 最佳实践：将类的内部状态设为 private，通过 public 方法提供受控的访问途径
// 这是实现封装 (Encapsulation) 的标准做法
// protected 修饰符
// protected 表示受保护成员，可以在类内部和子类中访问
// 类的外部不能直接访问 protected 成员
// 这在需要让子类继承父类的某些功能，同时隐藏实现细节时非常有用
// 定义人员基类
// class Person {
//     // 使用 protected 修饰 name，子类可以访问
//     protected name: string;
//     constructor(name: string) {
//         this.name = name;
//     }
// }
// // 定义员工类，继承 Person
// class Employee extends Person {
//     // 部门是私有的
//     private department: string;
//     constructor(name: string, department: string) {
//         super(name);  // 调用父类构造函数
//         this.department = department;
//     }
//     // 自我介绍方法
//     public introduce(): string {
//         // 子类可以访问 protected 成员 name
//         return "我是 " + this.name + "，在 " + this.department + " 工作";
//     }
// }
// // 创建员工实例
// const emp = new Employee("Alice", "技术部");
// console.log(emp.introduce());
// 错误：在类外部不能访问 protected 成员
// console.log(emp.name); // 编译错误！
// 应用场景：protected 常用于定义子类需要使用的属性，但不应该暴露给外部的值
// readonly 修饰符
// readonly 用于将属性设置为只读
// 只能在声明时或构造函数中赋值，之后不能修改
// 这在定义常量或标识符时非常有用
// 定义用户类
// class User {
//     // 使用 readonly 修饰的属性只能在初始化时赋值
//     // 用户 ID
//     readonly id: number;
//     // 用户名
//     readonly name: string;
//     constructor(id: number, name: string) {
//         this.id = id;
//         this.name = name;
//     }
// }
// // 创建用户实例
// const user = new User(1, "Alice");
// console.log("用户: " + user.id + ", " + user.name);
// 错误：不能修改 readonly 属性
// user.id = 2; // 编译错误！
// user.name = "Bob"; // 编译错误！
// 注意：readonly 和 private 不冲突
// 可以同时使用 readonly 和 private，初始化后既不能修改也不能从外部访问
// 参数属性
// TypeScript 提供了参数属性（Parameter Properties）的简写语法
// 可以在构造函数的参数上直接使用访问修饰符，自动创建并初始化属性
// 定义点类
class Point {
    x;
    y;
    z;
    // 在构造函数参数上直接使用修饰符
    // 相当于同时声明属性并赋值
    constructor(
    // public 修饰：创建公开属性 x
    x, 
    // public 修饰：创建公开属性 y
    y, 
    // private 修饰：创建私有属性 z
    z) {
        this.x = x;
        this.y = y;
        this.z = z;
        // 构造函数体可以为空，属性已自动创建
    }
    // 计算三维度总和
    sum() {
        // 可以在类内部访问所有属性
        return this.x + this.y + this.z;
    }
}
// 创建点实例
const point = new Point(1, 2, 3);
// 公开属性可以从外部访问
console.log("x: " + point.x);
console.log("y: " + point.y);
// 调用方法
console.log("总和: " + point.sum());
// 错误：私有属性不能从外部访问
// console.log(point.z); // 编译错误！
