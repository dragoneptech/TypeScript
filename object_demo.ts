// TypeScript 对象

// 对象(object)是包含一组键值对(key-value pair)的实例
// 值可以是标量、函数、数组、对象等
// 对象的键只能是字符串、Symbol

// const object_name = { 
//     key1: "value1", // 标量
//     key2: "value",  
//     key3: function() {
//         // 函数
//         console.log("This is a function in an object");
//     }, 
//     key4: ["content1", "content2"] // 数组
// }

// console.log(JSON.stringify(object_name)); // 将对象转换为 JSON 字符串; 无法显示函数


// 对象实例
// const sites = { 
//    site1: "Runoob", 
//    site2: "Google" 
// }; 
// // 访问对象的值
// console.log(sites.site1) 
// console.log(sites.site2)

// TypeScript 类型模板

// 假如我们在 JavaScript 定义了一个对象
// const sites = { 
//    site1: "Runoob", 
//    site2: "Google" 
// };
// // 这时如果我们想在对象中添加方法，可以做以下修改
// sites.sayHello = function(){
//     return "hello";
// };
// 如果在 TypeScript 中使用以上方式则会出现编译错误，因为Typescript 中的对象必须是特定类型的实例
// error TS2339: Property 'sayHello' does not exist on type '{ site1: string; site2: string; }'

// interface Sites {
//     site1: string;
//     site2: string;
//     sayHello: () => string; // 必选属性
//     // sayHello?: () => string; // 可选属性
//     // sayHello!: () => string; // 非空断言操作符，表示该属性在对象中一定存在, 失败
// }

// const sites: Partial<Sites> = { 
//    site1: "Runoob", 
//    site2: "Google" 
// };
// // 这时如果我们想在对象中添加方法，可以做以下修改
// sites.sayHello = function(){
//     return "hello";
// };


// const sites = {
//     site1: "Runoob",
//     site2: "Google",
//     sayHello: function () { } // 类型模板
// };
// sites.sayHello = function () {
//     console.log("hello " + sites.site1);
// };
// sites.sayHello();

// 对象也可以作为一个参数传递给函数

// const sites = { 
//     site1:"Runoob", 
//     site2:"Google"
// }; 
// const invokesites = function(obj: { site1: string, site2: string }) { 
//     console.log("site1 :"+obj.site1) 
//     console.log("site2 :"+obj.site2) 
// } 
// invokesites(sites)


// 鸭子类型(Duck Typing)
// 鸭子类型（英语：duck typing）是动态类型的一种风格，是多态(polymorphism)的一种形式
// 在这种风格中，一个对象有效的语义，不是由继承自特定的类或实现特定的接口，而是由"当前方法和属性的集合"决定

// 可以这样表述：
// "当看到一只鸟走起来像鸭子、游泳起来像鸭子、叫起来也像鸭子，那么这只鸟就可以被称为鸭子。"

// 在鸭子类型中，关注点在于对象的行为能做什么，而不是关注对象所属的类型
// 例如，在不使用鸭子类型的语言中，我们可以编写一个函数，它接受一个类型为"鸭子"的对象，
// 并调用它的"走"和"叫"方法
// 
// 在使用鸭子类型的语言中，这样的一个函数可以接受一个任意类型的对象，并调用它的"走"和"叫"方法
// 
// 如果这些需要被调用的方法不存在，那么将引发一个运行时错误
// 任何拥有这样的正确的"走"和"叫"方法的对象都可被函数接受的这种行为引出了以上表述，这种决定类型的方式因此得名

// interface IPoint { 
//     x: number; 
//     y: number; 
// } 

// function addPoints(p1: IPoint, p2: IPoint): IPoint { 
//     const x = p1.x + p2.x 
//     const y = p1.y + p2.y 
//     return {x: x, y: y} 
// } 
 
// // 正确
// const newPoint = addPoints({x: 3, y: 4},{x: 5, y: 1});
// console.log(newPoint) // { x: 8, y: 5 }
 
// // 错误 
// // const newPoint2 = addPoints({x: 1}, {x: 4,y: 3});

// 以上代码中，采用了非鸭子类型的方式，要求传入的参数必须是 IPoint 类型的实例
// 但是在实际开发中，我们可能会遇到这样的情况：
// 我们希望传入的参数只要有 x 和 y 属性即可，而不要求它们是 IPoint 类型的实例
// 这时我们就可以使用鸭子类型来实现


// 鸭子类型的实现方式是使用 any 类型来定义参数类型
function addPoints(p1: any, p2: any): any {
    const x = p1.x + p2.x;
    const y = p1.y + p2.y;
    return { x: x, y: y };
}
const newPoint = addPoints({x: 3, y: 4},{x: 5, y: 1});
console.log(newPoint) // { x: 8, y: 5 }

const newPoint2 = addPoints({x: 1}, {x: 4,y: 3});
console.log(newPoint2) // { x: 5, y: NaN }

const newPoint3 = addPoints({x: 1, y: 2, z: 3}, {x: 4,y: 3});
console.log(newPoint3) // { x: 5, y: 5 }







