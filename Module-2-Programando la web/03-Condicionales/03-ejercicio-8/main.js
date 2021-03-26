"use strict";

const year = 2021;
const four = 4;
let rest = 0;

if (year % four == 0) {
  console.log(year);
} else if (year % four != 0) {
  rest = year % four;
  console.log(rest);
  if (rest == 1) {
    console.log(year + 3);
  } else if (rest == 2) {
    console.log(year + 2);
  } else if (rest == 3) {
    console.log(year + 1);
  }
}
