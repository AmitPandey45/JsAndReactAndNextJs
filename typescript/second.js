var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var NewShape = /** @class */ (function () {
    function NewShape() {
    }
    NewShape.prototype.getTotalArea = function (shapes) {
        var totalArea = 0;
        for (var _i = 0, shapes_1 = shapes; _i < shapes_1.length; _i++) {
            var shape = shapes_1[_i];
            // Ensure the shape is an instance of Triangle before calling getArea
            if (shape instanceof Triangle) {
                totalArea += shape.getArea();
            }
            else if (shape instanceof Circle) {
                totalArea += shape.getArea();
            }
        }
        return totalArea;
    };
    return NewShape;
}());
var Triangle = /** @class */ (function (_super) {
    __extends(Triangle, _super);
    function Triangle(base, perpendicular) {
        var _this = _super.call(this) || this;
        _this.base = base;
        _this.perpendicular = perpendicular;
        return _this;
    }
    Triangle.prototype.getArea = function () {
        return (this.base * this.perpendicular) / 2;
    };
    return Triangle;
}(NewShape));
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(radius) {
        var _this = _super.call(this) || this;
        _this.radius = radius;
        return _this;
    }
    Circle.prototype.getArea = function () {
        return 22 * Math.pow(this.radius, 2) / 7;
    };
    return Circle;
}(NewShape));
// class Square {
// }
// class Reactangle {
// }
// Example usage:
var triangle1 = new Triangle(5, 10);
var circle1 = new Circle(7);
var shapesArray = [triangle1, circle1];
var totalArea = new NewShape().getTotalArea(shapesArray);
console.log("Total Area:", totalArea);
