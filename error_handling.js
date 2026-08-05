// TypeScript 错误处理
async function withErrorHandling(fn) {
    try {
        // 执行传入的异步函数
        const data = await fn();
        // 返回成功结果
        return { ok: true, value: data };
    }
    catch (error) {
        // 返回错误结果
        return { ok: false, error: error };
    }
}
// 使用通用错误处理
// 模拟获取数据
const result = await withErrorHandling(async function () {
    const response = await fetch("/api/data");
    return response.json();
});
// 根据结果处理
if (result.ok) {
    console.log("数据: " + JSON.stringify(result.value));
}
else {
    console.error("错误:", result.error);
}
export {};
