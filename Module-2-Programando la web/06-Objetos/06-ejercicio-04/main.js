"use strict";

const button = document.querySelector(".button");

function typeproperty(event) {
  console.log(event);
}

button.addEventListener("click", typeproperty);
