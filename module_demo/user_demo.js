// 导出变量
export const name = "Alice";
export const age = 25;
// 导出函数
export function greet(message) {
    return `Hello, ${message}`;
}
// 导出类
// 默认导出类 default export
export default class User {
    name;
    // 构造函数参数属性
    constructor(name) {
        this.name = name;
    }
    ;
    // 以上一行代码等价于：
    // name: string;
    // constructor(public name: string) {
    //     this.name = name;
    // }
    // 自我介绍方法
    introduce() {
        return `I am ${this.name}`;
    }
    ;
}
// 批量导出：重命名导出
// export list 批量导出
// re-export alias 重命名导出
export { name as userName, age as userAge };
