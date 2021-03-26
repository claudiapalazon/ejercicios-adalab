"use strict";

let img = document.querySelector(`.user__avatar`);
console.log("img: ", img);

// avatar por defecto
const DEFAULT_AVATAR = "http://placehold.it/300x300";
// avatar que eligió el usuario al registrarse
let userAvatar = "http://www.fillmurray.com/300/300";
// let userAvatar = "";
console.log("userAvatar: ", userAvatar);

if (!userAvatar) {
  img.setAttribute("src", DEFAULT_AVATAR);
} else {
  img.setAttribute("src", userAvatar);
}
