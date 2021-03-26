"use strict";

const peras = {
  max: 10,
  min: 1,
  current: 3,
  initial: 1,
};
console.log(peras);
peras["sum"] = function () {
  this.current += 1;
};
peras.sum();
console.log(peras);

peras["rest"] = function () {
  this.current -= 1;
};
peras.rest();
console.log(peras);

peras["start"] = function () {
  this.current = this.initial;
};
peras.start();
console.log(peras);
