"use strict";

console.log("Hola");
const holi = document.querySelector(".div");

function scrol(ev) {
  if (window.scrollY <= 500) {
    holi.classList.add("div-background-aquamarine");
    holi.classList.remove("div-background-pink");
  } else holi.classList.add("div-background-pink");
  console.log("Todo se ha ejecutado correctamente");
}

window.addEventListener("scroll", scrol);
