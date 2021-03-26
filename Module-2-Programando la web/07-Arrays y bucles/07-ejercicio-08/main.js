"use strict";

const button = document.querySelectorAll(".btn");
const body = document.querySelector(".body");

function showcolors(button) {
  body.classList.toggle("alert");
}
for (let i = 0; i < button.length; i++) {
  button[i].addEventListener("click", showcolors);
}
