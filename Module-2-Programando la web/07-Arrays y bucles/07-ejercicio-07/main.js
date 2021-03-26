"use strict";

const adalabers = [
  {
    name: "María",
    age: 30,
    job: "Diseñadora",
  },
  {
    name: "Lucía",
    age: 31,
    job: "Ingeniera Química",
  },
  {
    name: "Susana",
    age: 34,
    job: "periodista",
  },
  {
    name: "Rocío",
    age: 25,
    job: "Actriz",
  },
  {
    name: "Inmaculada",
    age: 21,
    job: "Diseñadora",
  },
];

function countAdalabers(array) {
  return array.length;
}
console.log("Número de Adalabers: " + countAdalabers(adalabers));

function averageAge(array) {
  let acumulador = 0;
  for (let i = 0; i < array.length; i++) {
    acumulador += array[i].age;
  }
  return (acumulador = acumulador / array.length);
}
console.log("La edad media es: " + averageAge(adalabers));

function theYoungest(array) {
  let acumulador = null;
  for (let i = 0; i < array.length; i++) {
    if (i == array.length - 1) {
      if (array[acumulador].age > array[i].age) {
        acumulador = i;
      }
    } else if (array[i].age < array[i + 1].age) {
      if (acumulador == null) {
        acumulador = i;
      } else if (acumulador != null) {
        if (array[acumulador].age > array[i].age) {
          acumulador = i;
        }
      }
    }
  }
  return array[acumulador].name;
}
console.log("La adalaber más pequeña es: " + theYoungest(adalabers));

function countDesigners(array) {
  let acumulador = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i].job == "Diseñadora") acumulador += 1;
  }
  return acumulador;
}
console.log("El número de Diseñadoras es: " + countDesigners(adalabers));
