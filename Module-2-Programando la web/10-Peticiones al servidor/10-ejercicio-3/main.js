"use strict";

function getDogImage() {
  const input = document.querySelector(".text").value;
  console.log(input);
  // fetch(`https://api.github.com/users/${input}`)
  //   .then((response) => response.json())
  //   .then((data) => {
  //     const name = document.querySelector(".name");
  //     name.innerHTML = data.name;
  //     const img = document.querySelector("img");
  //     img.src = data.avatar_url;
  //     img.alt = `Photo of ${data.name}`;
  //     const repositories = document.querySelector(".repositories");
  //     repositories.innerHTML = data.public_repos;
  //   });
}
const btn = document.querySelector(".js-btn");
btn.addEventListener("click", getDogImage);
