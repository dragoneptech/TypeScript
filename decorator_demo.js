"use strict";
// tsc .\decorator_demo.ts --experimentalDecorators --target ES2022
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
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
function sealed(constructor, context) {
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
// Generic decorator factory
function log(originalMethod, context) {
    return function (...args) {
        console.log(`Calling ${String(context.name)} with args:`, args);
        const result = originalMethod.apply(this, args);
        console.log(`${String(context.name)} returned:`, result);
        return result;
    };
}
let Calculator = (() => {
    let _classDecorators = [sealed];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _instanceExtraInitializers = [];
    let _add_decorators;
    var Calculator = class {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _add_decorators = [log];
            __esDecorate(this, null, _add_decorators, { kind: "method", name: "add", static: false, private: false, access: { has: obj => "add" in obj, get: obj => obj.add }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            Calculator = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
            __runInitializers(_classThis, _classExtraInitializers);
        }
        add(a, b) {
            return a + b;
        }
        constructor() {
            __runInitializers(this, _instanceExtraInitializers);
        }
    };
    return Calculator = _classThis;
})();
const calc = new Calculator();
calc.add(1, 2);
// 输出：Calling add with args: [ 1, 2 ]
// 输出：add returned: 3
