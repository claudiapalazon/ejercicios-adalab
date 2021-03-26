"use strict";

class Polygon {
  constructor(sides, base, height) {
    this.numberOfSides = sides;
    this.base = base;
    this.height = height;
  }
  perimetrer() {
    return this.base * this.numberOfSides;
  }
  area() {
    return this.base * this.height;
  }
}

class Square extends Polygon {
  constructor(long) {
    // this.side = this.base;
    // this.long = long;
    super(long, long, long);
  }
}
class Triangle extends Polygon {
  constructor(base, height) {
    super(3, base, height);
  }
  area() {
    return super.area() / 2;
  }
}

const square = new Square(4);
const triangle = new Triangle(4, 3);
console.log(square.perimetrer());
console.log(square.area());
console.log(triangle.perimetrer());
console.log(triangle.area());
