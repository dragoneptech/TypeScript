"use strict";
// TypeScript 元组
// 数组中元素的数据类型一般都是相同的（any[] 类型的数组可以不同）
// 如果存储的元素数据类型不同，则需要使用元组(Tuple)来表示
// TypeScript 中的元组（Tuple）是一种特殊类型的数组，允许在数组中存储不同类型的元素
// 与普通数组不同，元组中的每个元素都有明确的类型和位置
// 元组可以在很多场景下用于表示固定长度、且各元素类型已知的数据结构
// 创建元组的语法格式如下：
// let tuple: [类型1, 类型2, 类型3, ...];
// let mytuple: [number, string];
// mytuple = [42,"Runoob"];
// let mytuple: [number, string] = [42,"Runoob"];
// console.log(mytuple);
// 访问元组
// 元组中元素使用索引来访问，第一个元素的索引值为 0，第二个为 1，以此类推
// tuple_name[index]
// let mytuple: [number, string, boolean] = [42, "Runoob", true];
// // 访问元组中的元素
// let num = mytuple[0]; // 访问第一个元素，值为 42，类型为 number
// let str = mytuple[1]; // 访问第二个元素，值为 "Runoob"，类型为 string
// let bool = mytuple[2]; // 访问第三个元素，值为 true，类型为 boolean
// console.log(num);  // 输出: 42
// console.log(str);  // 输出: Runoob
// console.log(bool); // 输出: true
// 元组运算
// 可以使用以下两个函数向元组添加新元素或者删除元素：
// push() 向元组添加元素，添加在最后面
// pop() 从元组中移除元素（最后一个），并返回移除的元素
// push 方法可以向元组的末尾添加一个元素，类型必须符合元组定义中的类型约束
// 如果超出元组的类型约束，TypeScript 会报错
// var tuple = [42, "Hello"];
// // 添加符合类型的元素
// tuple.push("World"); // 合法，因为元组定义了可选的 string 类型
// console.log(tuple); // 输出: [42, "Hello", "World"]
// tuple.push(100); // 合法，因为元组定义了可选的 number 类型
// console.log(tuple); // 输出: [42, "Hello", "World", 100]
// let tuple: [number, string, boolean] = [42, "Hello", true];
// // 移除最后一个元素
// let lastElement = tuple.pop();
// console.log(lastElement); // 输出: true
// console.log(tuple);       // 输出: [42, "Hello"]
// 更新元组
// 元组是可变的!!!
// 这意味着我们可以对元组进行更新操作
// var mytuple = [42, "Runoob", "Taobao", "Google"]; // 创建一个元组
// console.log("元组的第一个元素为：" + mytuple[0]) 
// // 更新元组元素
// mytuple[0] = 121     
// console.log("元组中的第一个元素更新为："+ mytuple[0])
// 解构元组 destructuring tuple
// 元组可以使用解构赋值的方式来提取其中的元素
// 解构赋值允许我们将元组中的元素直接赋值给变量，简化了代码的书写
// let a: [number, string, boolean] = [42, "Hello", true];// 创建一个元组
// var [b,c] = a 
// console.log( b )    
// console.log( c )
// 使用标签元组
// TypeScript 还允许为元组中的每个元素添加标签，这使得元组的含义更加清晰
// let tuple: [id: number, name: string] = [1, "John"];
// 在这个例子中，id 和 name 是元组的标签，可以让代码更加可读
// console.log(tuple);
// 元组的实际应用
// 元组常用于函数返回多个值的场景，或者表示某些固定结构的数据
// function getUserInfo(): [number, string] {
//     return [1, "John Doe"];
// }
// const [userId, userName] = getUserInfo();  // destructuring assignment to extract values from the tuple
// console.log(userId);   // 输出: 1
// console.log(userName); // 输出: John Doe
// 元组的类型推断
// TypeScript 可以根据数组的元素自动推断出元组的类型
// let tuple = [42, "Hello"] as const; // 元组类型：[42, "Hello"]
// tuple[0] = 100; // Error: Cannot assign to '0' because it is a read-only property
// 通过 as const 断言，TypeScript 会将该元组视为一个不可变的常量元组
// 连接元组
// 元组可以使用数组的 concat 方法进行连接，但需要注意连接后的结果是一个普通的数组，而不是元组
// let tuple1: [number, string] = [42, "Hello"];
// let tuple2: [boolean, number] = [true, 100];
// let result = tuple1.concat(tuple2); // 结果是一个数组: [42, "Hello", true, 100]
// console.log(result); // 输出: [42, "Hello", true, 100]
// 以上 ts 报错，js 不报错
// let tuple1: [number, string | boolean] = [42, "Hello"];
// let tuple2: [boolean, number] = [true, 100];
// // 使用 ... spread 运算符将元组展开为单独的元素，然后再进行连接
// let result = tuple1.concat(...tuple2); // 结果是一个数组: [42, "Hello", true, 100]
// console.log(result); // 输出: [42, "Hello", true, 100]
// 切片元组
// 你可以使用数组的 slice 方法对元组进行切片操作，返回一个新的数组
// let tuple: [number, string, boolean] = [42, "Hello", true];
// let sliced = tuple.slice(1); // 从索引 1 开始切片
// console.log(sliced); // 输出: ["Hello", true]
// 遍历元组
// 你可以使用 for...of 循环或者 forEach 方法遍历元组中的元素
// let tuple: [number, string, boolean] = [42, "Hello", true];
// // 使用 for...of 循环
// for (let item of tuple) {
//     console.log(item);
// }
// // 使用 forEach 方法
// tuple.forEach(item => console.log(item));
// 转换为普通数组
// 虽然元组是一个固定长度、固定类型的数组，但可以通过 Array.prototype 的方法将其转换为普通数组进行进一步处理
// let tuple: [number, string, boolean] = [42, "Hello", true];
// // 转换为数组并使用数组方法
// let array: any[] = Array.from(tuple);
// array.push("New Element");
// console.log(array); // 输出: [42, "Hello", true, "New Element"]
// 扩展元组
// 使用剩余运算符可以轻松地将多个元组合并成一个新的元组
// 这个时候剩余运算符应该称为spread运算符更合适，因为它会将元组展开为单独的元素
let tuple1 = [42, "Hello"];
let tuple2 = [true];
// let extendedTuple: [number, string, ...typeof tuple2] = [42, "Hello", ...tuple2];
let extendedTuple = [...tuple1, ...tuple2];
console.log(extendedTuple); // 输出: [42, "Hello", true]
