"use strict";
// TypeScript 类继承与多态
// class inheritance and polymorphism in TypeScript
// TypeScript 支持面向对象编程的继承和多态特性
// 继承特性
// • extends 继承
// • super() 调用父类
// • 方法重写 
// • 多态 
// • instanceof
// 类的继承 （class inheritance）
// 使用 extends 关键字实现继承
// class Animal {
//     // name: string;
//     // constructor(name: string) {
//     //     this.name = name;
//     // }
//     constructor(public name: string) {  // parameter property 语法糖
//         // this.name = name;
//     }
//     speak(): void {
//         console.log(this.name + " 发出声音");
//     }
// }
// class Dog extends Animal {
//     breed: string;
//     constructor(name: string, breed: string) {
//         super(name);  // 调用父类构造函数
//         this.breed = breed;
//     }
//     speak(): void {
//         console.log(this.name + " 汪汪汪!");  // 重写父类的方法
//     }
// }
// const dog = new Dog("旺财", "金毛");
// dog.speak();
// super 关键字
// super 用于调用父类的方法和构造函数
// class Shape {
//     color: string;
//     constructor(color: string) {
//         this.color = color;
//     }
//     describe(): string {
//         return "这是一个 " + this.color + " 的图形";
//     }
// }
// class Circle extends Shape {
//     radius: number;
//     constructor(color: string, radius: number) {
//         super(color);
//         this.radius = radius;
//     }
//     // 重写父类方法
//     describe(): string {
//         // 调用父类方法并扩展
//         return super.describe() + "，半径是 " + this.radius;
//     }
//     area(): number {
//         return Math.PI * this.radius * this.radius;
//     }
// }
// const circle = new Circle("红色", 5);
// console.log(circle.describe());
// console.log("面积: " + circle.area().toFixed(2));
// 多态 (Polymorphism)
// 子类的实例可以赋值给父类类型
// class Animal {
//     name: string;
//     constructor(name: string) { this.name = name; }
//     speak(): void {
//         console.log(this.name + " 发出声音");
//     }
// }
// class Cat extends Animal {
//     speak(): void {
//         console.log(this.name + " 喵喵喵!");
//     }
// }
// class Dog extends Animal {
//     speak(): void {
//         console.log(this.name + " 汪汪汪!");
//     }
// }
// // 多态：数组中存储不同子类的实例
// const animals: Animal[] = [
//     new Cat("小白"),
//     new Dog("旺财"),
//     new Animal("动物")
// ];
// // 调用同一方法，不同子类有不同实现
// for (let i = 0; i < animals.length; i++) {
//     const animal = animals[i];
//     animal.speak();
// }
// instanceof 检查
// 使用 instanceof 检查实例类型
// class Rectangle {
//     width: number;
//     height: number;
//     constructor(width: number, height: number) {
//         this.width = width;
//         this.height = height;
//     }
//     area(): number {
//         return this.width * this.height;
//     }
// }
// class Circle {
//     radius: number;
//     constructor(radius: number) {
//         this.radius = radius;
//     }
//     area(): number {
//         return Math.PI * this.radius ** 2;
//     }
// }
// const shapes = [new Rectangle(4, 5), new Circle(3)];
// for (let i = 0; i < shapes.length; i++) {
//     const shape = shapes[i];
//     if (shape instanceof Rectangle) {  // type guard
//         console.log("矩形面积: " + shape.area());
//     } else if (shape instanceof Circle) {
//         console.log("圆形面积: " + shape.area().toFixed(2));
//     }
// }
// protected 成员
// protected 成员在子类中可见
class Person {
    name;
    constructor(name) {
        this.name = name;
    }
}
class Employee extends Person {
    department;
    constructor(name, department) {
        super(name);
        this.department = department;
    }
    introduce() {
        // 可以访问 protected 成员
        return "我是 " + this.name + "，在 " + this.department + " 工作";
    }
}
const emp = new Employee("Alice", "技术部");
console.log(emp.introduce());
// console.log(emp.name); // 错误：protected 外部不可访问
