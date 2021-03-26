"use strict";
const submit = document.querySelector(".submit");

function submitfilm(event) {
  console.log(input1);
  console.log(input2);
  const films = [input1.value, input2.value];
  for (const movie of films) {
    console.log(
      `¡A mi también me encantó "${movie}"! Tenemos mucho en común, humana.`
    );
  }
}
submit.addEventListener("click", submitfilm);
