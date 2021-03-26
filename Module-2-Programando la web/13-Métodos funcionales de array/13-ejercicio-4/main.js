"use strict";

const users = [
  { name: "María", isPremium: false },
  { name: "Lucía", isPremium: true },
  { name: "Susana", isPremium: true },
  { name: "Rocío", isPremium: false },
  { name: "Inmaculada", isPremium: false },
];

const premiumUsers = (user) => user.isPremium === true;
const arrayResult = users.filter(premiumUsers);

console.log(arrayResult);
