"use strict";

function getEl(a) {
  const sel = document.querySelector(a);
  return sel;
}

const btnEl = getEl(".btn");
btnEl.innerHTML = btnEl.innerHTML + " Muy bien";
console.log(btnEl);
