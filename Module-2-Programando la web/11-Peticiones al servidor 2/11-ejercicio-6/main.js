"use strict";
const form = document.querySelector(".js-form");
const nameInput = document.querySelector(".input");
const surnameInput = document.querySelector(".input2");
const text = document.querySelector(".js-text");
const text2 = document.querySelector(".js-text2");

function getText(event) {
  const data = {
    name: nameInput.value,
    surname: surnameInput.value,
  };
  const stringData = JSON.stringify(data);
  localStorage.setItem("userData", stringData);

  text.innerHTML = data.name;
  text2.innerHTML = data.surname;
}
const getFromLocal = () => {
  const stringUser = localStorage.getItem("userData");
  const user = JSON.parse(stringUser);
  if (user != null) {
    nameInput.value = user.name;
    surnameInput.value = user.surname;
    text.innerHTML = user.name;
    text2.innerHTML = user.surname;
  }
};
getFromLocal();
form.addEventListener("keyup", getText);
