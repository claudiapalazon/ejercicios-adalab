"use strict";
const runners = [
  { name: "Gregory Goyle", time: 56, student: true },
  { name: "Nymphadora Tonks", time: 9, student: false },
  { name: "Luna Lovegood", time: 45, student: true },
  { name: "Cedric Diggory", time: 28, student: true },
  { name: "Cho Chang", time: 35, student: true },
];

const winnerRunner = function (faster, runner) {
  if (faster.time < runner.time) {
    return faster;
  } else {
    return runner;
  }
};
const winner = runners
  .filter((runner) => runner.student === true)
  .reduce(winnerRunner);

console.log(winner);
