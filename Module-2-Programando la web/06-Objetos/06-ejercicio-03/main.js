"use strict";
let par = document.querySelector(".par");

const adalaber = {};
adalaber.name = "Susana";
adalaber.age = "34";
adalaber.job = "Periodista";
adalaber.showBio = function () {
  return `Mi nombre es ${this.name}, tengo ${this.age} y soy ${this.job}`;
};

par.innerHTML = adalaber.showBio();
// console.log(adalaber.showBio());
