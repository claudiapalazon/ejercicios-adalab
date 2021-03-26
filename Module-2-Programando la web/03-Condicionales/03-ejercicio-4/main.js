"use strict";

let dogAge = 7;

if (dogAge == 1) {
  console.log(15);
} else if (dogAge == 2) {
  console.log(24);
} else if (dogAge >= 3) {
  dogAge = dogAge - 2;
  console.log(dogAge * 5 + 24);
} else {
  console.log("No es una edad válida");
}
