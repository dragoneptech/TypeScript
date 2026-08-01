"use strict";
var Drawing;
(function (Drawing) {
    ;
    class Circle {
        draw() {
            console.log("Drawing a circle");
        }
        ;
    }
    Drawing.Circle = Circle;
    ;
    class Triangle {
        draw() {
            console.log("Drawing a triangle");
        }
        ;
    }
    Drawing.Triangle = Triangle;
    ;
})(Drawing || (Drawing = {}));
function drawAllShapes(shape) {
    shape.draw();
}
drawAllShapes(new Drawing.Circle());
drawAllShapes(new Drawing.Triangle());
