// 导出变量
export const name = "Alice";
export const age = 25;

// 导出函数
export function greet(message: string): string {
    return `Hello, ${message}`;
}

// 导出接口（接口在编译后会消失，仅用于类型检查）
export interface Config {
    // 配置主机
    host: string;
    // 配置端口
    port: number;    
}

// 导出类
// 默认导出类 default export
export default class User {
    // 构造函数参数属性
    constructor(public name: string) {};
    // 以上一行代码等价于：
    // name: string;
    // constructor(public name: string) {
    //     this.name = name;
    // }

    // 自我介绍方法
    introduce(): string {
        return `I am ${this.name}`;
    };    
}

// 批量导出：重命名导出
// export list 批量导出
// re-export alias 重命名导出
export { name as userName, age as userAge };