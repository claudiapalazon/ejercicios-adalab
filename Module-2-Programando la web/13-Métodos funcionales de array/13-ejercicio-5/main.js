"use strict";

const pins = [2389, 2384, 2837, 5232, 8998];

const passwordPar = (pin) => pin % 2 === 0;
const arrayResult = pins.filter(passwordPar);

console.log(arrayResult);
