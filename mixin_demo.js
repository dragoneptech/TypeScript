"use strict";
// TypeScript 混入（Mixin）
// Mixin 实现接口
function Serializable(Base) {
    return class extends Base {
        serialize() {
            return JSON.stringify(this);
        }
    };
}
function Cloneable(Base) {
    return class extends Base {
        clone() {
            return Object.assign(Object.create(Object.getPrototypeOf(this)), this);
        }
    };
}
class Article {
    title;
    content;
    constructor(title, content) {
        this.title = title;
        this.content = content;
    }
}
const RichArticle = Cloneable(Serializable(Article));
const a1 = new RichArticle("TypeScript 入门", "正文内容...");
const a2 = a1.clone();
a2.title = "TypeScript 进阶";
console.log(a1.serialize());
// {"title":"TypeScript 入门","content":"正文内容..."}
console.log(a2.serialize());
// {"title":"TypeScript 进阶","content":"正文内容..."}
console.log(a1.title === a2.title); // false（克隆后独立修改）
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
