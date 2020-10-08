"use strict";

const button = document.querySelector(".alert");
const par = document.querySelector(".paragraph");

function change() {
  par.innerHTML = "Mi primer click, ¡ole yo y la mujer que me parió!";
}

button.addEventListener("click", change);
