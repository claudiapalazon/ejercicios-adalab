"use strict";

let dogs;
let number;
function getBreeds() {
  fetch(`https://dog.ceo/api/breeds/list`)
    .then((response) => response.json())
    .then((data) => {
      dogs = data.message;
      const dogsLength = data.message.length - 1;
      console.log(dogsLength);
      return fetch(`https://api.rand.fun/number/integer?max=${dogsLength}`);
    })
    .then((responseNumber) => responseNumber.json())
    .then((dataNumber) => {
      number = dataNumber.result;
      console.log(number);
      return fetch(`https://dog.ceo/api/breed/${dogs[number]}/images/random`);
    })
    .then((responseDog) => responseDog.json())
    .then((dataDog) => {
      const name = document.querySelector(".js-dog");
      name.innerHTML = dogs[number];
      const img = document.querySelector(".js-img");
      img.src = dataDog.message;
      img.alt = `Photo of ${dogs[number]}`;
    });
}
getBreeds();
