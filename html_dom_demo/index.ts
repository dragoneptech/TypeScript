function changeText(): void {
    const p = document.querySelector("#demo") as HTMLParagraphElement;
    const input = document.querySelector("#inputText") as HTMLInputElement;
    p.textContent = input.value;
}

// querySelector 返回 Element | null
// const input = document.querySelector("#inputText") as HTMLInputElement;

// 断言后可访问 HTMLInputElement 的专属属性
// console.log(input.value);

// 更安全的写法：先判空再断言
// const btn = document.querySelector("#submit");
// if (btn) {
//     (btn as HTMLButtonElement).disabled = true;
// }