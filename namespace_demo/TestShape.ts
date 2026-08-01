namespace Drawing {
    export interface IShape {
        draw(): void;
    };

    export class Circle implements IShape {
        public draw(): void {
            console.log("Drawing a circle");
        };
    };

    export class Triangle implements IShape {
        public draw(): void {
            console.log("Drawing a triangle");
        };
    };
}

function drawAllShapes(shape: Drawing.IShape) {
    shape.draw();
}

drawAllShapes(new Drawing.Circle());
drawAllShapes(new Drawing.Triangle());