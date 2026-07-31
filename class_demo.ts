// TypeScript 类
// 类是面向对象编程（OOP: Object-Oriented Programming）的核心概念
// 是一种模板或蓝图，用于创建具有相同属性和方法的对象
// TypeScript 完全支持面向对象编程，提供了类(class)、继承(inheritance)、
// 多态(polymorphism)、封装(encapsulation)、抽象(abstract)、接口(interfaces)、
// 泛型(generics)、模块(modules)、命名空间(namespaces)、访问修饰符(access modifiers)等特性
// 类封装了数据（属性）和行为（方法），使得代码更加模块化、可复用和易维护
// 通过类，可以创建多个具有相同结构的对象(object)，这些对象称为类的实例(instance)

// class definition
// TypeScript 使用 class 关键字定义类。一个类可以包含以下成员(member)：
// 字段（Field）：类中声明的变量，表示对象的属性(property)
// 构造函数（Constructor）：类实例化时调用的特殊方法，用于初始化对象
// 方法（Method）：类中定义的函数，表示对象的行为
// class class_name {
//     // 字段声明
//     field1: type;
//     field2: type;

//     // 构造函数
//     constructor(parameters) {
//         // 初始化代码
//     }

//     // 方法
//     methodName(): return_type {
//         // 方法实现
//     }
// }


// 实例
// 定义一个空的 Person 类
// class Person {
// }


// 类的字段(field)和构造函数(constructor)
// 类的字段是存储对象数据的地方，构造函数在对象创建时自动调用，用于初始化字段
// 定义 Car 类
// class Car {
//     // 字段：描述汽车的属性
//     engine: string;

//     // 构造函数：在创建对象时初始化 engine
//     constructor(engine: string) {  // 构造函数的参数名可以与字段名相同，通过 this.field 区分
//         this.engine = engine;
//         // this 关键字指向当前类的实例
//     }

//     // 方法：显示发动机信息
//     disp(): void {
//         console.log("发动机型号: " + this.engine);  // this 关键字指向当前类的实例
//     }
// }

// 创建类的实例
// const car = new Car("V8 发动机");  // 使用 new 关键字创建类的实例

// 访问字段
// console.log("读取发动机: " + car.engine);

// 调用方法
// car.disp();

// 注意：TypeScript 的类在编译后会转换为 JavaScript 的构造函数原型模式，接口不会出现在编译结果中

// 访问控制修饰符
// access modifiers 是用于控制类成员的可访问性和可见性的关键字
// TypeScript 提供了三种访问修饰符：public、private 和 protected
// public：默认访问修饰符，表示类成员可以在任何地方访问，包括类的外部和子类中
// private：表示类成员只能在类的内部访问，不能在类的外部或子类中访问
// protected：表示类成员可以在类的内部和子类中访问，但不能在类的外部访问

// class Person {
//     public name: string;    // 公有属性
//     public age: number;     // 公有属性

//     constructor(name: string, age: number) {
//         this.name = name;
//         this.age = age;
//     }

//     public introduce(): void {
//         console.log("我是 " + this.name + "，今年 " + this.age + " 岁");
//     }
// }

// const person = new Person("Alice", 25);
// console.log("姓名: " + person.name);   // 可以访问
// person.introduce();                    // 可以访问

// class Person {
//     public name: string;
//     private secret: string;  // 私有属性，外部无法直接访问

//     constructor(name: string, secret: string) {
//         this.name = name;
                                                                             
// }

// const person = new Person("Alice", "我喜欢编程");

// console.log("姓名: " + person.name);   // 可以访问
// // console.log(person.secret);        // 错误：'secret' 是私有属性
// // error TS2341: Property 'secret' is private and only accessible within class 'Person'

// person.revealSecret();                 // 通过公有方法访问私有属性

// class Person {
//     protected name: string;  // 受保护属性

//     constructor(name: string) {
//         this.name = name;
//     }

//     protected sayHello(): void {
//         console.log("你好，我是 " + this.name);
//     }
// }

// class Student extends Person {
//     private grade: string;

//     constructor(name: string, grade: string) {
//         super(name);  // 调用父类的构造函数初始化受保护属性
//         this.grade = grade;
//     }

//     public introduce(): void {
//         // 子类可以访问受保护的属性和方法
//         console.log("我是 " + this.name + "，年级: " + this.grade);
//         this.sayHello();
//     }
// }

// const student = new Student("Bob", "高三");
// student.introduce();    // 可以访问

// // console.log(student.name);  // 错误：'name' 是受保护属性


// 类的继承(inheritance)
// 继承允许创建一个类（子类, derived class）从另一个类（父类, base class or super class）获取属性和方法
// 子类可以复用父类的代码，还可以扩展或重写父类的行为

// 基本语法
// class child_class extends parent_class {
//     // 子类新增的属性和方法
// }

// 单继承(single inheritance)是指一个子类只能继承一个父类
// 多继承(multiple inheritance)是指一个子类可以继承多个父类，TypeScript 不支持多继承，但可以通过接口实现类似效果

// 父类：形状
// class Shape {
//     area: number;

//     constructor(a: number) {
//         this.area = a;
//     }
// }

// // 子类：圆，继承自 Shape
// class Circle extends Shape {
//     disp(): void {
//         console.log("圆的面积: " + this.area);
//     }
// }

// const circle = new Circle(223);
// circle.disp();

// 多重/层继承(multilevel inheritance)
// TypeScript 不支持多继承（一个类继承多个类），但支持多层继承（A 继承 B，B 继承 C）
// 根类
// class Root {
//     str: string;

//     constructor() {
//         this.str = "root";
//     }
// }

// // 子类(derived class)：继承 Root
// class Child extends Root {
// }

// // 叶子类：继承 Child（多重继承）
// class Leaf extends Child {
// }

// const leaf = new Leaf();
// leaf.str = "hello";
// console.log("str 值: " + leaf.str);


// 多继承(multiple inheritance)是指一个子类可以继承多个父类，TypeScript 不支持多继承，但可以通过接口实现类似效果
// 一个类可以同时实现多个接口

// interface Flyable {
//     fly(): void;
// }

// interface Swimmable {
//     swim(): void;
// }

// class Duck implements Flyable, Swimmable {
//     fly(): void {
//         console.log("鸭子会飞");
//     }

//     swim(): void {
//         console.log("鸭子会游泳");
//     }
// }

// const duck = new Duck();
// duck.fly();
// duck.swim();

// 注意：接口只规定结构，不提供具体实现
// 所以 Duck 类必须自己实现 fly() 和 swim()
// 接口只定义规范，不继承代码

// 方法重写（Override）
// 子类可以覆盖或重写（Override）父类的方法，即在子类中定义与父类同名的方法，实现自己的行为
// 使用 super 关键字可以调用父类的方法

// 父类
// class PrinterClass {
//     doPrint(): void {
//         console.log("父类的 doPrint() 方法");
//     }
// }

// // 子类：重写父类方法
// class StringPrinter extends PrinterClass {
//     doPrint(): void {
//         // 调用父类的方法
//         super.doPrint();

//         // 子类自己的逻辑
//         console.log("子类的 doPrint() 方法");
//     }
// }

// const obj = new StringPrinter();
// obj.doPrint();

// 静态成员
// 使用 static 关键字定义的成员属于类本身，而不是类的实例
// 可以直接通过类名访问，不需要创建实例

// class StaticMem {
//     // 静态属性
//     static num: number;

//     // 静态方法
//     static disp(): void {
//         console.log("num 值为 " + StaticMem.num);
//     }
// }

// // 直接通过类名访问静态成员
// StaticMem.num = 12;
// StaticMem.disp();

// const obj = new StaticMem();

// 不能通过实例访问静态成员
// console.log(obj.num);  // 错误：'num' 是静态属性
// error TS2576: Property 'num' does not exist on type 'StaticMem'.
// Did you mean to access the static member 'StaticMem.num' instead?

// obj.disp();             // 错误：'disp' 是静态方法

// 应用场景：静态成员常用于定义类的常量、工具方法或单例模式

// instanceof 运算符
// instanceof 用于判断对象是否是某个类的实例

// class Person {
// }

// const obj = new Person();
// const isPerson: boolean = obj instanceof Person;

// console.log("obj 是 Person 类的实例吗？ " + isPerson);

// 类实现接口
// class implements interface
// 类可以使用 implements 关键字实现接口，确保类符合接口定义的契约

// 定义接口
// interface ILoan {
//     interest: number;  // 利率
// }

// 类实现接口
// class AgriLoan implements ILoan {
//     interest: number;
//     rebate: number;    // 回扣

//     constructor(interest: number, rebate: number) {
//         this.interest = interest;
//         this.rebate = rebate;
//     }
// }

// const loan = new AgriLoan(10, 1);
// console.log("利率: " + loan.interest + "%，回扣: " + loan.rebate);

// 抽象类
// abstract class 是一种不能被实例化的类，用于定义子类必须实现的抽象方法
// 抽象类不能被实例化，只能作为基类供子类继承
// 抽象类可以包含抽象方法（没有实现的占位方法），子类必须实现这些方法

// 抽象类
// abstract class Animal {
//     abstract makeSound(): void;  // 抽象方法，子类必须实现

//     move(): void {
//         console.log("动物在移动");
//     }
// }

// 具体类：继承抽象类
// class Dog extends Animal {
//     makeSound(): void {  // 实现抽象方法
//         console.log("汪汪汪!");
//     }

//     move(): void {  // 重写父类方法
//         super.move();  // 调用父类方法
//         console.log("狗在跑");
//     }
// }

// const dog = new Dog();
// dog.move();
// dog.makeSound();

// 综合实例

// 接口定义
// interface I_Printable {
//     print(): void;
// }

// // 抽象类
// abstract class Item {
//     protected name: string;
//     protected price: number;

//     constructor(name: string, price: number) {
//         this.name = name;
//         this.price = price;
//     }

//     abstract getDetails(): string;
// }

// // 具体类
// class Product extends Item implements I_Printable {
//     private category: string;

//     constructor(name: string, price: number, category: string) {
//         super(name, price);
//         this.category = category;
//     }

//     // 实现抽象方法
//     getDetails(): string {
//         return `产品: ${this.name}, 价格: ¥${this.price}, 类别: ${this.category}`;
//     }

//     // 实现接口方法
//     print(): void {
//         console.log(this.getDetails());
//     }

//     // 静态方法
//     static create(name: string, price: number): Product {
//         return new Product(name, price, "默认类别");
//     }
// }

// // 使用
// const product = Product.create("笔记本电脑", 5999);  // 使用静态方法创建实例
// const product2 = new Product("耳机", 299, "电子产品");  // 使用构造函数创建实例

// product.print();
// product2.print();

// // 折扣方法
// class DiscountedProduct extends Product {
//     private discount: number;

//     constructor(name: string, price: number, category: string, discount: number) {
//         super(name, price, category);
//         this.discount = discount;
//     }

//     getDetails(): string {  // 重写父类方法
//         const discountedPrice = this.price * (1 - this.discount / 100);
//         return `产品: ${this.name}, 原价: ¥${this.price}, 折扣: ${this.discount}%, 现价: ¥${discountedPrice.toFixed(2)}`;
//     }
// }

// const discountedProduct = new DiscountedProduct("手机", 2999, "电子产品", 20);
// discountedProduct.print();

// 总结
// TypeScript 的类提供了完整的面向对象编程支持：

// 类的定义：使用 class 关键字，包含字段、构造函数和方法
// 访问修饰符：public、private、protected 控制成员访问权限
// 继承：使用 extends 实现类继承，支持多层/重继承，不支持多继承，可以通过接口实现类似效果
// 方法重写：子类可以重写父类方法，使用 super 调用父类
// 静态成员：使用 static 关键字，属于类本身而非实例，不能通过实例访问
// 接口实现：使用 implements 关键字实现接口
// 抽象类：使用 abstract 关键字，不能实例化，作为基类

// class 类是 TypeScript 面向对象编程的基础，合理使用类可以使代码更加结构化和可维护

