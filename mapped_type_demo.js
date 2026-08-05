"use strict";
// TypeScript 映射类型
// 使用条件映射
const response = {
    data: "hello",
    error: "",
    isLoading: false,
    timestamp: Date.now(),
    retry: () => {
        console.log("Retrying...");
        // return true;
    }
};
console.log("响应: " + JSON.stringify(response));
response.retry(); // 调用重试函数
// 应用场景：条件映射常用于处理 API 响应、清理配置对象等需要根据类型做不同处理的场景
// 内置映射类型
// TypeScript 内置了许多基于映射类型实现的工具类型
// 这些工具类型可以满足大多数日常开发需求
// Partial - 将所有属性变为可选
// type P1 = Partial<{ a: string; b: number }>;
// 结果：{ a?: string; b?: number }
// Required - 将所有可选属性变为必填
// type R1 = Required<{ a?: string; b?: number }>;
// 结果：{ a: string; b: number }
// Readonly - 将所有属性变为只读
// type RO1 = Readonly<{ a: string; b: number }>;
// 结果：{ readonly a: string; readonly b: number }
// Pick - 选择指定的属性
// type PK = Pick<{ a: string; b: number; c: boolean }, "a" | "b">;
// 结果：{ a: string; b: number }
// Omit - 排除指定的属性
// type OM = Omit<{ a: string; b: number; c: boolean }, "c">;
// 结果：{ a: string; b: number }
// 测试 Partial
// console.log("Partial: " + JSON.stringify({} as P1));
// 测试 Pick
// console.log("Pick: " + JSON.stringify({ a: "x" } as PK));
// 工具类型组合：这些内置工具类型都是基于映射类型和条件类型实现的
// 了解其原理可以更好地使用它们
// 注意事项
// keyof 关键字：用于获取类型的所有键组成的联合类型
// in 关键字：用于遍历键名联合类型
// 修饰符位置：? 和 readonly 在属性名前，表示添加修饰符
// 减号修饰符：-? 和 -readonly 用于移除修饰符
// as 关键字：用于重映射键名 (key remapping)，必须返回字符串或数字字面量类型
// 进阶：映射类型可以与条件类型、模板字面量类型组合，实现复杂的类型转换
// 总结
// 映射类型是 TypeScript 类型系统中最强大的特性之一
// keyof：获取类型的所有键组合而成的联合类型
// in：遍历键名进行映射
// ?：添加可选修饰符
// readonly：添加只读修饰符
// -?：移除可选修饰符
// as：重映射键名
// 最佳实践：善用映射类型可以大幅减少重复的类型定义，提高代码的可维护性
