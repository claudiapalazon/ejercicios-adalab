"use strict";
const times = [56, 9, 45, 28, 35];

const winnerRunner = function (acum, time) {
  console.log(acum, time);
  return (acum += time);
};
let result = times.reduce(winnerRunner);
result = result / times.length;
console.log(result);
