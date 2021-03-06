"use strict";
const runners = [
  { name: "Gregory Goyle", time: 56 },
  { name: "Nymphadora Tonks", time: 9 },
  { name: "Luna Lovegood", time: 45 },
  { name: "Cedric Diggory", time: 28 },
  { name: "Cho Chang", time: 35 },
];

const winnerRunner = function (faster, runner) {
  if (faster.time < runner.time) {
    return faster;
  } else {
    return runner;
  }
};
const winner = runners.reduce(winnerRunner);

console.log(winner);
