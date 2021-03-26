"use strict";

function getBreeds() {
  const organame = document.querySelector(".input").value;
  fetch(`https://api.github.com/orgs/${organame}`)
    .then((response) => response.json())
    .then((data) => {
      const repos = data.repos_url;
      console.log(repos);
      return fetch(`${repos}`);
    })
    .then((imageResponse) => imageResponse.json())
    .then((imageData) => {
      console.log(imageData);
      const ul = document.querySelector("ul");
      let ulContent = "";
      for (let i = 0; i < imageData.length; i++) {
        const breedContent = `<li>${imageData[i].name}</li>`;
        ulContent += breedContent;
      }
      ul.innerHTML = ulContent;
    });
}
const btn = document.querySelector(".js-btn");
btn.addEventListener("click", getBreeds);
