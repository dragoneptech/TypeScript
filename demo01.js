// JavaScript：运行时才会报错

function greet(name) {
    return "Hello, " + name.toUpperCase() + "!";
}


console.log(greet("World")); // 输出: Hello, WORLD!

// console.log(greet(123)); // 运行时会报错，因为数字没有 toUpperCase 方法
// TypeError: name.toUpperCase is not a function