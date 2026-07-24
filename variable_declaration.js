"use strict";
// var uname: string = "Runoob"; 
// var score1: number = 50;
// var score2: number = 42.50
// var sum = score1 + score2 
// console.log("名字: "+uname) 
// console.log("第一个科目成绩: "+score1) 
// console.log("第二个科目成绩: "+score2) 
// console.log("总成绩: "+sum)
// var str = '1';
// var str2: number = <number> <any> str;   //str、str2 是 string 类型
// console.log(str2);
// var num = 2;    // 类型推断为 number
// console.log("num 变量的值为 "+num); 
// // num = "12";    // 编译错误
// console.log(num);
// var global_num = 12          // 全局变量
// class Numbers { 
//    num_val = 13;             // 实例变量
//    static sval = 10;         // 静态变量
//    storeNum():void { 
//       var local_num = 14;    // 局部变量
//       console.log("局部变量: " + local_num);
//    } 
// } 
// console.log("全局变量为: "+global_num)  
// console.log(Numbers.sval)   // 静态变量
// var obj = new Numbers(); 
// console.log("实例变量: "+obj.num_val)
// obj.storeNum()
// TypeScript 变量声明
// TypeScript 变量的命名规则：
// 变量名称可以包含数字和字母
// 除了下划线 _ 和美元 $ 符号外，不能包含其他特殊字符，包括空格
// 变量名不能以数字开头
// 变量使用前必须先声明
// var, let, const 三种方式声明变量
// let username: string = "Runoob";  // 显式声明类型为 string，并赋值
// let username: string;  // undefined  // 显式声明类型为 string，但未赋值
// let username = "Runoob";  // 类型推断为 string
// console.log(username.toLocaleLowerCase())  // 输出 runoob;
// let username;  // 未显示声明类型，未赋值，类型为 undefined
// console.log(username);  // 输出 undefined
// console.log(typeof username);  // 输出 undefined
// var uname:string = "Runoob"; 
// var score1:number = 50;
// var score2:number = 42.50
// var sum = score1 + score2 
// console.log("名字: "+uname) 
// console.log("第一个科目成绩: "+score1) 
// console.log("第二个科目成绩: "+score2) 
// console.log("总成绩: "+sum)
// 注意：变量不要使用 name 否则会与 DOM 中的全局 window 对象下的 name 属性出现了重名
// TypeScript 遵循强类型，如果将不同的类型赋值给变量会编译错误
// var num: number = "hello";  // 编译错误 Type 'string' is not assignable to type 'number'
// 类型断言（Type Assertion）
// 类型断言可以用来手动指定一个值的类型，即允许变量从一种类型更改为另一种类型
// var str = '1';  // 类型推断为 string
// var str2: number = <number> <any> str;  // 类型断言，将 str 先断言为 any 类型，再断言为 number 类型
// str、str2 是 string 类型
// console.log(str2);  // 输出 1
// TypeScript 是怎么确定单个断言是否足够?
// 当 S 类型是 T 类型的子集，或者 T 类型是 S 类型的子集时，S 能被成功断言成 T
// 这是为了在进行类型断言时提供额外的安全性，完全毫无根据的断言是危险的
// 如果你想这么做，你可以使用 any
// 类型推断
// 当类型没有给出时，TypeScript 编译器利用类型推断来推断类型
// 如果由于缺乏声明而不能推断出类型，那么它的类型被视作默认的动态 any 类型
// 变量作用域
// 变量作用域指定了变量定义的位置
// 程序中变量的可用性由变量作用域决定
// TypeScript 有以下几种作用域：
// 全局作用域 − 全局变量定义在程序结构的外部，它可以在你代码的任何位置使用
// 类作用域 − 这个变量也可以称为 字段
// 类变量声明在一个类里头，但在类的方法外面
// 该变量可以通过类的对象来访问
// 类变量也可以是静态的，静态的变量可以通过类名直接访问
// 局部作用域 − 局部变量，局部变量只能在声明它的一个代码块（如：方法）中使用
var global_num = 12; // 全局变量
class Numbers {
    num_val = 13; // 实例变量
    static sval = 10; // 静态变量
    storeNum() {
        var local_num = 14; // 局部变量
        console.log("局部变量: " + local_num);
    }
}
console.log("全局变量为: " + global_num);
console.log(Numbers.sval); // 静态变量
var obj = new Numbers();
console.log("实例变量: " + obj.num_val);
obj.storeNum(); // 输出局部变量: 14
