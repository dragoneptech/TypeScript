// import { fetchUser } from "./api";  // 使用 ES 模块的 import 导入 fetchUser 函数
const { fetchUser } = require("./api");  // 使用 CommonJS 的 require 导入 fetchUser 函数

// jest.fn() 是 Jest 提供的一个函数（function）创建方法
// jest.fn() 用来创建一个“模拟函数（Mock Function）”

// 箭头函数的返回值为对象时，需要使用圆括号包裹对象字面量，否则会被解析为函数体
jest.mock("./api", () => ({
    fetchUser: jest.fn(() =>
        Promise.resolve({
            id:1,
            name:"Alice"
        })
    )
}));



test("fetchUser returns mocked user", async () => {

    const user = await fetchUser(1);
    expect(user).toEqual({id:1, name:"Alice"});

    expect(fetchUser).toHaveBeenCalledTimes(1);

    expect(fetchUser).toHaveBeenCalledWith(1);
});