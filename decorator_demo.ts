// tsc .\decorator_demo.ts --experimentalDecorators --target ES2022

// 类装饰器：在类定义时执行
// function sealed(constructor: Function) {
//     Object.seal(constructor);         // 禁止添加新属性
//     Object.seal(constructor.prototype);
// }

// 方法装饰器：可用于日志记录、权限校验等
// function log(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
//     const original = descriptor.value;
//     descriptor.value = function (...args: any[]) {
//         console.log(`Calling ${propertyKey} with args:`, args);
//         const result = original.apply(this, args);
//         console.log(`${propertyKey} returned:`, result);
//         return result;
//     };
// }

// @sealed
// class Calculator {
//     @log
//     add(a: number, b: number): number {
//         return a + b;
//     }
// }

// const calc = new Calculator();
// calc.add(1, 2);
// 输出：Calling add with args: [ 1, 2 ]
// 输出：add returned: 3


// 类装饰器：在类定义时执行
// function sealed(constructor: Function) {
//     Object.seal(constructor);         // 禁止添加新属性
//     Object.seal(constructor.prototype);
// }
function sealed<T extends abstract new (...args: any[]) => any>(constructor: T, context: ClassDecoratorContext) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}

// 方法装饰器：可用于日志记录、权限校验等
// function log(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
// Legacy decorator syntax or Stage 2 decorator syntax
// function log(originalMethod: any, context:ClassMethodDecoratorContext) {
// TypeScript5.0+ Standard decorator syntax or Stage 3 decorator syntax or ECMAScript decorator proposal

    // const original = descriptor.value;
    // descriptor.value = function (...args: any[]) {
    //     console.log(`Calling ${propertyKey} with args:`, args);
    //     const result = original.apply(this, args);
    //     console.log(`${propertyKey} returned:`, result);
    //     return result;
    // };
    // Method 1
    // return function (this: any, ...args: any[]) {  // 显式声明第一个参数 this: any
    //     console.log(`Calling ${String(context.name)} with args:`, args);
    //     const result = originalMethod.apply(this, args);
    //     console.log(`${String(context.name)} returned:`, result);
    //     return result;
    // }
    // Method 2
//     return function (...args: any[]) {  // 显式声明第一个参数 this: any
//         console.log(`Calling ${String(context.name)} with args:`, args);
//         // const result = originalMethod.apply(this, args);  // use arrow function to preserve the context of 'this'
//         const result = originalMethod(...args);  // use arrow function to preserve the context of 'this'
//         console.log(`${String(context.name)} returned:`, result);
//         return result;
//     }
// }




// Method 3: Generic decorator factory 
function log<This, Args extends unknown[], Return>(originalMethod: (this: This, ...args: Args) => Return, context: ClassMethodDecoratorContext<This, (this: This, ...args: Args) => Return>) {
    return function (this: This, ...args: Args): Return {
        console.log(`Calling ${String(context.name)} with args:`, args);
        const result = originalMethod.apply(this, args);
        console.log(`${String(context.name)} returned:`, result);
        return result;
    }
}

@sealed
class Calculator {
    @log
    add(a: number, b: number): number {
        return a + b;
    }
}

const calc = new Calculator();
calc.add(1, 2);
// 输出：Calling add with args: [ 1, 2 ]
// 输出：add returned: 3