"use strict";
// TypeScript 递归类型
// 定义配置对象
const config = {
    "name": "my-app",
    "version": "1.0.0",
    "enabled": true,
    "settings": {
        "debug": false,
        "ports": [3000, 8080],
        "metadata": {
            "author": "Alice",
            "tags": ["web", "typescript"]
        }
    }
};
// 获取 JSON 值的函数
function getValue(obj, path) {
    const keys = path.split(".");
    let current = obj;
    for (const key of keys) {
        if (current && typeof current === "object" && !Array.isArray(current)) {
            current = current[key];
        }
        else {
            return undefined;
        }
    }
    return current;
}
console.log("版本: " + getValue(config, "version"));
console.log("端口: " + getValue(config, "settings.ports"));
console.log("作者: " + getValue(config, "settings.metadata.author"));
