"use strict";

function getEl(a) {
  const sel = document.querySelector(a);
  if (!sel)
    console.error(`No existe ningún elemento con clase, id o tag llamado ${a}`);
  return sel;
}
function num(num1) {
  if (num1 % 2 == 0) return true;
  else return false;
}

const btnEl = getEl(".numclass");
const inner = btnEl.innerHTML;
const numstring = parseInt(inner);
const result = num(numstring);

if (result == true) {
  console.log(`Este número es PAR: ${numstring}`);
} else if (result == false) {
  console.log(`Este número es IMPAR: ${numstring}`);
}
