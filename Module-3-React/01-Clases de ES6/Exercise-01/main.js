"use strict";

class Square {
  perimetrer(result) {
    return result * 4;
  }
  area(result) {
    return result * result;
  }
}

const side = new Square();

console.log(side.perimetrer(9));
console.log(side.area(9));
