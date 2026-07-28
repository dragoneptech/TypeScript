// TypeScript Promise 详解

// Promise 是 JavaScript 异步编程的基础，TypeScript 对 Promise 有完整的类型支持
// 通过泛型参数，可以精确地指定 Promise 解决值(resolve)和拒绝值(reject)的类型

// 为什么需要 Promise
// 在 JavaScript 中，很多操作是异步的，如网络请求、文件读取、定时器等
// Promise 提供了统一的异步编程接口，让异步代码更容易编写和管理
// TypeScript 通过泛型支持，让 Promise 的类型安全得到了保障

// 概念说明：Promise 是一个对象，表示一个异步操作的最终结果。它有三种状态：
// pending（进行中）
// fulfilled（已成功）
// rejected（已失败）

// 创建 Promise
// 使用 Promise 构造函数创建 Promise，传入执行器函数
// 创建 Promise，使用泛型指定解决值的类型
// Promise<string> 表示成功时返回字符串
// const promise: Promise<string> = new Promise(function(resolve, reject) {
//     // 模拟一个异步操作
//     // const success = true; // 模拟操作结果
//     const success = Math.random() > 0.5; // 随机模拟操作结果
//     if (success) {
//         resolve("操作成功");  // 调用 resolve 表示操作成功，传入结果值
//     } else {
//         reject(new Error("操作失败"));  // 调用 reject 表示操作失败，传入错误
//     };
// });

// 使用 then 处理成功情况
// promise.then((result: string) => {
//     console.log("成功结果:", result);
// }).catch((error: Error) => {
//     console.error("失败原因:", error.message);
// });

// promise.then((result: string) => {
//     console.log("成功结果:", result);
// }).catch((error) => {
//     if (error instanceof Error) {  // 判断 error 是否为 Error 类型, Type Guards 类型守卫
//         console.error("失败原因:", error.message);
//     } else {
//         console.error("失败原因:", error);
//     }
// });

// 泛型说明：Promise<T> 中的 T 是 Promise 成功解决时（resolve）的值的类型
// 这让 TypeScript 能够推断返回值的类型


// Promise 链式调用
// Promise chaining
// then 和 catch 方法返回新的 Promise，可以链式调用
// async 函数也返回 Promise，可以与 then 和 catch 结合使用
// 链式调用：每个 then 返回新的值，被下一个 then 接收
// const promise = Promise.resolve(1)  // 创建一个立即解决的 Promise，值为 1
// .then(function(value: number) {
//     console.log("第一个 then:", value);  // 第一个 then，value = 1
//     return value * 2;  // 返回一个新的值 2
// })
// .then(function(value: number) {
//     console.log("第二个 then:", value);  // 第二个 then，value = 2
//     return value + 10;  // 返回一个新的值 12
// })
// .then(function(value: number) {
//     console.log("第三个 then:", value);  // 第三个 then，value = 12
//     console.log("最终结果:", value);  // 输出最终结果 12
//     return value;  // 返回最终结果
// })
// .catch(function(error: Error) {
//     console.error("失败原因:", error.message);
// });

// console.log("Promise 链式调用: ", promise);  // 输出 Promise 链式调用的最终 Promise 对象

// 链式调用：每个 then 会返回一个新的 Promise，这允许我们按顺序执行多个异步操作

// Promise.all
// Promise.all 等待所有 Promise 完成，返回一个包含所有结果的数组
// 创建三个 Promise
// const p1 = Promise.resolve(1);  // 立即解决的 Promise，值为 1
// const p2 = Promise.resolve(2);  // 立即解决的 Promise，值为 2
// const p3 = Promise.resolve(3);  // 立即解决的 Promise，值为 3

// Promise.all 等待所有 Promise 完成
// 返回一个数组，包含所有 Promise 的结果
// Promise.all([p1, p2, p3]).then((results: number[]) => {
//     console.log("Promise.all 结果:", results);  // 输出 [1, 2, 3]
//     // 计算总和
//     console.log("总和:", results.reduce((sum, value) => sum + value, 0));  // 输出总和 6
// }).catch((error: Error) => {
//     console.error("Promise.all 失败原因:", error.message);
// });

// 注意：如果任何一个 Promise 失败，Promise.all 会立即 rejection，不会等待其他 Promise 完成


// Promise.race
// Promise.race 返回最先完成（无论成功或失败）的 Promise 的结果
// 创建三个不同延迟的 Promise
// const p1: Promise<string> = new Promise((resolve) => setTimeout(() => resolve("p1 完成"), 100));
// const p2: Promise<string> = new Promise((resolve) => setTimeout(() => resolve("p2 完成"), 50));
// const p3: Promise<string> = new Promise((resolve) => setTimeout(() => resolve("p3 完成"), 30));

// // Promise.race 返回最先完成的 Promise 的结果
// Promise.race([p1, p2, p3]).then((result) => {
//     console.log("Promise.race 最先完成的结果:", result);  // 输出 "p3 完成"
// }).catch((error: Error) => {
//     console.error("Promise.race 失败原因:", error.message);
// });

// 应用场景：Promise.race 常用于实现超时功能：把一个长时间操作的 Promise 和一个超时 Promise 竞争

// Promise.allSettled
// Promise.allSettled 等待所有 Promise 结束（无论成功或失败），返回每个 Promise 的状态和结果
// Promise.all vs Promise.allSettled 的区别：
// Promise.all 只要有一个 Promise 失败就会立即 rejection
// 而 Promise.allSettled 会等待所有 Promise 完成，并返回每个 Promise 的状态和结果
// 创建三个 Promise，其中一个会失败
// const p1: Promise<string> = Promise.resolve("p1 成功");
// const p2: Promise<string> = Promise.reject(new Error("p2 失败"));
// const p3: Promise<string> = Promise.resolve("p3 成功");

// Promise.allSettled 等待所有 Promise 结束
// 返回每个 Promise 的状态和值/reason
// Promise.allSettled([p1, p2, p3]).then((results) => {
//     results.forEach((result, index) => {
//         if (result.status === "fulfilled") {
//             console.log(`Promise ${index} 成功:`, result.value);
//         } else {
//             console.error(`Promise ${index} 失败:`, result.reason.message);
//         }
//     });
// }).catch((error: Error) => {
//     console.error("Promise.allSettled 失败原因:", error.message);
// });

// Promise.allSettled([p1, p2, p3]).then((results) => {
//     results.forEach((result, index) => {
//         if (result.status === "fulfilled") {
//             console.log(`Promise ${index} 成功:`, result.value);
//         } else {
//             console.error(`Promise ${index} 失败:`, result.reason.message);
//         }
//     });
// });

// 区别：Promise.all 会在第一个失败时立即停止；Promise.allSettled 会等待所有 Promise 结束

// Promise 类型注解
// TypeScript 的泛型支持让 Promise 的类型声明变得精确
// 定义返回 Promise 的函数
// Promise<{ name: string; age: number }> 指定了返回的用户对象类型
// interface User {
//     name: string;
//     age: number;
// }
// function getUser(): Promise<User> {
function getUser(): Promise<{ name: string; age: number }> {
    return Promise.resolve({ name: "Alice", age: 30 });
}

// async 函数：隐式返回 Promise
async function main() {
    try {
        // await 会自动推断 user 的类型
        const user = await getUser();  // 使用 await 获取 Promise 的结果
        console.log("用户信息:", JSON.stringify(user));  // 输出用户信息
    } catch (error) {
        if (error instanceof Error) {
            console.error("获取用户信息失败:", error.message);
        } else {
            console.error("获取用户信息失败:", error);
        }
    }
}

// 调用 main 函数
main();

// 类型推断：TypeScript 会根据泛型参数自动推断 Promise 的返回类型，这让我们在 async/await 中也能获得完整的类型提示

// 注意事项
// 泛型参数：始终为 Promise 指定泛型参数，明确 resolve 的返回类型
// 错误处理：记得使用 catch 处理 Promise 失败的情况
// all vs allSettled：需要全部结果时用 allSettled，需要快速失败时用 all
// async/await：现代代码推荐使用 async/await，语法更简洁
// 最佳实践：优先使用 async/await 语法，它本质上还是基于 Promise，但写起来像同步代码


// 总结
// Promise 是 TypeScript 异步编程的核心

// Promise：异步操作容器，有 pending/fulfilled/rejected 三种状态
// then/catch：链式处理异步结果
// Promise.all：等待全部完成，任一失败则整体失败
// Promise.race：返回最先完成的结果
// Promise.allSettled：等待全部结束，返回每个的状态

// 建议：使用 async/await 语法配合 Promise，让异步代码既类型安全又易于阅读



