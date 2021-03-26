"use strict";

function getBreeds() {
  const name = document.querySelector(".input").value;
  console.log(name);
  fetch(`https://swapi.dev/api/people/?search=${name}`)
    .then((response) => response.json())
    .then((data) => {
      const result = data;
      console.log(data);
      const resultName = data.results;
      console.log(resultName);
      const ul = document.querySelector("ul");
      let ulContent = "";
      if (result.count === 0) {
        ulContent = `<li>No hay resultados para tu búsqueda</li>`;
      } else if (result.count === 1) {
        ulContent = `<li>Name: ${resultName[0].name}. Gender: ${resultName[0].gender}</li>`;
      } else {
        console.log("entro aqui");
        for (let i = 0; i < resultName.length; i++) {
          const breedContent = `<li>Name: ${resultName[i].name}. Gender: ${resultName[i].gender}</li>`;
          ulContent += breedContent;
        }
      }
      ul.innerHTML = ulContent;
    });
}
const btn = document.querySelector(".js-btn");
btn.addEventListener("click", getBreeds);
