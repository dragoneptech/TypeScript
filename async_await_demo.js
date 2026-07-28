"use strict";
// TypeScript async/await 异步编程
// async/await 是 ES2017 引入的异步编程语法糖，让异步代码看起来像同步代码
// Promise 方式 / async/await 方式
// 优势对比
// ✓ 代码更简洁 ✓ 同步风格 ✓ 更好的错误堆栈 ✓ 易于调试 ✓ try/catch 处理
// Promise 基础
// Promise 是 ES6 引入的异步编程解决方案，表示一个异步操作的最终完成（或失败）及其结果值的表示
// Promise 有三种状态：pending（进行中）、fulfilled（已成功）和 rejected（已失败）
// Promise 的基本用法
// 创建一个 Promise 对象
// const promise: Promise<string> = new Promise(function(resolve, reject) {
//     // 模拟异步操作
//     // const success = true; // 模拟操作成功或失败
//     const success = Math.random() > 0.5; // 随机模拟操作成功或失败
//     if (success) {
//         resolve('操作成功');
//     } else {
//         reject('操作失败');
//     };
// });
// 使用 then 和 catch 处理 Promise 的结果
// promise.then(function(result) {
//     console.log(`Promise 成功: ${result}`);
// }).catch(function(error) {
//     console.error(`Promise 失败: ${error}`);
// });
// 使用 then 处理异步操作成功和失败的回调函数
// promise.then(function(result) {
//     console.log(`Promise 成功: ${result}`);
// }, function(error) {
//     console.error(`Promise 失败: ${error}`);
// });
// 使用 then chaining 处理多个异步操作
// promise.then(function(result) {
//     console.log(`Promise 成功: ${result}`);
// }).catch(function(error) {
//     console.error(`Promise 失败: ${error}`);
// }).finally(function() {
//     console.log('Promise 操作完成');
// });
// async/await 处理 Promise 的结果
// async 函数返回一个 Promise 对象，await 用于等待 Promise 的结果
// async function asyncFunction() {
//     try {
//         const result = await promise;
//         console.log(`async/await 成功: ${result}`);
//     } catch (error) {
//         console.error(`async/await 失败: ${error}`);
//     }
// }
// asyncFunction();
// async/await type annotation
// async function asyncFunction(): Promise<void> {
//     try {
//         const result = await promise;
//         console.log(`async/await 成功: ${result}`);
//     } catch (error) {
//         console.error(`async/await 失败: ${error}`);
//     }
// }
// asyncFunction();
// async 函数
// 使用 async 关键字声明异步函数
// async 函数自动返回 Promise
// async function greet(): Promise<string> {
//     return 'Hello, World!';
// }
// greet().then(function(result) {
//     console.log(`async 函数返回: ${result}`);
// }).catch(function(error) {
//     console.error(`async 函数失败: ${error}`);
// });
// 异步函数返回 Promise
// interface User {
//     name: string;
//     age: number;
// }
// async function getData(): Promise<User> {
//     // 模拟异步操作，返回一个 Promise 对象
//     return {name: 'Alice', age: 30};
// }
// getData().then(function(data) {
//     console.log(`获取数据成功: ${data.name}, ${data.age}`);
//     console.log(`获取数据成功: ${JSON.stringify(data)}`);
// }).catch(function(error) {
//     console.error(`获取数据失败: ${error}`);
// });
// await 关键字
// await 等待 Promise 完成并获取结果
// 模拟异步操作
// function delay(ms: number): Promise<string> {
//     return new Promise(function(resolve, reject) {
//         setTimeout(function() {
//             resolve(`延迟 ${ms} 毫秒后完成`);
//         }, ms);
//         // reject(`延迟 ${ms} 毫秒后失败`);
//     });
// }
// async function main() {
//     console.log('开始异步操作');
//     try {
//         const result = await delay(2000);
//         console.log(`异步操作成功: ${result}`);
//     } catch (error) {
//         console.error(`异步操作失败: ${error}`);
//     }
//     console.log('异步操作结束');
// }
// main();
// 错误处理
// 使用 try/catch 处理异步错误
// function mayFail(shouldFail: boolean): Promise<string> {
//     return new Promise(function(resolve, reject) {
//         if (shouldFail) {
//             reject(new Error('操作失败'));
//         } else {
//             resolve('操作成功');
//         };
//     });
// }
// async function handleError() {
//     try {
//         const result = await mayFail(true);
//         console.log(`异步操作成功: ${result}`);
//     } catch (error) {
//         if (error instanceof Error) {  // 类型守卫（Type Guard）
//             console.error(`异步操作失败，捕获错误: ${error.message}`);
//         } else {
//             console.error(`异步操作失败，捕获未知错误: ${error}`);
//         }
//     } finally {
//         console.log('异步操作结束');
//     }
// }
// handleError();
// 并行执行
// 使用 Promise.all 并行执行多个异步操作
// function fetchUser(id: number): Promise<{id: number, name: string}> {
//     return Promise.resolve({id: id, name: `User${id}`});
// }
// async function main() {
//     // 串行执行
//     console.time('串行执行耗时');
//     console.log('开始串行执行');
//     const user1 = await fetchUser(1);
//     const user2 = await fetchUser(2);
//     console.log(`串行执行结果: ${JSON.stringify(user1)}, ${JSON.stringify(user2)}`);
//     console.timeEnd('串行执行耗时');
//     console.log('串行执行结束');
//     console.log('--------------------');
//     // 并行执行
//     console.time('并行执行耗时');
//     console.log('开始并行执行');
//     // const [user3, user4] = await Promise.all([fetchUser(3), fetchUser(4)]);
//     // console.log(`并行执行结果: ${JSON.stringify(user3)}, ${JSON.stringify(user4)}`);
//     const results = await Promise.all([fetchUser(3), fetchUser(4)]);
//     console.log(`并行执行结果: ${JSON.stringify(results[0])}, ${JSON.stringify(results[1])}`);
//     console.timeEnd('并行执行耗时');
//     console.log('并行执行结束');
// }
// main();
// async/await 相比 Promise 的优势
// 代码更简洁、更易读
// 同步代码风格
// 更好的错误堆栈
// 易于调试
// 总结
// async：声明异步函数
// await：等待 Promise
// 错误处理：try/catch
// 并行：Promise.all
