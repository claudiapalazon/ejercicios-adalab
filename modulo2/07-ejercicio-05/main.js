"use strict";

const numbers = [2, 5, 7, 9, 3, 34];

function average(array) {
  let acumulador = 0;

  for (let i = 0; i < array.length; i++) {
    acumulador += array[i];
  }

  return (acumulador = acumulador / array.length);
}

console.log("La media es: " + average(numbers));
