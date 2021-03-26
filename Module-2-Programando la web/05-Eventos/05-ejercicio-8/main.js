"use strict";

const button = document.querySelector(".button");
const button2 = document.querySelector(".button-2");

function result(event) {
  event.currentTarget.classList.toggle("orange");
}

button.addEventListener("click", result);
button2.addEventListener("click", result);
