// TypeScript 接口
// 接口是一系列抽象方法的声明，是一些方法特征的集合
// 这些方法都应该是抽象的，需要由具体的类去实现
// 然后第三方就可以通过这组抽象方法调用，让具体的类执行具体的方法

// TypeScript 接口定义如下
// interface interface_name { 
// }

// 实例
// interface IPerson { 
//     firstName: string, 
//     lastName: string, 
//     sayHi: () => string
// } 
 
// const customer: IPerson = { 
//     firstName: "Tom",
//     lastName: "Hanks", 
//     sayHi: (): string => "Hi there"
// } 
 
// console.log("Customer 对象 ") 
// console.log(customer.firstName) 
// console.log(customer.lastName) 
// console.log(customer.sayHi())  
 
// const employee: IPerson = { 
//     firstName: "Jim",
//     lastName: "Blakes", 
//     sayHi: (): string => "Hello!!!" 
// } 
 
// console.log("Employee  对象 ") 
// console.log(employee.firstName) 
// console.log(employee.lastName)
// console.log(employee.sayHi())

// 需要注意接口不能转换为 JavaScript
// 它只是 TypeScript 的一部分

// 联合类型和接口
interface RunOptions { 
    program: string; 
    commandline: string | string[] | (()=>string); 
} 
 
// commandline 是字符串
// var options: RunOptions = {program: "test1", commandline: "Hello"}; 
// console.log(options.commandline)  
 
// // commandline 是字符串数组
// options = {program: "test1", commandline:["Hello", "World"]}; 
// console.log((options.commandline as string[])[0]); 
// console.log((options.commandline as string[])[1]);  
 
// // commandline 是一个函数表达式
// options = {program: "test1", commandline: ()=> "**Hello World**"}; 
 
// var fn: any = options.commandline; 
// console.log(fn());

// 接口和数组
// 接口中我们可以将数组的索引值和元素设置为不同类型，索引值可以是数字或字符串
// interface 设置数组类型及结构
// 设置索引为数字，元素为字符串类型 - 数组 array
// interface nameListArray {
//     [index: number]: string;
// }

// const listName: nameListArray = ["Tom", "Jack", "Mary"];
// console.log(listName);
// console.log(typeof listName);

// // const listName2: nameListArray = ["Tom", 2, "Jack", "Mary"];
// // error TS2322: Type 'number' is not assignable to type 'string'

// interface 设置数组类型及结构
// 设置索引为字符串类型，元素为数字类型 - 对象 object
// interface ages {
//     [index: string]: number;
// }
// const agelist: ages = { "Tom": 25, "Jack": 30, "Mary": 28 };
// console.log(agelist);
// console.log(typeof agelist);

// agelist["Tom"] = 26;
// console.log(agelist);

// 接口继承
// 接口继承就是说接口可以通过其他接口来扩展自己
// Typescript 允许接口继承多个接口
// 继承使用关键字 extends
// 单接口继承语法格式:
// Child_interface_name extends super_interface_name

// 多接口继承语法格式：
// Child_interface_name extends super_interface1_name, super_interface2_name,…,super_interfaceN_name
// 继承的各个接口使用逗号 , 分隔

// 单继承实例
// interface Person { 
//    age: number 
// } 
 
// interface Musician extends Person { 
//    instrument: string 
// } 
 
// // const drummer = <Musician>{}; 
// const drummer: Musician = new Object() as Musician;
// drummer.age = 27 
// drummer.instrument = "Drums" 
// console.log("年龄:  "+drummer.age)
// console.log("喜欢的乐器:  "+drummer.instrument)

// 多继承实例
interface IParent1 { 
    v1: number 
} 
 
interface IParent2 { 
    v2: number 
} 
 
interface Child extends IParent1, IParent2 {};
var Iobj: Child = { v1: 12, v2: 23};
console.log("value 1: "+Iobj.v1+" value 2: "+Iobj.v2)










