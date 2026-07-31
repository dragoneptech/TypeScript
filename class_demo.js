"use strict";
// TypeScript 类
// 类是面向对象编程（OOP: Object-Oriented Programming）的核心概念
// 是一种模板或蓝图，用于创建具有相同属性和方法的对象
// TypeScript 完全支持面向对象编程，提供了类(class)、继承(inheritance)、
// 多态(polymorphism)、封装(encapsulation)、抽象(abstract)、接口(interfaces)、
// 泛型(generics)、模块(modules)、命名空间(namespaces)、访问修饰符(access modifiers)等特性
// 类封装了数据（属性）和行为（方法），使得代码更加模块化、可复用和易维护
// 通过类，可以创建多个具有相同结构的对象(object)，这些对象称为类的实例(instance)
// 抽象类
class Item {
    name;
    price;
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}
// 具体类
class Product extends Item {
    category;
    constructor(name, price, category) {
        super(name, price);
        this.category = category;
    }
    // 实现抽象方法
    getDetails() {
        return `产品: ${this.name}, 价格: ¥${this.price}, 类别: ${this.category}`;
    }
    // 实现接口方法
    print() {
        console.log(this.getDetails());
    }
    // 静态方法
    static create(name, price) {
        return new Product(name, price, "默认类别");
    }
}
// 使用
const product = Product.create("笔记本电脑", 5999); // 使用静态方法创建实例
const product2 = new Product("耳机", 299, "电子产品"); // 使用构造函数创建实例
product.print();
product2.print();
// 折扣方法
class DiscountedProduct extends Product {
    discount;
    constructor(name, price, category, discount) {
        super(name, price, category);
        this.discount = discount;
    }
    getDetails() {
        const discountedPrice = this.price * (1 - this.discount / 100);
        return `产品: ${this.name}, 原价: ¥${this.price}, 折扣: ${this.discount}%, 现价: ¥${discountedPrice.toFixed(2)}`;
    }
}
const discountedProduct = new DiscountedProduct("手机", 2999, "电子产品", 20);
discountedProduct.print();
