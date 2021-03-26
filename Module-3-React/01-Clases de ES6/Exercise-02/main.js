"use strict";

class Square {
  constructor(side) {
    this.side = side;
  }
  perimetrer() {
    return this.side * 4;
  }
  area() {
    return this.side * this.side;
  }
}

const square1 = new Square(1);
const square2 = new Square(3);
const square3 = new Square(4);

console.log(square1.perimetrer());
console.log(square1.area());
