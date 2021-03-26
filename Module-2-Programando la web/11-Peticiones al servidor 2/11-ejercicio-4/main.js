"use strict";
const input = document.querySelector(".input");
const text = document.querySelector(".js-text");
let result = "";
function getText(event) {
  text.innerHTML = input.value;
  result = input.value;
  localStorage.setItem("name", result);
}

const name = localStorage.getItem("name");
input.value = name;
text.innerHTML = input.value;

input.addEventListener("keyup", getText);
