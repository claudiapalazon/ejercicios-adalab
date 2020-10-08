"use strict";

const button = document.querySelector(".button");

function change(ev) {
  const name = document.querySelector(".name").innerHTML;
  console.log(`Hola ${name}`);
}

button.addEventListener("click", change);
