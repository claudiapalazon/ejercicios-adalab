"use strict";

const names = ["María", "Lucía", "Susana", "Rocío", "Inmaculada"];

const sayHello = (name) => `Bienvenida ${name}`;
const arrayResult = names.map(sayHello);

console.log(arrayResult);
