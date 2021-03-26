"use strict";
const input1 = document.querySelector(".input1");
const input2 = document.querySelector(".input2");
const body = document.querySelector(".body");
function getcheck(event) {
  if (event.currentTarget.value === "dark") {
    console.log("Entro");
    body.classList.remove("white");
    body.classList.add("dark");
  } else {
    body.classList.remove("dark");
    body.classList.add("white");
  }
  const result = event.currentTarget.value;
  localStorage.setItem("check", result);
}

const name = localStorage.getItem("check");
if (name == "dark") {
  body.classList.add("dark");
  input2.setAttribute("checked", true);
} else if (name == "white") {
  body.classList.add("white");
  input1.setAttribute("checked", true);
}
// const getFromLocal = () => {
//   const stringUser = localStorage.getItem("userData");
//   const user = JSON.parse(stringUser);
//   if (user != null) {
//     nameInput.value = user.name;
//     surnameInput.value = user.surname;
//     text.innerHTML = user.name;
//     text2.innerHTML = user.surname;
//   }
// };
// getFromLocal();

input1.addEventListener("click", getcheck);
input2.addEventListener("click", getcheck);
