"use strict";

const input = document.querySelector(".input");

function result(event) {
  const par = document.querySelector(".par");
  let input = event.currentTarget.value;
  // console.log(event.currentTarget);
  par.innerHTML = input;
}

input.addEventListener("keyup", result);
