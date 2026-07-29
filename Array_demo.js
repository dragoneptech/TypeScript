"use strict";
// TypeScript Array(数组)
// const site1: string = "Google";
// const site2: string = "Runoob";
// const site3: string = "Taobao";
// let sites: string[];
// sites = ["Google", "Runoob", "Taobao"];
// TypeScript 声明数组的语法格式
// let array_name: type[]; // 方式一
// let array_name: Array<type>; // 方式二
// 先声明，再赋值初始化
// 声明与赋值初始化同时进行
// let numlist: number[] = [1, 2, 3];
// let numlist2: Array<number> = [1, 2, 3];
// 索引值第一个为 0
// const sites: string[] = ["Google", "Runoob", "Taobao"];
// console.log(sites[0]);
// console.log(sites[1]);
// console.log(sites[2]);
// let nums :number[] = [1,2,3,4] 
// console.log(nums[0]); 
// console.log(nums[1]); 
// console.log(nums[2]); 
// console.log(nums[3]);
// Array 对象
// 也可以使用 Array 对象创建数组
// Array 对象的构造函数接受以下两种值：
// 表示数组大小的数值
// 初始化的数组列表，元素使用逗号分隔值
// let arr_names: number[] = new Array(4)  // 指定数组初始化大小
// for(let i = 0; i<arr_names.length; i++) { 
//         arr_names[i] = i * 2 
//         console.log(arr_names[i]) 
// }
// 直接初始化数组元素
// let sites: string[] = new Array("Google","Runoob","Taobao","Facebook") 
// for(let i = 0; i<sites.length; i++) { 
//         console.log(sites[i]) 
// }
// 数组解构
// array destructuring 是一种 JavaScript 表达式，它可以将数组或对象拆分成更小的部分。
// 语法
// let [var1, var2] = array;
// const arr: number[] = [12,13] 
// let [x, y]: number[] = arr // 将数组的两个元素分别赋值给变量 x 和 y
// let [x, y] = arr; // 将数组的两个元素分别赋值给变量 x 和 y
// console.log(x) 
// console.log(y)
// 数组迭代
// const nums: number[] = [1001, 1002, 1003, 1004];
// for (const i in nums) {
//     console.log(i); // 输出索引值
//     console.log(nums[i]); // 输出索引值对应的元素
// }
// for (const i of nums) {
//     console.log(i); // 输出元素
// }
// 多维数组
// 一个数组的元素可以是另外一个数组，这样就构成了多维数组（Multi-dimensional Array）
// 最简单的多维数组是二维数组
// const arr_2d: number[][] = [[1, 2, 3], [24, 25, 26]];
// console.log(arr_2d[0][0]); // 输出 1
// console.log(arr_2d[0][1]); // 输出 2
// console.log(arr_2d[0][2]); // 输出 3
// console.log(arr_2d[1][0]); // 输出 24
// console.log(arr_2d[1][1]); // 输出 25
// console.log(arr_2d[1][2]); // 输出 26
// for (const i in arr_2d) {
//     for (const j in arr_2d[i]) {
//         console.log(arr_2d[i][j]);
//     }
// }
// 数组在函数中的使用
// 作为参数传递给函数
// const sites: string[] = new Array("Google", "Runoob", "Taobao", "Facebook");
// function disp(arr_sites: string[]): void {
//     for(let i = 0; i<arr_sites.length; i++) { 
//         console.log(arr_sites[i]) 
//     }  
// }  
// disp(sites);
// 作为函数的返回值
// function disp(): string[] { 
//     return new Array("Google", "Runoob", "Taobao", "Facebook");
// } 
// const sites: string[] = disp() 
// for(let i in sites) { 
//     console.log(sites[i]) 
// }
// 数组方法
// concat(): 连接两个或更多的数组，并返回结果
// const alpha: any[] = ["a", "b", "c"]; 
// const numeric: any[] = [1, 2, 3];
// const alphaNumeric: any[] = alpha.concat(numeric); 
// console.log("alphaNumeric: " + alphaNumeric );    // a,b,c,1,2,3   
// every(): 检测数值元素的每个元素是否都符合条件
// function isBigEnough(element: number, index: number, array: number[]) { 
//     return (element >= 10); 
// } 
// var passed: boolean = [12, 5, 8, 130, 44].every(isBigEnough); 
// console.log("Test Value: " + passed ); // false
// filter(): 检测数值元素，并返回符合条件所有元素的数组
// function isBigEnough(element: number, index: number, array: number[]) { 
//    return (element >= 10); 
// } 
// var passed: number[] = [12, 5, 8, 130, 44].filter(isBigEnough); 
// console.log("Test Value: " + passed ); // 12,130,44
// forEach(): 数组每个元素都执行一次回调函数
// let num: number[] = [7, 8, 9];
// num.forEach(function (value) {
//     console.log(value);
// }); 
// indexOf(): 搜索数组中的元素，并返回它所在的位置
// 如果搜索不到，返回值 -1，代表没有此项
// const index: number = [12, 5, 8, 130, 44].indexOf(8); 
// const index: number = [12, 5, 8, 130, 44].indexOf(99);
// console.log("index is: " + index );  // 2  // -1
// join(): 把数组的所有元素放入一个字符串
// const arr = new Array("Google","Runoob","Taobao"); 
// const str = arr.join();  // 如果不指定分隔符，默认使用逗号
// console.log("str: " + str );  // Google,Runoob,Taobao
// const str = arr.join(", ");  // 指定分隔符为逗号加空格
// console.log("str : " + str );  // Google, Runoob, Taobao
// const str = arr.join(" + "); 
// console.log("str : " + str );  // Google + Runoob + Taobao
// lastIndexOf(): 返回一个指定的字符串值最后出现的位置，在一个字符串中的指定位置从后向前搜索
// var index = [12, 5, 8, 130, 44].lastIndexOf(8); 
// var index = [12, 5, 8, 130, 8, 44].lastIndexOf(8); 
// console.log("index is : " + index );  // 2  // 4
// map(): 通过指定函数处理数组的每个元素，并返回处理后的数组
// var numbers = [1, 4, 9]; 
// var roots = numbers.map(Math.sqrt); 
// console.log("roots is : " + roots );  // 1,2,3
// pop(): 删除数组的最后一个元素并返回删除的元素
// var numbers = [1, 4, 9]; 
// var element = numbers.pop(); 
// console.log("element is : " + element );  // 9
// console.log("numbers is : " + numbers );  // 1,4
// element = numbers.pop(); 
// console.log("element is : " + element );  // 4
// console.log("numbers is : " + numbers );  // 1,4
// push(): 向数组的末尾添加一个或更多元素，并返回新的长度
// var numbers = new Array(1, 4, 9); 
// var length = numbers.push(10); 
// console.log("new numbers is : " + numbers );  // 1,4,9,10 
// console.log("new length is : " + length );  // 4
// length = numbers.push(20); 
// console.log("new numbers is : " + numbers );  // 1,4,9,10,20
// reduce(): 将数组元素计算为一个值（从左到右）
// var total = [0, 1, 2, 3].reduce(function(a, b){ return a + b; }); 
// console.log("total is : " + total );  // 6
// reduceRight(): 将数组元素计算为一个值（从右到左）
// var total = ["a", "b", "c", "d"].reduceRight(function(a, b){ return a + b; }); 
// console.log("total is : " + total );  // dcba
// reverse(): 反转数组的元素顺序
// const arr = [0, 1, 2, 3].reverse(); 
// console.log("Reversed array is: " + arr );  // 3,2,1,0
// shift(): 删除并返回数组的第一个元素
// var arr = [10, 1, 2, 3].shift(); 
// console.log("Shifted value is : " + arr );  // 10
// slice(): 选取数组的的一部分，并返回一个新数组
// var arr = ["orange", "mango", "banana", "sugar", "tea"]; 
// console.log("arr.slice( 1, 2) : " + arr.slice( 1, 2) );  // mango
// console.log("arr.slice( 1, 3) : " + arr.slice( 1, 3) );  // mango,banana
// some(): 检测数组元素中是否有元素符合指定条件
// function isBigEnough(element: number, index: number, array: number[]) { 
//    return (element >= 10); 
// } 
// var retval = [2, 5, 8, 1, 4].some(isBigEnough);
// console.log("Returned value is : " + retval );  // false
// var retval = [12, 5, 8, 1, 4].some(isBigEnough); 
// console.log("Returned value is : " + retval );  // true
// sort(): 对数组的元素进行排序
// var arr = new Array("orange", "mango", "banana", "sugar"); 
// var sorted = arr.sort(); 
// sorted = arr.reverse();
// console.log("Returned string is : " + sorted );  // banana,mango,orange,sugar  // sugar,orange,mango,banana
// splice(): 从数组中添加或删除元素
// var arr = ["orange", "mango", "banana", "sugar", "tea"];  
// var removed = arr.splice(2, 0, "water");  
// console.log("After adding 1: " + arr );    // orange,mango,water,banana,sugar,tea 
// console.log("removed is: " + removed); 
// removed = arr.splice(3, 1);  
// console.log("After removing 1: " + arr );  // orange,mango,water,sugar,tea 
// console.log("removed is: " + removed);  // banana
// toString(): 把数组转换为字符串，并返回结果
// var arr = new Array("orange", "mango", "banana", "sugar");         
// var str: string = arr.toString(); 
// console.log("Returned string is : " + str );  // orange,mango,banana,sugar
// unshift(): 向数组的开头添加一个或更多元素，并返回新的长度
// var arr = new Array("orange", "mango", "banana", "sugar"); 
// var length = arr.unshift("water"); 
// console.log("Returned array is : " + arr );  // water,orange,mango,banana,sugar 
// console.log("Length of the array is : " + length ); // 5
