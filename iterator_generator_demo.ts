// TypeScript 迭代器（对象）与生成器（函数）

// 概念说明：
// 迭代器是一个对象，它提供 next() 方法用于遍历数据
// 生成器是一种特殊的函数，可以在执行过程中暂停并返回一个值

// 数组默认可迭代
// const arr: number[] = [1, 2, 3, 4, 5];

// for (const item of arr) {
//     console.log(item);
// }

// for (var i = 0; i < arr.length; i++) {
//     var item = arr[i];
//     console.log(`Item[${i}]: ${item}`);
// }


// 字符串默认可迭代
// const str: string = "Hello, TypeScript!";

// for (const char of str) {
//     console.log(char);
// }

// for (var i = 0; i < str.length; i++) {
//     var char = str[i];
//     console.log(`Char[${i}]: ${char}`);
// }

// 说明：数组和字符串都内置实现了 Symbol.iterator 方法，所以可以直接使用 for...of 遍历

// 自定义可迭代对象
// 让普通对象实现 Symbol.iterator 接口，使其可被遍历
// 创建自定义可迭代对象：range
// const range = {
//     from: 1,
//     to: 5,
//     [Symbol.iterator]: function () {  // 实现 Symbol.iterator 方法
//         return {
//             current: this.from,
//             last: this.to,
//             next: function() {
//                 if (this.current <= this.last) {
//                     return { done: false, value: this.current++ };  // 未完成，返回当前值并递增
//                 }
//                 return { done: true, value: undefined };  // 已完成
//             }
//         };
//     }
// }

// 使用 for...of 遍历
// for (const num of range) {
//     console.log(num);  // 输出 1, 2, 3, 4, 5
// }

// for (var i = range.from; i <= range.to; i++) {
//     console.log(`Num[${i}]: ${i}`);
// }

// 迭代器协议：迭代器必须有一个 next() 方法，返回 { done: boolean, value: any } 格式的对象


// 生成器函数
// 使用 function* 语法创建生成器，使用 yield 暂停执行并返回值
// 生成器函数：使用 function* 语法
// function* numberGenerator() {
//     yield 1;  // 暂停并返回 1
//     yield 2;  // 暂停并返回 2
//     yield 3;  // 暂停并返回 3
// }

// 创建生成器实例
// const gen = numberGenerator();

// 使用 next() 方法获取值
// 每次调用 next() 都会执行到下一个 yield
// console.log("第一个: " + gen.next().value);
// console.log("第二个: " + gen.next().value);
// console.log("第三个: " + gen.next().value);
// console.log("完成: " + gen.next().done);

// 生成器：生成器函数会返回一个迭代器，每次调用 next() 都会执行到下一个 yield 语句

// function* rangeGenerator(from: number, to: number) {
//     for (let i = from; i <= to; i++) {
//         yield i;  // 暂停并返回当前值
//     }
// }

// 使用生成器函数创建迭代器
// const rangeGen = rangeGenerator(1, 5);

// for (const num of rangeGen) {
//     console.log(num);  // 输出 1, 2, 3, 4, 5
// }


// 无限生成器
// 生成器可以产生无限序列，由于是惰性求值，不会占用无限内存
// 无限数字生成器
// 每次调用只生成一个数字，不会一次性生成所有数字
// function* infiniteNumberGenerator() {
//     let num = 1;
//     while (true) {  // 无限循环
//         yield num++;  // 暂停并返回当前值，然后递增
//     }
// }

// 使用无限生成器
// const infiniteGen = infiniteNumberGenerator();
// console.log("第1个: " + infiniteGen.next().value);
// console.log("第2个: " + infiniteGen.next().value);
// console.log("第3个: " + infiniteGen.next().value);

// 只获取前5个数字
// const nums: number[] = [];
// const iterator = infiniteNumberGenerator();
// for (let i = 0; i < 5; i++) {
//     const result = iterator.next();  // 获取下一个值
//     if (result.done) {
//         break;  // 如果迭代器完成，退出循环
//     }
//     nums.push(result.value);  // 获取当前值并存入数组  
// }
// console.log("前5个数字: " + nums.join(", "));

// 惰性求值：生成器的最大优势是惰性求值，只有在调用 next() 时才会计算下一个值，非常适合处理无限序列


// 委托生成器
// 使用 yield* 委托另一个生成器或可迭代对象
// 第一个生成器
// function* gen1(): Generator<number, void, unknown> {
//     yield 1;
//     yield 2;
// }

// 第二个生成器
// function* gen2(): Generator<number, void, unknown> {
//     yield 3;
//     yield 4;
// }

// 组合生成器：使用 yield* 委托
// function* combinedGen(): Generator<number, void, unknown> {
//     yield* gen1();  // 委托 gen1
//     yield* gen2();  // 委托 gen2
// }


// 遍历组合生成器
// for (const num of combinedGen()) {
//     console.log(num);  // 输出 1, 2, 3, 4
// }

// for (var i = 1; i <= 4; i++) {
//     console.log(`Num[${i}]: ${i}`);
// }

// yield*：委托生成器可以组合多个生成器或可迭代对象，非常适合构建可复用的数据流


// TypeScript 生成器类型
// 生成器的类型注解使用 Generator 类型
// Generator<YieldType, ReturnType, RequestType>
// 生成器类型：Generator<yield类型, return类型, next参数类型>
function* idGenerator(): Generator<number, void, unknown> {
    let id = 1;
    while (id <= 5) {
        yield id++;  // 暂停并返回当前 id，然后递增, yield number 类型
    }
    return void 0;  // 返回 void 类型，可选
}

// 使用生成器
const idGen = idGenerator();
console.log(Array.from(idGen));  // 输出 [1, 2, 3, 4, 5]


// 类型说明：Generator<T, R, N> 表示：T 是 yield 的类型，R 是最终返回的类型，N 是 next() 参数的类型


// 注意事项
// 迭代器协议：实现 Symbol.iterator 返回带 next() 方法的对象
// 生成器语法：使用 function* 而非 function
// yield 关键字：暂停执行并返回值
// 惰性计算：生成器按需计算，不会一次性生成所有值

// 最佳实践：处理大数据流、无限序列或需要暂停/恢复的场景时，使用生成器