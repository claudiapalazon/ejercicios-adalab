"use strict";

let array = [];
function get100Numbers(arr) {
  for (let i = 0; i < 100; i++) {
    arr[i] = arr.push(i);
    console.log(arr[i]);
  }
  return array;
}
array = get100Numbers(array);
