// TypeScript 联合类型

// 联合类型（Union Types）可以通过管道(|)将变量设置为多种类型

// 联合类型的语法格式
// Type1 | Type2 | Type3 

// 实例
// let val: string | number 
// val = 12 
// console.log("数字为 "+ val) 
// val = "Runoob" 
// console.log("字符串为 " + val)
// val = true // 报错  error TS2322: Type 'boolean' is not assignable to type 'string | number'

// 也可以将联合类型作为函数参数使用
// function disp(name: string | string[]): void { 
//         if(typeof name == "string") { 
//             console.log(name) 
//         } else { 
//             for(let i = 0; i<name.length; i++) { 
//                  console.log(name[i])
//             } 
//         } 
// } 
// disp("Runoob") 
// console.log("输出数组....") 
// disp(["Runoob","Google","Taobao","Facebook"])


// 联合类型数组
// let arr: number[] | string[]; 
// let i: number; 
// arr = [1,2,4] 
// console.log("**数字数组**")  
 
// for(i=0; i<arr.length; i++) { 
//    console.log(arr[i]) 
// }  
 
// arr = ["Runoob", "Google", "Taobao"] 
// console.log("**字符串数组**")  
 
// for(i=0; i<arr.length; i++) { 
//    console.log(arr[i]) 
// }





























