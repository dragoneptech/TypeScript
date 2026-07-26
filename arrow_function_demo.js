"use strict";
// TypeScript 箭头函数与 this
const person = {
    name: "Alice",
    // sayHello: () => {
    //     console.log("Hello, " + person.name);
    //     // console.log("Hello, " + this.name);
    //     // Error: The containing arrow function captures the global value of 'this'
    //     // console.log("Hello, " + Person.name);
    //     // Error: 'Person' only refers to a type, but is being used as a value here
    // }
    sayHello: function () {
        console.log("Hello, " + this.name);
    }
};
person.sayHello();
// 注意：箭头函数类型的语法是 (params) => returnType，不是传统的 (params): returnType
// 除非是接口定义箭头函数类型才使用 (params): returnType 语法
// 接口属性定义箭头函数仍然使用 (params) => returnType 语法，函数名: (params) => returnType
// (params): returnType 语法仅在接口定义函数签名时使用  
// 何时使用箭头函数
// 箭头函数虽然简洁，但并非所有场景都适用
// 了解何时使用箭头函数可以写出更好的代码
// 需要保持 this 上下文时：如回调函数、事件处理、数组方法
// 简单的一行函数：如 map、filter、reduce 的回调
// 类方法需要传递时：作为回调传递给其他函数
// 警告：不要在需要动态 this 的场景（如事件处理函数中需要获取事件目标）使用箭头函数，因为此时 this 已经被固定
// 注意事项
// 不绑定 arguments：箭头函数不绑定自己的 arguments 对象
// 不能用作构造函数：不能使用 new 关键字调用箭头函数
// 不能用作方法：在对象字面量中作为方法时，this 可能不符合预期
// 适合回调：在需要保持 this 上下文的场景优先使用
// 最佳实践：根据场景选择：需要 this 绑定时用箭头函数，需要动态 this 时用普通函数
// 总结
// 箭头函数是现代 JavaScript/TypeScript 开发中不可或缺的特性。
// 语法简洁：使用 => 语法
// 不绑定 this：捕获定义时的上下文
// 适合回调：数组方法、事件处理等场景
// 类中使用：箭头属性方法解决传递问题
// 类型注解：使用 => 语法定义类型
// 建议：在 TypeScript 开发中，充分利用箭头函数的 this 绑定特性，可以写出更安全、更易维护的代码
