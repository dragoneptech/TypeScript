"use strict";
// TypeScript 字面量类型
// 使用 action 的 reducer 函数
function reducer(action) {
    // TypeScript 会根据 action.type 的值自动推断 action 的具体类型
    switch (action.type) {
        case "increment":
            // 在这个分支中，action 被推断为 { type: "increment"; payload: number }
            console.log("增加: " + action.payload);
            break;
        case "decrement":
            // 在这个分支中，action 被推断为 { type: "decrement"; payload: number }
            console.log("减少: " + action.payload);
            break;
        case "reset":
            // 在这个分支中，action 被推断为 { type: "reset" }
            console.log("重置");
            break;
    }
}
// 派发不同类型的 Action
reducer({ type: "increment", payload: 5 });
reducer({ type: "reset" });
