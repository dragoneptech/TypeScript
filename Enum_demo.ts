// TypeScript 枚举（Enum）

// 枚举（Enum）是 TypeScript 中非常有用的特性，它允许我们定义一组命名常量
// 枚举可以使得代码更易读、更易维护，可以用有意义的名称替代"魔术数字"

// 数字枚举
// numeric enums are the default in TypeScript
// Each member of the enum has a numeric value, starting from 0 by default
// enum Direction {
//     Up,    // 0
//     Down,  // 1
//     Left,  // 2
//     Right  // 3
// }

// const dir: Direction = Direction.Up;
// console.log("方向: " + dir);
// console.log("方向名称: " + Direction[0]);

// 手动赋值
// 可以手动为枚举成员指定值
// enum Status {
//     Success = 1,
//     Error = 2,
//     Pending = 3
// }

// console.log("状态: " + Status.Success);
// console.log("状态名称: " + Status[1]);

// 字符串枚举
// 字符串枚举每个成员都必须有字符串字面量值
// enum Message {
//     Success = "SUCCESS",
//     Error = "ERROR",
//     Warning = "WARNING"
// }

// console.log("消息: " + Message.Success);
// console.log("消息名称: " + Message["Success"]);

// 常量枚举
// 使用 const 修饰的枚举会在编译时内联，生成更优化的代码
// const enum Color {
//     Red = "RED",
//     Green = "GREEN",
//     Blue = "BLUE"
// }

// const favoriteColor: Color = Color.Red;
// console.log("喜欢的颜色: " + favoriteColor);
// console.log("颜色名称: " + Color.Red);
// console.log("颜色名称: " + Color["Green"]); // 访问枚举成员的名称


// 异构枚举
// 枚举可以混合数字和字符串值，但不推荐使用
// enum BooleanLikeHeterogeneousEnum {
//     No = 0,
//     Yes = "YES"
// }

// console.log("值: " + BooleanLikeHeterogeneousEnum.No);
// console.log("字符串值: " + BooleanLikeHeterogeneousEnum.Yes);

// 枚举成员类型
// 当枚举成员都是字面量值时，成员类型可以作为类型使用
// enum ShapeKind {
//     Circle = "CIRCLE",
//     Square = "SQUARE"
// }

// interface Circle {
//     kind: ShapeKind.Circle;
//     radius: number;
// }

// interface Square {
//     kind: ShapeKind.Square;
//     sideLength: number;
// }

// const c: Circle = {
//     kind: ShapeKind.Circle,
//     radius: 10
// };

// console.log("Circle: " + JSON.stringify(c));

// 运行时常量枚举
// 普通枚举在运行时保留为真实对象
enum FileAccess {
    Read = 1 << 1,  // << 是位运算符，表示左移操作, 1 左移 1 位得到 2, 1 << 1 === 2
    Write = 1 << 2,  // << 是位运算符，表示左移操作, 1 左移 2 位得到 4, 1 << 2 === 4
    ReadWrite = Read | Write  // | 是位运算符，表示按位或操作, Read | Write === 2 | 4 === 6
}

console.log("文件访问: " + FileAccess.ReadWrite);  // 输出: 文件访问: 6

// 总结
// 数字枚举：默认从 0 开始，可手动赋值
// 字符串枚举：每个成员必须是字符串字面量
// 常量枚举：使用 const，编译时内联
// 异构枚举：混合数字和字符串，不推荐
// 成员类型：字面量枚举成员可用作类型