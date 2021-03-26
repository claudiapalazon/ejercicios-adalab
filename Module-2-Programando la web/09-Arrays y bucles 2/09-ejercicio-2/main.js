"use strict";

let array = [];
function get100Numbers(arr) {
  for (let i = 0; i < 100; i++) {
    arr[i] = arr.push(i);
    console.log(arr[i]);
  }
  return array;
}
function getReversed100Numbers(arr) {
  arr = get100Numbers(arr);
  arr.reverse();
  console.log(arr);
}
array = getReversed100Numbers(array);
