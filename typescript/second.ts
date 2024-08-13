class NewShape {
  constructor() {}

  getTotalArea(shapes: NewShape[]): number {
    let totalArea = 0;
    for (let shape of shapes) {
      // Ensure the shape is an instance of Triangle before calling getArea
      if (shape instanceof Triangle) {
        totalArea += shape.getArea();
      } else if (shape instanceof Circle) {
        totalArea += shape.getArea();
      }
    }

    return totalArea;
  }
}

class Triangle extends NewShape {
  base: number;
  perpendicular: number;

  constructor(base: number, perpendicular: number) {
    super();
    this.base = base;
    this.perpendicular = perpendicular;
  }

  getArea(): number {
    return (this.base * this.perpendicular) / 2;
  }
}

class Circle extends NewShape {
  radius: number;

  constructor(radius: number) {
    super();
    this.radius = radius;
  }

  getArea(): number {
    return Math.PI * this.radius ** 2;
  }
}

// class Square {

// }

// class Reactangle {

// }

// Example usage:
const triangle1 = new Triangle(5, 10);
const circle1 = new Circle(7);

const shapesArray: NewShape[] = [triangle1, circle1];

const totalArea = new NewShape().getTotalArea(shapesArray);
console.log("Total Area:", totalArea);
