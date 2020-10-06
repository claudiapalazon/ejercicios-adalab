"use strict";

const div = document.querySelector(".div");

console.log("Por ahora todo bien");
console.log(div);
if (div.classList.contains(".success")) {
  document.querySelector("h1").innerHTML = "CORRECTO";
  document.querySelector("p").innerHTML = "Los datos son correctos";
} else if (div.classList.contains("error")) {
  document.querySelector("h1").innerHTML = "ERROR";
  document.querySelector("p").innerHTML = "Ha surgido un error";
} else if (div.classList.contains("warning")) {
  document.querySelector("h1").innerHTML = "AVISO";
  document.querySelector("p").innerHTML = "Tenga cuidado";
}
