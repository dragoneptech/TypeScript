// TypeScript Number

// TypeScript 与 JavaScript 类似，支持 Number 对象
// 在 TypeScript 中，Number 对象用于包装数值类型
// Number 对象是原始数值的包装对象
// 类似于 String 对象，Number 对象是引用类型，与基本的 number 类型有所不同
// 尽管 Number 对象提供了一些额外的属性和方法
// 但在 TypeScript 中更推荐直接使用基本的 number 类型，因为 Number 对象会带来性能开销和类型混淆

// 语法
// 创建 Number 对象
// const numObj: Number = new Number(42);  // 创建一个 Number 对象，值为 42
// 这会创建一个引用类型的对象，而非基本的 number 类型

// 注意： 如果一个参数值不能转换为一个数字将返回 NaN (非数字值)
// const numObj: Number = new Number("abc");  // 创建一个 Number 对象，值为 NaN


// 使用 Number 对象的方法
// const numValue: number = numObj.valueOf();  // 获取 Number 对象的原始数值
// console.log("Number 对象的类型:", typeof numObj);  // 输出: Number 对象的类型: object
// console.log("Number 对象的值:", numValue);  // 输出: Number 对象的值: 42


// Number 对象与基本 number 类型的区别
// 基本类型 number：原始数据类型，用于存储数值
// Number 对象：引用类型，是一个包装对象，用于包装基本数值
// let numLiteral: number = 42;
// let numObject: Number = new Number(42);

// console.log(numLiteral); // 输出：42
// console.log(numObject);  // 输出：[Number: 42]

// console.log(typeof numLiteral); // 输出："number"
// console.log(typeof numObject);  // 输出："object"

// Number 对象属性
// console.log("Number 对象的属性:", Number.MAX_VALUE);  // 输出：1.7976931348623157e+308
// console.log("Number 对象的属性:", Number.MIN_VALUE);  // 输出：5e-324
// console.log("Number 对象的属性:", Number.NaN);        // 输出：NaN
// console.log("Number 对象的属性:", Number.NEGATIVE_INFINITY);  // 输出：-Infinity
// console.log("Number 对象的属性:", Number.POSITIVE_INFINITY);  // 输出：Infinity
// prototype
// Number 对象的静态属性。使您有能力向对象添加属性和方法
// constructor
// 返回对创建此对象的 Number 函数的引用

// NaN 实例
// let month: number = 0;
// if (month <= 0 || month > 12) {
//     month = Number.NaN;  // 将 month 设置为 NaN
//     console.log("月份无效，设置为", month);
// } else {
//     console.log("月份有效:", month);
// }

// prototype 实例
// tsc --noImplicitThis false
// 否则使用 class 关键字定义类会更好
// function employee(id: number, name: string): void {
//     this.id = id;
//     this.name = name;
// }

// const emp = new (employee as any)(123, "admin");
// employee.prototype.email = "admin@tju.edu.cn";  // 为 employee 的原型添加 email 属性

// console.log("员工 ID:", emp.id);  // 输出: 员工 ID: 123
// console.log("员工姓名:", emp.name);
// console.log("员工邮箱:", (emp as any).email);  // 输出: 员工邮箱:

// class 实现
// method1: interface add email property
// interface Employee {
//     email: string;
// }
// interface Employee {
//     id: number;
//     name: string;
//     email?: string;
// }
// class Employee  {
//     id: number;
//     name: string;
//     // email!: string;  // 使用 ! 表示 email 属性会在稍后被赋值，避免编译器报错
//     // definite assignment assertion（确定赋值断言）

//     constructor(id: number, name: string) {
//         this.id = id;
//         this.name = name;
//     };
// }

// const emp = new Employee(123, "admin");
// Employee.prototype.email = "admin@tju.edu.cn";  // 为 Employee 的原型添加 email 属性

// console.log("员工 ID:", emp.id);  // 输出: 员工 ID: 123
// console.log("员工姓名:", emp.name);  // 输出: 员工姓名: admin
// console.log("员工邮箱:", emp.email);  // 输出: 员工邮箱: admin@tju.edu.cn

// method2: using getter to set email property
// class Employee  {
//     id: number;
//     name: string;

//     constructor(id: number, name: string) {
//         this.id = id;
//         this.name = name;
//     };

//     // 使用 getter 方法来访问 email 属性
//     get email(): string {
//         return "admin@tju.edu.cn";  // 实际上定义在 Employee.prototype
//     }
// }

// const emp = new Employee(123, "admin");
// // Employee.prototype.email = "admin@tju.edu.cn";  // 为 Employee 的原型添加 email 属性

// console.log("员工 ID:", emp.id);  // 输出: 员工 ID: 123
// console.log("员工姓名:", emp.name);  // 输出: 员工姓名: admin
// console.log("员工邮箱:", emp.email);  // 输出: 员工邮箱: admin@tju.edu.cn


// Number 对象方法
//toExponential() 
// const num1: number = 1225.30 
// const val: string = num1.toExponential(); 
// console.log(val) // 输出： 1.2253e+3

// toFixed()
// const num3: number = 177.235;
// console.log("num3.toFixed() 为 "+num3.toFixed())    // 输出：177
// console.log("num3.toFixed(2) 为 "+num3.toFixed(2))  // 输出：177.24
// console.log("num3.toFixed(6) 为 "+num3.toFixed(6))  // 输出：177.235000

// toLocaleString()
// var num = new Number(177.1234); 
// console.log(num.toLocaleString());  // 输出：177.123

// toPrecision()
// var num = new Number(7.123456); 
// console.log(num.toPrecision());  // 输出：7.123456 
// console.log(num.toPrecision(1)); // 输出：7
// console.log(num.toPrecision(2)); // 输出：7.1

// toString()
// var num = new Number(10); 
// const num: number = 10;
// console.log(num.toString());  // 输出10进制：10
// console.log(num.toString(2)); // 输出2进制：1010
// console.log(num.toString(8)); // 输出8进制：12

// valueOf()
// var num = new Number(10); 
// console.log(num.valueOf()); // 输出：10


// Number 对象的使用建议
// 在 TypeScript 中，通常更推荐使用基本的 number 类型，而不是 Number 对象
// 性能：基本类型更轻量，性能更好`
// 类型一致性：TypeScript 的类型系统更倾向于基本类型，使用 Number 对象可能导致意外的类型不匹配
// 最佳实践：基本类型的 number 更符合 TypeScript 的最佳实践，避免了对象包装带来的不必要复杂性

let numLiteral: number = 123.456;
let numObject: Number = new Number(123.456);

console.log(numLiteral.toFixed(2));      // 输出："123.46"
console.log(numObject.valueOf());        // 输出：123.456
console.log(numObject.valueOf().toFixed(2));        // 输出：123.46


