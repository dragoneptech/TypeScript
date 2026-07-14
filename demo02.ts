// TypeScript：编译时就能发现错误

function greet(name: string): string {
    return `Hello, ${name.toUpperCase()}!`;
} 

console.log(greet("TypeScript")); // 输出: Hello, TYPESCRIPT!

// console.log(greet(123)); // 编译时会报错，因为数字不是字符串类型
// Argument of type 'number' is not assignable to parameter of type 'string'