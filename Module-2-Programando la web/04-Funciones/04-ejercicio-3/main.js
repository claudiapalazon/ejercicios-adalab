"use strict";

function iva(num) {
  const iva = num * 0.21;
  console.log(`Precio sin IVA: ${num}, IVA: ${iva} y Total: ${num + iva}`);
}

let result = iva(10);
