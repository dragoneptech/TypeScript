"use strict";
// TypeScript String（字符串）
// 语法
// String 对象
// const txt: String = new String("Hello, World!");
// 字符串字面量（推荐）
// const str: string = "Hello, World!";
// 两种创建方式及核心区别
// 原始字符串（推荐使用）
// const txt1: string = "Hello TypeScript"; // 显式指定类型
// const txt2 = "Hello JavaScript"; // 类型推导为 string
// String 对象（不推荐）
// const txtObj: String = new String("Hello Object"); // 类型为 String（对象）
// String 对象和字符串字面量在类型上是不同的：
// 字符串字面量是基本数据类型 string，用于直接存储字符串值
// String 对象是 String 类型，实际上是一个对象，而非原始的字符串值
// let strLiteral: string = "Hello";
// let strObject: String = new String("Hello");
// console.log(strLiteral); // 输出："Hello"
// console.log(typeof strLiteral); // 输出："string"
// console.log(strObject); // 输出：[String: 'Hello']
// console.log(typeof strObject);  // 输出："object"
// 字符串字面量和 String 对象的类型兼容性
// let strLiteral: string = "Hello";
// let strObject: String = new String("Hello");
// console.log(strLiteral === strObject); // 输出：false, 内容相同，类型不同
// console.log(strLiteral == strObject); // 输出：true, 内容相同，类型不同（使用了类型转换）
// console.log(strLiteral === strObject.valueOf()); // 输出：true, 将对象转为原始字符串后比较
// String 对象属性
// constructor
// const str = new String("This is string");
// console.log('str.constructor is: ' + str.constructor);
// length
// var uname = new String("Hello World") 
// console.log("Length "+uname.length)  // 输出 11
// prototype
// 允许您向对象添加属性和方法
// tsc --noImplicitThis false
// function employee(id: number, name: string) {
//     this.id = id;
//     this.name = name;
// }
// var emp = new (employee as any)(123, "admin");
// // 为 employee 函数添加一个属性
// employee.prototype.email = "admin@example.com";
// console.log("员工号: "+emp.id) 
// console.log("员工姓名: "+emp.name) 
// console.log("员工邮箱: "+emp.email)
// interface Employee {
//     id: number;
//     name: string;
//     email?: string;
// }
// class Employee {
//     id: number;
//     name: string;
//     // email: string;
//     constructor(id: number, name: string) {
//         this.id = id;
//         this.name = name;
//     }
// }
// const emp = new Employee(123, "admin");
// // 为 employee 函数添加一个属性
// Employee.prototype.email = "admin@example.com";
// console.log("员工号: "+emp.id) 
// console.log("员工姓名: "+emp.name) 
// console.log("员工邮箱: "+emp.email)
// String 方法
// var str = new String("RUNOOB"); 
// console.log("str.charAt(0) 为:" + str.charAt(0)); // R
// console.log("str.charAt(1) 为:" + str.charAt(1)); // U 
// console.log("str.charAt(2) 为:" + str.charAt(2)); // N 
// console.log("str.charAt(3) 为:" + str.charAt(3)); // O 
// console.log("str.charAt(4) 为:" + str.charAt(4)); // O 
// console.log("str.charAt(5) 为:" + str.charAt(5)); // B
// charCodeAt()
// 返回在指定的位置的字符的 Unicode 编码	
// var str = new String("RUNOOB"); 
// console.log("str.charCodeAt(0) 为:" + str.charCodeAt(0)); // 82
// console.log("str.charCodeAt(1) 为:" + str.charCodeAt(1)); // 85 
// console.log("str.charCodeAt(2) 为:" + str.charCodeAt(2)); // 78 
// console.log("str.charCodeAt(3) 为:" + str.charCodeAt(3)); // 79 
// console.log("str.charCodeAt(4) 为:" + str.charCodeAt(4)); // 79
// console.log("str.charCodeAt(5) 为:" + str.charCodeAt(5)); // 66
// concat() 方法接受 string 类型的参数（或 string 数组），而不是 String 对象
// var str1 = new String( "RUNOOB" ); 
// var str2 = new String( "GOOGLE" ); 
// var str3: String = str1.concat( str2.valueOf() ); 
// console.log("str1 + str2 : "+str3) // RUNOOBGOOGLE
// var str1 = new String( "RUNOOB" ); 
// var index = str1.indexOf( "OO" ); 
// console.log("查找的字符串位置 :" + index );  // 3
// var str1 = new String( "This is string one and again string" ); 
// var index = str1.lastIndexOf( "string" );
// console.log("lastIndexOf 查找到的最后字符串位置 :" + index ); // 29
// index = str1.lastIndexOf( "one" ); 
// console.log("lastIndexOf 查找到的最后字符串位置 :" + index ); // 15
// var str1 = new String( "This is beautiful string" );
// var index = str1.localeCompare( "This is beautiful string"); 
// console.log("localeCompare first :" + index );  // 0
// var str="The rain in SPAIN stays mainly in the plain"; 
// var n=str.match(/ain/g);  // ain,ain,ain
// console.log(n); // ain,ain,ain
// var m=str.match(/ain/gi);  // ain,'AIN',ain,ain
// console.log(m); // ain,'AIN',ain,ain
// var re = /(\w+)\s(\w+)/; 
// var str = "zara ali"; 
// var newstr = str.replace(re, "$2, $1"); 
// console.log(newstr); // ali, zara
// var re = /apples/gi; 
// var str = "Apples are round, and apples are juicy.";
// if (str.search(re) == -1 ) { 
//    console.log("Does not contain Apples" ); 
// } else { 
//    console.log("Contains Apples" ); 
// }
// var str = "Apples are round, and apples are juicy."; 
// var splitted = str.split(" ", 3); 
// console.log(splitted)  // [ 'Apples', 'are', 'round,' ]
// var splitted = str.split(" "); 
// console.log(splitted)  // ['Apples', 'are', 'round,', 'and','apples', 'are', 'juicy.']
// var str = "RUNOOB GOOGLE TAOBAO FACEBOOK"; 
// console.log("(1,2): "    + str.substring(1,2));   // U
// console.log("(0,10): "   + str.substring(0, 10)); // RUNOOB GOO
// console.log("(5): "      + str.substring(5));     // B GOOGLE TAOBAO FACEBOOK
// var str = "Runoob Google"; 
// console.log(str.toLowerCase( ));  // runoob google
// var str = "Runoob Google"; 
// console.log(str.toUpperCase( ));  // RUNOOB GOOGLE
// var str = "Runoob"; 
// console.log(str.toString( )); // Runoob
// var str = new String("Runoob"); 
// console.log(str.valueOf( ));  // Runoob
// console.log(typeof str.valueOf()); // string
// 如果确实需要使用 String 对象的方法，可以通过 valueOf() 方法将对象转为原始字符串，然后继续处理
let strLiteral = "Use string literals whenever possible!";
let strObject = new String("Avoid using String objects.");
console.log(strLiteral); // 输出："Use string literals whenever possible!"
console.log(strObject.valueOf()); // 输出："Avoid using String objects."
