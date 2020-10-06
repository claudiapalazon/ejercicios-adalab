"use strict";

function getEl(a) {
  const sel = document.querySelector(a);
  if (!sel)
    console.error(`No existe ningún elemento con clase, id o tag llamado ${a}`);
  return sel;
}

const btnEl = getEl(".btn");
console.log(btnEl);
