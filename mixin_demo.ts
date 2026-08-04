// TypeScript 混入（Mixin）

// 混入（Mixin）是一种代码复用模式，用于将多个独立的功能模块混入到一个类中
// TypeScript 通过泛型函数返回扩展类的方式实现 Mixin，弥补了单继承无法复用多个来源行为的不足

// Mixin 工作原理
// 1. Mixin 是函数
// 接收一个类，返回扩展后的新类
// 通过泛型函数返回扩展类的方式实现 Mixin
// 2. 继承而非修改
// 通过 extends 继承，不修改原类
// 3. 可叠加组合
// 多个 Mixin 可以嵌套组合使用


// 基本概念
// Mixin 的核心是一个接收基类、返回扩展类的泛型函数
// Constructor 类型约束用于描述"任意可被继承的类"

// Constructor 类型：描述任意可实例化的类
// type Constructor<T = {}> = new (...args: any[]) => T;
// Type Alias 语法
// Generic Type T 默认值为 {}，表示任意对象类型
// Constructor 类型是一个泛型类型，表示一个构造函数，返回类型为 T
// 可以接受一个泛型参数 T，表示构造函数返回的实例类型，也可以不传，默认为 {}，表示任意对象类型
// new (...args: any[]) => T，这是构造函数类型签名
// ...: rest operator 表示任意数量的参数，返回类型为 T 的构造函数

// type Constructor = new () => {};
// 表示：任何可以：
// new Xxx()
// 并返回对象的东西
// new () => {} // 表示：任何可以 new 的东西，返回一个对象，一般指构造函数类型

// Mixin 泛型函数：接收基类，返回扩展后的新类
// function Timestamped<TBase extends Constructor>(Base: TBase) {
//     return class extends Base {  // 返回一个继承自 Base 的新匿名类 (anonymous class)
//         createdAt = new Date();
//     };
// }

// 基类
// class User {
//     constructor(public name: string) {}  // parameter properties 语法糖，自动创建 name 属性并赋值
// }

// 混入后得到新类
// const TimestampedUser = Timestamped(User);
// const user = new TimestampedUser("Alice");

// console.log(user.name);                        // Alice
// console.log(user.createdAt instanceof Date);   // true
// console.log(user.createdAt);                   // 当前时间

// 注意：Mixin 不修改原始类，而是返回一个全新的扩展类，原始的 User 类不受影响


// 组合多个 Mixin
// 将多个 Mixin 函数嵌套调用，即可将多份能力依次叠加到同一个类上

// type Constructor<T = {}> = new (...args: any[]) => T;

// // Mixin 1：添加时间戳
// function Timestamped<TBase extends Constructor>(Base: TBase) {
//     return class extends Base {
//         createdAt = new Date();
//     };
// }

// // Mixin 2：添加序列化
// function Serializable<TBase extends Constructor>(Base: TBase) {
//     return class extends Base {
//         serialize(): string {
//             return JSON.stringify(this);
//         }
//     };
// }

// // Mixin 3：添加日志（依赖 serialize 方法）
// function Loggable<TBase extends Constructor<{ serialize(): string }>>(Base: TBase) {
//     return class extends Base {
//         log(): void {
//             console.log("[LOG]", this.serialize());
//         }
//     };
// }

// class Product {
//     constructor(public name: string, public price: number) {}
// }

// // 依次叠加三个 Mixin
// const AdvancedProduct = Loggable(Serializable(Timestamped(Product)));

// const p = new AdvancedProduct("Phone", 999);
// p.log();
// console.log(p.createdAt instanceof Date);  // true
// console.log(p.createdAt);  // 当前时间


// Mixin 与接口结合
// Mixin 返回的扩展类可以声明实现某个接口，使消费方通过接口类型操作混入后的对象，而不依赖具体实现

type Constructor<T = {}> = new (...args: any[]) => T;

// 定义能力接口
interface ISerializable {
    serialize(): string;
}

interface ICloneable<T> {
    clone(): T;
}

// Mixin 实现接口
function Serializable<TBase extends Constructor>(Base: TBase) {
    return class extends Base implements ISerializable {
        serialize(): string {
            return JSON.stringify(this);
        }
    };
}

function Cloneable<TBase extends Constructor>(Base: TBase) {
    return class extends Base implements ICloneable<typeof Base> {
        clone() {
            return Object.assign(
                Object.create(Object.getPrototypeOf(this)),
                this
            );
        }
    };
}

class Article {
    constructor(public title: string, public content: string) {}
}

const RichArticle = Cloneable(Serializable(Article));

const a1 = new RichArticle("TypeScript 入门", "正文内容...");
const a2 = a1.clone();
a2.title = "TypeScript 进阶";

console.log(a1.serialize());
// {"title":"TypeScript 入门","content":"正文内容..."}

console.log(a2.serialize());
// {"title":"TypeScript 进阶","content":"正文内容..."}

console.log(a1.title === a2.title);  // false（克隆后独立修改）


// 带约束的 Mixin
// 通过泛型约束 (Generic Constraints)
// 可以限定 Mixin 只能混入满足特定条件的类，避免运行时缺少必要属性

// type Constructor<T = {}> = new (...args: any[]) => T;

// // 约束：基类必须有 id 和 name 属性
// type WithIdAndName = Constructor<{ id: number; name: string }>;

// function Printable<TBase extends WithIdAndName>(Base: TBase) {
//     return class extends Base {
//         print(): void {
//             console.log(`[${this.id}] ${this.name}`);
//         }
//     };
// }

// class Item {
//     constructor(public id: number, public name: string) {}
// }

// // 正确：Item 满足约束
// const PrintableItem = Printable(Item);
// const item = new PrintableItem(42, "Keyboard");
// item.print();  // [42] Keyboard

// 错误示例（编译器会阻止）：
// class NoId { constructor(public name: string) {} }
// const Bad = Printable(NoId);  // 错误：NoId 缺少 id 属性



// Mixin 与继承的对比
// 维度	继承（extends）	Mixin
// 来源数量	只能继承一个父类	可叠加任意数量
// 耦合程度	子类与父类强耦合	每个 Mixin 独立，低耦合
// 复用粒度	复用整个类的能力	按需复用单一功能
// 类型安全	原生支持	需借助泛型约束保证
// 适用场景	强 "is-a" 关系	横切关注点（日志、序列化、缓存等）

// 总结
// 核心模式：Mixin 是接收基类、返回扩展类的泛型函数，Constructor<T> 是标准约束类型
// 能力叠加：嵌套调用多个 Mixin 函数即可将多份能力组合到同一个类
// 接口结合：Mixin 返回的类可以实现接口，消费方只需依赖接口而非具体类
// 泛型约束：通过约束 TBase 可以限定 Mixin 的适用范围，在编译期阻止错误使用
// 适用场景：日志、序列化、克隆、时间戳等横切关注点，优于多层继承







