// TypeScript Map 对象

// Map 对象保存键值对，并且能够记住键的原始插入顺序
// 任何值(对象或者原始值) 都可以作为一个键或一个值
// Map 是 ES6 中引入的一种新的数据结构

// 创建 Map
// TypeScript 使用 Map 类型和 new 关键字来创建 Map
// let myMap = new Map()
// 初始化 Map，可以以数组的格式来传入键值对
// let myMap = new Map([
//         ["key1", "value1"],
//         ["key2", "value2"]
// ]);
// console.log(myMap); // 输出: Map(2) { 'key1' => 'value1', 'key2' => 'value2' }


// Map 相关的函数与属性：
// map.clear() – 移除 Map 对象的所有键/值对 
// map.set() – 设置键值对，返回该 Map 对象
// map.get() – 返回键对应的值，如果不存在，则返回 undefined
// map.has() – 返回一个布尔值，用于判断 Map 中是否包含键对应的值
// map.delete() – 删除 Map 中的元素，删除成功返回 true，失败返回 false
// map.size – 返回 Map 对象键/值对的数量
// map.keys() - 返回一个 Iterator 对象， 包含了 Map 对象中每个元素的键 
// map.values() – 返回一个新的Iterator对象，包含了Map对象中每个元素的值 
// map.entries() – 返回一个包含 Map 中所有键值对的迭代器 

// let myMap = new Map();
// // set(key: K, value: V): this - 向 Map 中添加或更新键值对
// myMap.set("key1", "value1");  // 向 Map 中添加或更新键值对
// console.log(myMap); // 输出: Map(1) { 'key1' => 'value1' }

// // get(key: K): V | undefined - 根据键获取值，如果键不存在则返回 undefined
// // get() 根据键获取值，如果键不存在则返回 undefined
// console.log(myMap.get("key1")); // 输出: value1
// console.log(myMap.get("key2")); // 输出: undefined

// // has(key: K): boolean - 检查 Map 中是否存在指定的键
// // has() 判断 Map 中是否存在某个键
// console.log(myMap.has("key1")); // 输出: true
// console.log(myMap.has("key2")); // 输出: false

// // delete(key: K): boolean - 删除指定键的键值对，成功删除返回 true，否则返回 false
// console.log(myMap.delete("key1")); // 输出: true
// console.log(myMap.delete("key2")); // 输出: false

// // clear(): void - 清空 Map 中的所有键值对
// myMap.clear(); // 清空 Map 中的所有键值对
// // size: number - 返回 Map 中键值对的数量
// console.log(myMap.size); // 输出: 0
// console.log(myMap); // 输出: Map(0) {}

// 迭代方法
// keys(): IterableIterator<K> - 返回一个包含 Map 中所有键的迭代器
// const myMap = new Map([
//     ["key1", "value1"],
//     ["key2", "value2"],
//     ["key3", "value3"],
//     ["key4", "value4"],
//     ["key5", "value5"]
// ]);

// // keys(): IterableIterator<K> - 返回一个包含 Map 中所有键的迭代器
// for (const key of myMap.keys()) {
//     console.log(key); // 输出: key1, key2, key3, key4, key5
// }

// // values(): IterableIterator<V> - 返回一个包含 Map 中所有值的迭代器
// for (const value of myMap.values()) {
//     console.log(value); // 输出: value1, value2, value3, value4, value5
// }

// // entries(): IterableIterator<[K, V]> - 返回一个包含 Map 中所有键值对的迭代器，每个元素是一个 [key, value] 数组
// for (const [key, value] of myMap.entries()) {  // destructuring assignment 解构赋值
//     console.log(`${key}: ${value}`); // 输出: key1: value1, key2: value2, key3: value3, key4: value4, key5: value5
// }

// // forEach(callbackfn: (value: V, key: K, map: Map<K, V>) => void, thisArg?: any): void
// // 对 Map 中的每个键值对执行一次提供的回调函数
// myMap.forEach((value, key) => {
//     console.log(`${key}: ${value}`); // 输出: key1: value1, key2: value2, key3: value3, key4: value4, key5: value5
// });

// const map = new Map<string, number>();  // type annotation for a Map with string keys and number values

// map.set('one', 1);
// map.set('two', 2);

// console.log(map.get('one')); // 输出: 1

// console.log(map.has('two')); // 输出: true

// map.delete('one');

// console.log(map.size); // 输出: 1

// map.forEach((value, key) => {
//   console.log(key, value); // 输出: two 2
// });

// map.clear();

// console.log(map.size); // 输出: 0


// let nameSiteMapping = new Map<string, number>();
 
// // 设置 Map 对象
// nameSiteMapping.set("Google", 1);
// nameSiteMapping.set("Runoob", 2);
// nameSiteMapping.set("Taobao", 3);
 
// 获取键对应的值
// console.log(nameSiteMapping.get("Runoob"));     // 2
 
// // 判断 Map 中是否包含键对应的值
// console.log(nameSiteMapping.has("Taobao"));       // true
// console.log(nameSiteMapping.has("Zhihu"));        // false
 
// // 返回 Map 对象键/值对的数量
// console.log(nameSiteMapping.size);                // 3
 
// // 删除 Runoob
// console.log(nameSiteMapping.delete("Runoob"));    // true
// console.log(nameSiteMapping);
// // 移除 Map 对象的所有键/值对
// nameSiteMapping.clear();             // 清除 Map
// console.log(nameSiteMapping);

// 迭代 Map
// Map 对象中的元素是按顺序插入的，我们可以迭代 Map 对象，每一次迭代返回 [key, value] 数组
// TypeScript使用 for...of 来实现迭代：
// let nameSiteMapping = new Map<string, number>();
 
// nameSiteMapping.set("Google", 1);
// nameSiteMapping.set("Runoob", 2);
// nameSiteMapping.set("Taobao", 3);
 
// 迭代 Map 中的 key
// for (let key of nameSiteMapping.keys()) {
//     console.log(key);  // 输出: Google, Runoob, Taobao               
// }
 
// // 迭代 Map 中的 value
// for (let value of nameSiteMapping.values()) {
//     console.log(value); // 输出: 1, 2, 3               
// }
 
// // 迭代 Map 中的 key => value
// for (let entry of nameSiteMapping.entries()) {
//     console.log(entry[0], entry[1]);   
// }
 
// // 使用对象解析
// for (let [key, value] of nameSiteMapping) {
//     console.log(key, value);            
// }


// ES6 Map 与 Set
// Map 对象
// Map 对象保存键值对。任何值(对象或者原始值) 都可以作为一个键或一个值
// Maps 和 Objects 的区别
// 一个 Object 的键只能是字符串或者 Symbols，但一个 Map 的键可以是任意值
// Map 中的键值是有序的（FIFO 原则），而添加到对象中的键则不是
// Map 的键值对个数可以从 size 属性获取，而 Object 的键值对个数只能手动计算
// Object 都有自己的原型，原型链上的键名有可能和你自己在对象上的设置的键名产生冲突

// Map 中的 key
// key 是字符串
// var myMap = new Map<string, string>();
// var keyString = "a string"; 
 
// myMap.set(keyString, "和键'a string'关联的值");
 
// console.log(myMap.get(keyString));    // "和键'a string'关联的值"
// console.log(myMap.get("a string"));   // "和键'a string'关联的值"  // 因为 keyString === 'a string'

// key 是对象
// var myMap = new Map<object, string>();
// var keyObj: object = {};
// console.log(keyObj === {}); // false, 因为 {} !== keyObj
// // This condition will always return 'false' since JavaScript compares objects by reference, not value
 
// myMap.set(keyObj, "和键 keyObj 关联的值");

// console.log(myMap.get(keyObj)); // "和键 keyObj 关联的值"
// console.log(myMap.get({})); // undefined, 因为 keyObj !== {}

// key 是函数
// var myMap = new Map<Function, string>();
// var keyFunc: () => void = function () {}; // 函数
// console.log(keyFunc === function() {}); // false, 因为 function() {} !== keyFunc
// // error TS2839: This condition will always return 'false' since JavaScript compares objects by reference, not value
 
// myMap.set(keyFunc, "和键 keyFunc 关联的值");
 
// console.log(myMap.get(keyFunc)); // "和键 keyFunc 关联的值"
// console.log(myMap.get(function() {})); // undefined, 因为 keyFunc !== function () {}


// key 是 NaN
// var myMap = new Map<number, string>();

// myMap.set(NaN, "not a number");
 
// console.log(myMap.get(NaN)); // "not a number"
 
// var otherNaN = Number("foo");
// console.log(myMap.get(otherNaN)); // "not a number"

// // 虽然 NaN 和任何值甚至和自己都不相等(NaN !== NaN 返回true)，NaN作为Map的键来说是没有区别的
// console.log(NaN === NaN); // false
// // error TS2845: This condition will always return 'false'


// Map 的迭代
// 对 Map 进行遍历，以下两个最高级
// var myMap = new Map<number, string>();
// myMap.set(0, "zero");
// myMap.set(1, "one");
 
// // 将会显示两个 log。 一个是 "0 = zero" 另一个是 "1 = one"
// for (var [key, value] of myMap) {
//   console.log(key + " = " + value);
// }
// for (var [key, value] of myMap.entries()) {
//   console.log(key + " = " + value);
// }
// /* 这个 entries 方法返回一个新的 Iterator 对象，它按插入顺序包含了 Map 对象中每个元素的 [key, value] 数组。 */
 
// // 将会显示两个log。 一个是 "0" 另一个是 "1"
// for (var key of myMap.keys()) {
//   console.log(key);
// }
// /* 这个 keys 方法返回一个新的 Iterator 对象， 它按插入顺序包含了 Map 对象中每个元素的键。 */
 
// // 将会显示两个log。 一个是 "zero" 另一个是 "one"
// for (var value of myMap.values()) {
//   console.log(value);
// }
// /* 这个 values 方法返回一个新的 Iterator 对象，它按插入顺序包含了 Map 对象中每个元素的值。 */

// var myMap = new Map<number, string>();
// myMap.set(0, "zero");
// myMap.set(1, "one");
 
// // 将会显示两个 logs。 一个是 "0 = zero" 另一个是 "1 = one"
// myMap.forEach(function(value, key) {
//   console.log(key + " = " + value);
// // });
// }, this);
// // 这个 thisArg 参数是可选的。 如果提供了这个参数， 它将会作为 callback 函数的 this 值
// // 如果没有提供这个参数， callback 函数的 this 值为 undefined

// Map 与 Array的转换
// Map 构造函数可以将一个二维键值对数组转换成一个 Map 对象
// var kvArray: [string, string][] = [["key1", "value1"], ["key2", "value2"]];
 
// // Map 构造函数可以将一个 二维 键值对数组转换成一个 Map 对象
// var myMap: Map<string, string> = new Map(kvArray);
 
// // 使用 Array.from 函数可以将一个 Map 对象转换成一个二维键值对数组
// var outArray: [string, string][] = Array.from(myMap);

// Map 的克隆
// var myMap1 = new Map([["key1", "value1"], ["key2", "value2"]]);
// var myMap2 = new Map(myMap1);
 
// console.log(myMap1 === myMap2); 
// 打印 false。 Map 对象构造函数生成实例，迭代出新的对象


// Map 的合并
// var first = new Map([[1, 'one'], [2, 'two'], [3, 'three']]);
// var second = new Map([[1, 'uno'], [2, 'dos']]);
 
// // 合并两个 Map 对象时，如果有重复的键值，则后面的会覆盖前面的，对应值即 uno，dos， three
// var merged = new Map([...first, ...second]);
// console.log(merged);
// ... 展开运算符（Spread Operator）, 它的作用是：
// 展开（拆开）一个可迭代对象（iterable）中的元素
// 三个点 ... 有两个用途：
// 展开运算符 Spread
// 剩余参数 Rest Parameter

// Set 对象
// Set 对象允许你存储任何类型的唯一值，无论是原始值或者是对象引用
// Set 对象存储的值总是唯一的，所以需要判断两个值是否恒等。有几个特殊值需要特殊对待：
// +0 与 -0 在存储判断唯一性的时候是恒等的，所以不重复
// undefined 与 undefined 是恒等的，所以不重复
// NaN 与 NaN 是不恒等的，但是在 Set 中只能存一个，不重复
// let mySet = new Set<any>();
 
// mySet.add(1); // Set(1) {1}
// mySet.add(5); // Set(2) {1, 5}
// mySet.add(5); // Set(2) {1, 5} 这里体现了值的唯一性
// mySet.add("some text"); 
// // Set(3) {1, 5, "some text"} 这里体现了类型的多样性
// var o = {a: 1, b: 2}; 
// mySet.add(o);
// mySet.add({a: 1, b: 2}); 
// // console.log(o === {a: 1, b: 2}); // false, 因为对象是引用类型，两个对象的引用不同，所以不恒等
// console.log(mySet);
// // Set(5) {1, 5, "some text", {…}, {…}} 
// // 这里体现了对象之间引用不同不恒等，即使值相同，Set 也能存储
// mySet.add(NaN);
// mySet.add(NaN);
// console.log(mySet);  // one NaN is stored, because Set treats NaN as the same value

// 类型转换
// Array 转 Set
// var mySet = new Set<string>(["value1", "value2", "value3"]);
// console.log(mySet); // 输出: Set(3) { 'value1', 'value2', 'value3' }
// 用...操作符，将 Set 转 Array
// ... spread operator 展开运算符
// 也可以使用 Array.from(mySet) 来将 Set 转换为 Array
// var myArray = [...mySet];
// var myArray = Array.from(mySet);
// console.log(myArray); // 输出: [ 'value1', 'value2', 'value3' ]

// String 转 Set
// const myString = new String("hello");
// var mySet = new Set(myString);  // Set(4) {"h", "e", "l", "o"}
// const mySet = new Set('hello');
// console.log(mySet); // 输出: Set(4) { 'h', 'e', 'l', 'o' }
// 注：Set 中 toString 方法是不能将 Set 转换成 String

// Set 对象作用
// 数组去重
// var mySet = new Set([1, 2, 3, 4, 4]);
// console.log([...mySet]); // [1, 2, 3, 4]

// 并集
// var a = new Set([1, 2, 3]);
// var b = new Set([4, 3, 2]);
// var union = new Set([...a, ...b]); // {1, 2, 3, 4}
// console.log(union); // 输出: Set(4) { 1, 2, 3, 4 }

// 交集
// var a = new Set([1, 2, 3]);
// var b = new Set([4, 3, 2]);
// var intersect = new Set([...a].filter(x => b.has(x))); // {2, 3}
// console.log(intersect); // 输出: Set(2) { 2, 3 }


// 差集
// var a = new Set([1, 2, 3]);
// var b = new Set([4, 3, 2]);
// var intersect = new Set([...a].filter(x => !b.has(x))); // {1}
// console.log(intersect); // 输出: Set(1) { 1 }