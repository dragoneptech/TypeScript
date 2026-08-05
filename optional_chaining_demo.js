"use strict";
// TypeScript 可选链
const user = {
    name: "Alice"
    // address 不存在
};
// 可选链 + 空值合并：当 city 为 null 或 undefined 时使用默认值
// const city = user?.address?.city ?? "未知城市";
const city = user?.address?.city || "未知城市";
console.log("城市: " + city);
// 对比：传统方式的复杂写法
const country = user && user.address && user.address.country
    ? user.address.country
    : "未知国家";
console.log("国家: " + country);
// 说明：?? 只在值为 null 或 undefined 时使用默认值
// 而 || 会在值为 falsy（0、""、false）时也使用默认值。在处理数字或字符串时，应优先使用 ??
