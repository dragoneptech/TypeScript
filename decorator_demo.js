"use strict";
// tsc .\decorator_demo.ts --experimentalDecorators --target ES2022
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// 类装饰器：在类定义时执行
// function sealed(constructor: Function) {
//     Object.seal(constructor);         // 禁止添加新属性
//     Object.seal(constructor.prototype);
// }
// 方法装饰器：可用于日志记录、权限校验等
// function log(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
//     const original = descriptor.value;
//     descriptor.value = function (...args: any[]) {
//         console.log(`Calling ${propertyKey} with args:`, args);
//         const result = original.apply(this, args);
//         console.log(`${propertyKey} returned:`, result);
//         return result;
//     };
// }
// @sealed
// class Calculator {
//     @log
//     add(a: number, b: number): number {
//         return a + b;
//     }
// }
// const calc = new Calculator();
// calc.add(1, 2);
// 输出：Calling add with args: [ 1, 2 ]
// 输出：add returned: 3
// 类装饰器：在类定义时执行
// function sealed(constructor: Function) {
//     Object.seal(constructor);         // 禁止添加新属性
//     Object.seal(constructor.prototype);
// }
// function sealed<T extends abstract new (...args: any[]) => any>(constructor: T, context: ClassDecoratorContext) {
//     Object.seal(constructor);
//     Object.seal(constructor.prototype);
// }
// 方法装饰器：可用于日志记录、权限校验等
// function log(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
// Legacy decorator syntax or Stage 2 decorator syntax
// function log(originalMethod: any, context: ClassMethodDecoratorContext) {
// TypeScript5.0+ Standard decorator syntax or Stage 3 decorator syntax or ECMAScript decorator proposal
// const original = descriptor.value;
// descriptor.value = function (...args: any[]) {
//     console.log(`Calling ${propertyKey} with args:`, args);
//     const result = original.apply(this, args);
//     console.log(`${propertyKey} returned:`, result);
//     return result;
// };
// Method 1
// return function (this: any, ...args: any[]) {  // 显式声明第一个参数 this: any
//     console.log(`Calling ${String(context.name)} with args:`, args);
//     const result = originalMethod.apply(this, args);
//     console.log(`${String(context.name)} returned:`, result);
//     return result;
// }
// Method 2
// return function (...args: any[]) {  // 不显式声明第一个参数 this: any
//     console.log(`Calling ${String(context.name)} with args:`, args);
//     // const result = originalMethod.apply(this, args);  // use arrow function to preserve the context of 'this'
//     const result = originalMethod(...args);  // use arrow function to preserve the context of 'this'
//     console.log(`${String(context.name)} returned:`, result);
//     return result;
// }
// }
// Method 3: Generic decorator factory 
// function log<This, Args extends unknown[], Return>(originalMethod: (this: This, ...args: Args) => Return, context: ClassMethodDecoratorContext<This, (this: This, ...args: Args) => Return>) {
//     return function (this: This, ...args: Args): Return {
//         console.log(`Calling ${String(context.name)} with args:`, args);
//         const result = originalMethod.apply(this, args);
//         console.log(`${String(context.name)} returned:`, result);
//         return result;
//     }
// }
// @sealed
// class Calculator {
//     @log
//     add(a: number, b: number): number {
//         return a + b;
//     }
// }
// const calc = new Calculator();
// calc.add(1, 2);
// 输出：Calling add with args: [ 1, 2 ]
// 输出：add returned: 3
// TypeScript 装饰器
// 装饰器（Decorators）允许开发者在不修改原类的情况下，为类、方法、属性或参数添加额外的功能
// 装饰器本质上是一个函数，它可以在运行时被调用，修改目标对象的行为
// 装饰器类型与应用位置
// @ClassDecorator：应用于类的定义上
// @methodDecorator：应用于类的方法上
// @propertyDecorator：应用于类的属性上
// @parameterDecorator：应用于类的方法参数上
//@getterDecorator：应用于类的 getter 方法上
// 装饰器工厂（Decorator Factory）
// 装饰器工厂是返回装饰器函数的函数，通过参数实现配置化
// Stage 2 装饰器语法
// 装饰器简介
// 装饰器采用 `@` 符号作为语法糖，可以附加在类、方法、访问器、属性或参数上
// 这种模式常用于框架开发，如 Angular、Vue3 等都大量使用装饰器来实现依赖注入、数据验证等功能
// 定义一个类装饰器函数
// 参数 target 就是被装饰的类构造函数
// function sealed(target: Function) {
//     // 打印装饰器被应用到的类名
//     console.log("装饰器 applied to: " + target.name);
//     // 使用 Object.seal 锁定构造函数和原型
//     // 防止在运行时添加或删除属性
//     Object.seal(target);
//     Object.seal(target.prototype);
// }
// 使用 @ 语法将装饰器应用到类上
// @sealed
// class Person {
//     name: string;
//     constructor(name: string) {
//         this.name = name;
//     }
// }
// 创建实例测试
// var person = new Person("RUNOOB");
// console.log("创建: " + person.name);
// 尝试添加新属性（会被阻止，因为类被 seal 了）
// person.age = 25; // 静默失败
// 说明：
// 类装饰器在类定义时就会执行，通常用于修改类行为、添加元数据或实现 AOP（面向切面编程）
// 方法装饰器
// 方法装饰器应用于类的方法，可以修改方法的属性描述符（Property Descriptor）
// 方法装饰器接收三个参数：目标对象、属性名称和属性描述符
// 定义方法装饰器工厂
// 返回一个装饰器函数
// function enumerable(value: boolean) {
//     // 返回装饰器函数，接收三个参数
//     return function (
//         target: any,           // 所属类的原型对象
//         propertyKey: string,    // 方法名称
//         descriptor: PropertyDescriptor // 属性描述符
//     ) {
//         // 修改属性的 enumerable 特性
//         // false 表示该方法不可遍历
//         descriptor.enumerable = value;
//     };
// }
// class Greeter {
//     greeting: string;
//     constructor(message: string) {
//         this.greeting = message;
//     }
//     // 应用装饰器，设置该方法为不可枚举
//     @enumerable(false)
//     greet() {
//         return "Hello, " + this.greeting;
//     }
// }
// var g = new Greeter("World");
// 检查 greet 方法是否可枚举
// console.log("方法可枚举: " + g.propertyIsEnumerable("greet"));
// 遍历对象的属性
// for (var key in g) {
//     console.log("属性: " + key);
// }
// 提示：PropertyDescriptor 包含可枚举（enumerable）、可配置（configurable）、可写（writable）和值（value）等属性，可以根据需要修改
// 访问器装饰器
// 访问器装饰器应用于类的 getter 和 setter 方法
// 与方法装饰器类似，访问器装饰器也可以修改属性描述符
// 访问器装饰器工厂
// function configurable(value: boolean) {
//     return function (
//         target: any,
//         propertyKey: string,
//         descriptor: PropertyDescriptor
//     ) {
//         // 修改属性的 configurable 特性
//         // false 表示该访问器不可被重新配置或删除
//         descriptor.configurable = value;
//     };
// }
// class Point {
//     private _x: number = 0;
//     private _y: number = 0;
//     // 使用装饰器锁定 getter
//     @configurable(false)
//     get x() {
//         return this._x;
//     }
//     @configurable(false)
//     get y() {
//         return this._y;
//     }
//     set x(value: number) {
//         this._x = value;
//     }
//     set y(value: number) {
//         this._y = value;
//     }
// }
// var point = new Point();
// point.x = 10;
// point.y = 20;
// console.log("坐标: (" + point.x + ", " + point.y + ")");
// 说明：
// 访问器装饰器不能同时应用于同一个属性的 getter 和 setter，只能选择其中一个
// 属性装饰器
// 属性装饰器应用于类的属性定义
// 属性装饰器接收两个参数：目标对象和属性名称
// 属性装饰器工厂
// function format(formatString: string) {
//     return function (
//         target: any,           // 类的原型对象
//         propertyKey: string     // 属性名称
//     ) {
//         // 在目标对象上存储元数据
//         // 使用 propertyKey + "_format" 作为键名避免冲突
//         Object.defineProperty(target, propertyKey + "_format", {
//             value: formatString,
//             writable: false,
//             enumerable: false,
//             configurable: true
//         });
//     };
// }
// class User {
//     // 应用属性装饰器，指定日期格式
//     @format("YYYY-MM-DD")
//     birthDate: string;
//     constructor(birthDate: string) {
//         this.birthDate = birthDate;
//     }
// }
// var user = new User("1990-01-01");
// console.log("出生日期: " + user.birthDate);
// // 访问存储的元数据
// console.log("日期格式: " + (user as any).birthDate_format);
// 参数装饰器
// 参数装饰器应用于类方法的参数，可以为参数添加元数据或标记
// 参数装饰器接收三个参数：目标对象、方法名称和参数在函数中的索引
// 参数装饰器
// 用于记录参数信息或进行验证
// function logParameter(
//     target: any,               // 类的原型对象
//     propertyKey: string,       // 方法名称
//     parameterIndex: number    // 参数在函数中的索引位置（从 0 开始）
// ) {
//     console.log("参数装饰器: " + propertyKey +
//         " 第 " + (parameterIndex + 1) + " 个参数");
// }
// class Greeter {
//     greeting: string;
//     constructor(greeting: string) {
//         this.greeting = greeting;
//     }
//     // 在参数前使用 @ 语法应用装饰器
//     greet(@logParameter name: string) {
//         return this.greeting + ", " + name;
//     }
// }
// var greeter = new Greeter("Hello");
// console.log(greeter.greet("RUNOOB"));
// 装饰器工厂
// 装饰器工厂是返回装饰器函数的函数
// 通过装饰器工厂，可以在应用装饰器时传入自定义参数，实现更灵活的配置
// 装饰器工厂实现带颜色的日志
// 装饰器工厂：接收配置参数，返回装饰器函数
// function color(colorCode: string) {
//     // colorCode 是 ANSI 转义序列的颜色代码
//     // 例如：34 = 蓝色，31 = 红色，32 = 绿色
//     return function (
//         target: any,
//         propertyKey: string,
//         descriptor: PropertyDescriptor
//     ) {
//         // 保存原始方法
//         var originalMethod = descriptor.value;
//         // 重写方法，添加颜色
//         descriptor.value = function (...args: any[]) {
//             // 调用原始方法获取返回值
//             var result = originalMethod.apply(this, args);
//             // 如果在终端环境，给输出添加颜色
//             // ANSI 转义序列格式：\x1b[颜色码m 内容 \x1b[0m
//             return "\x1b[" + colorCode + "m" + result + "\x1b[0m";
//         };
//     };
// }
// class Logger {
//     // 使用装饰器工厂，传入蓝色代码 34
//     @color("34")
//     log(message: string): string {
//         return message;
//     }
//     @color("31")
//     error(message: string): string {
//         return message;
//     }
//     @color("32")
//     success(message: string): string {
//         return message;
//     }
// }
// var logger = new Logger();
// console.log(logger.log("这是蓝色日志"));
// console.log(logger.error("这是红色错误"));
// console.log(logger.success("这是绿色成功"));
// 说明：装饰器工厂是实际开发中最常用的形式，它允许在应用装饰器时传递参数，实现配置化
// 装饰器执行顺序
// 当一个类上有多个装饰器时，执行顺序遵循特定的规则
// 装饰器从下往上应用
// 同一类型的多个装饰器从右到左执行
// 参数装饰器先于方法装饰器执行
// 装饰器执行顺序示例
// 多个装饰器叠加使用
// function first() {
//     console.log("first 装饰器");
//     return function (target: any) {
//         console.log("first 装饰器函数");
//     };
// }
// function second() {
//     console.log("second 装饰器");
//     return function (target: any) {
//         console.log("second 装饰器函数");
//     };
// }
// @first()
// @second()
// class MyClass {
//     name: string;
//     constructor(name: string) {
//         this.name = name;
//     }
// }
// var obj = new MyClass("RUNOOB");
// 说明：
// 装饰器函数先执行定义（console.log），然后按照从下往上的顺序执行装饰器函数
// 实际应用场景
// 日志记录
// 自动记录方法调用日志
// 日志装饰器
// function log(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
//     var originalMethod = descriptor.value;
//     descriptor.value = function (...args: any[]) {
//         console.log("调用方法: " + propertyKey + "，参数: " + JSON.stringify(args));
//         var result = originalMethod.apply(this, args);
//         console.log("方法返回: " + JSON.stringify(result));
//         return result;
//     };
// }
// class MathService {
//     @log
//     add(a: number, b: number): number {
//         return a + b;
//     }
//     @log
//     multiply(a: number, b: number): number {
//         return a * b;
//     }
// }
// var math = new MathService();
// console.log("计算结果: " + math.add(5, 3));
// 权限验证
// 实现方法级别的权限检查
// 模拟当前用户角色
var currentUser = { role: "admin" };
// 权限装饰器
function requireRole(role) {
    return function (target, propertyKey, descriptor) {
        var originalMethod = descriptor.value;
        descriptor.value = function (...args) {
            if (currentUser.role !== role) {
                console.log("权限不足，无法执行 " + propertyKey);
                return null;
            }
            return originalMethod.apply(this, args);
        };
    };
}
class AdminService {
    deleteUser(id) {
        return "删除用户 " + id + " 成功";
    }
    viewUser(id) {
        return "查看用户 " + id;
    }
}
__decorate([
    requireRole("admin")
], AdminService.prototype, "deleteUser", null);
__decorate([
    requireRole("admin")
], AdminService.prototype, "viewUser", null);
var admin = new AdminService();
console.log(admin.viewUser(1));
console.log(admin.deleteUser(1));
// 模拟普通用户
currentUser = { role: "user" };
console.log(admin.deleteUser(2));
