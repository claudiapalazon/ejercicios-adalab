"use strict";

const lostNumbers = [4, 8, 15, 16, 23, 42];
let array = [];

function numberPar(arr) {
  const arrPar = [];
  console.log("CACACA");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      console.log("holi");
      arrPar.push(arr[i]);
    }
  }
  return arrPar;
}
function bestLostNomber(arr) {
  // PAR
  const arrPar = numberPar(arr);
  // ----
  // MÚLTIPLO DE 3
  const arrThree = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 3 === 0) {
      arrThree.push(arr[i]);
    }
  }
  const conc = [];
  const result = conc.concat(arrPar, arrThree);
  return result;
}

array = bestLostNomber(lostNumbers);
console.log(lostNumbers);
console.log(array);
