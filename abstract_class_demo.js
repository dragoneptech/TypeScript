"use strict";
// TypeScript 抽象类
// 抽象类（Abstract Class）是 TypeScript 面向对象编程中的重要概念
// 它是一种不能被直接实例化的类，只能作为基类供其他类继承
// 抽象类主要用于定义子类的公共属性和方法，为子类提供一个统一的结构和行为模板
// 抽象类特性
// abstract 方法：子类必须实现
// 具象方法：子类可以直接使用
// 可作为类型：接收子类实例
// 为什么需要抽象类?
// 在面向对象编程中，我们经常需要定义一些基类 (Base Class / Parent Class / Super Class)
// 这些基类描述了子类共同的属性和方法，但有些方法的实现细节需要由子类自己决定
// 抽象类就是用来解决这个问题的：它允许我们定义方法的签名（声明），而把具体实现交给子类
// 概念说明：抽象类是一种介于普通类和接口之间的类型
// 它既有接口的特征（定义方法签名），又有类的特征（可以有具体的方法实现和构造函数）
// 抽象类基础
// 使用 abstract 关键字声明抽象类和抽象方法
// 抽象类可以包含抽象方法和具象方法（已有实现的方法）
// 使用 abstract 关键字声明抽象类
// 抽象类不能直接实例化，只能作为基类
// abstract class Animal {
//     // 动物的名字属性
//     name: string;
//     // 构造函数
//     constructor(name: string) {
//         this.name = name;
//     }
//     // 抽象方法：使用 abstract 修饰，没有方法体
//     // 子类必须实现这个方法
//     abstract speak(): void;
//     // 具象方法：有具体实现的方法
//     // 子类可以直接继承使用，不需要重写
//     // 当然也可以进行重写（Override），根据需要修改行为
//     move(): void {
//         console.log(this.name + " 在移动");
//     }
// }
// 尝试实例化抽象类会报错
// var animal = new Animal("动物"); // 错误：不能实例化抽象类
// 定义 Dog 类继承 Animal
// class Dog extends Animal {
//     // 子类必须实现父类的抽象方法 speak()
//     speak(): void {
//         console.log(this.name + " 汪汪汪!");
//     }
// }
// 创建 Dog 实例
// const dog = new Dog("旺财");
// dog.speak();  // 调用子类实现的方法
// dog.move();   // 继承父类的具象方法
// 说明：抽象方法没有方法体（只有方法签名），子类必须实现该方法
// 具象方法有具体实现，子类可以直接继承使用
// 当然，子类也可以选择重写具象方法，根据需要修改行为
// 抽象方法（Abstract Methods）
// 抽象方法是抽象类中只声明但不实现的方法
// 子类继承抽象类后，必须实现所有抽象方法，否则会报错
// 定义抽象类 Shape（图形）
// abstract class Shape {
//     // 抽象方法：只有声明，没有实现
//     // 子类必须实现这两个方法
//     abstract area(): number;
//     abstract perimeter(): number;
//     // 具象方法：可以使用抽象方法
//     // 这个方法调用了抽象方法，子类继承后可以正常使用
//     describe(): void {
//         console.log("面积: " + this.area().toFixed(2));
//         console.log("周长: " + this.perimeter().toFixed(2));
//     }
// }
// 定义矩形类继承 Shape
// class Rectangle extends Shape {
//     // 矩形的宽度
//     width: number;
//     // 矩形的高度
//     height: number;
//     // 构造函数
//     constructor(width: number, height: number) {
//         super();  // 调用父类构造函数
//         this.width = width;
//         this.height = height;
//     }
//     // 实现抽象方法：计算面积
//     area(): number {
//         return this.width * this.height;
//     }
//     // 实现抽象方法：计算周长
//     perimeter(): number {
//         return 2 * (this.width + this.height);
//     }
// }
// 创建矩形实例
// const rect = new Rectangle(4, 5);
// // 调用继承的 describe 方法，内部会调用子类的 area 方法
// rect.describe();
// console.log("周长: " + rect.perimeter());
// 提示：具象方法可以调用抽象方法
// 这是因为当具象方法被调用时，子类已经实现了抽象方法，所以可以正常执行
// 抽象类作为类型
// 抽象类可以作为参数类型使用
// 这意味着函数可以接受任何抽象类的子类实例，实现了多态 (Polymorphism) 的特性
// 定义抽象类 Animal
// abstract class Animal {
//     // 抽象方法：所有动物都会发出声音
//     abstract speak(): void;
// }
// 定义 Cat 类继承 Animal
// class Cat extends Animal {
//     // 实现抽象方法
//     speak(): void {
//         console.log("喵喵喵!");
//     }
// }
// 定义 Dog 类继承 Animal
// class Dog extends Animal {
//     // 实现抽象方法
//     speak(): void {
//         console.log("汪汪汪!");
//     }
// }
// 定义函数参数类型为抽象类 Animal
// 这个函数可以接受任何 Animal 的子类实例
// function makeSpeak(animal: Animal): void {
//     animal.speak();
// }
// 传入不同的子类实例，实现不同的行为（多态）
// makeSpeak(new Cat());
// makeSpeak(new Dog());
// 抽象类类型数组：可以存储不同子类实例
// let animals: Animal[] = [new Cat(), new Dog()];
// 多态：抽象类作为类型时，实际执行的是子类的方法实现。这就是面向对象的多态特性
// 抽象类与接口的区别
// 特性	抽象类	接口
// 实例化	不能直接实例化	不能直接实例化
// 方法实现	可以有具体实现	只能有声明（TypeScript 3.6+ 可有默认实现）
// 成员修饰符	可以添加 public、protected、private	只能有 readonly
// 继承	单继承（只能 extends 一个类）	多实现（可以 implements 多个接口）
// 构造函数	可以有构造函数	不能有构造函数
// 选择建议：
// 需要共享代码使用（用抽象类）
// 需要定义规范/契约（用接口）
// 需要多继承（用接口）
// 完整示例：支付系统
// 定义抽象支付类
class Payment {
    // 具象方法：验证支付信息
    // 所有子类都可以使用这个方法
    validate() {
        console.log("验证支付信息");
    }
}
// 信用卡支付类
class CreditCardPayment extends Payment {
    // 信用卡号码
    cardNumber;
    // 构造函数
    constructor(cardNumber) {
        super(); // 调用父类构造函数
        this.cardNumber = cardNumber;
    }
    // 实现抽象方法：处理信用卡支付
    process(amount) {
        console.log("处理信用卡支付: " + amount);
        return true;
    }
}
// PayPal 支付类
class PayPalPayment extends Payment {
    // PayPal 邮箱
    email;
    // 构造函数
    constructor(email) {
        super();
        this.email = email;
    }
    // 实现抽象方法：处理 PayPal 支付
    process(amount) {
        console.log("处理 PayPal 支付: " + amount);
        return true;
    }
}
// 使用多态处理不同的支付方式
const payments = [
    new CreditCardPayment("1234"),
    new PayPalPayment("test@example.com")
];
// 遍历处理每种支付方式
for (let i = 0; i < payments.length; i++) {
    const payment = payments[i];
    // 调用继承的验证方法
    payment.validate();
    // 调用子类的处理方法
    payment.process(100);
}
