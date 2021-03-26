"use strict";

const lorem = document.querySelector(".lorem");

function add(ev) {
  const lorem2 = document.querySelector(".lorem2");
  lorem2.innerHTML = lorem.innerHTML;
}

lorem.addEventListener("mouseover", add);
