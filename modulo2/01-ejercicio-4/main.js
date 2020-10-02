"use strict";
const titleElement = document.querySelector(".title");
let titleli = document.querySelector(".almudena");
titleli = document.querySelector(".claudia");

// Cambiamos su contenido con innerHTML
titleElement.innerHTML = titleElement.innerHTML + titleli.innerHTML;
