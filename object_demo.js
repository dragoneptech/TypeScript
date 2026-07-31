"use strict";
// TypeScript 对象
function addPoints(p1, p2) {
    const x = p1.x + p2.x;
    const y = p1.y + p2.y;
    return { x: x, y: y };
}
// 正确
const newPoint = addPoints({ x: 3, y: 4 }, { x: 5, y: 1 });
console.log(newPoint); // { x: 8, y: 5 }
// 错误 
// const newPoint2 = addPoints({x: 1}, {x: 4,y: 3});
