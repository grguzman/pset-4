const readlineSync = require("readline-sync");

const MAX = Number.MAX_SAFE_INTEGER;

const MIN = 1;

let digits = 0;

let pI = Number(readlineSync.question("\nPositive Integer: "));

let s = 0;
while (pI < MIN || pI > MAX || Number.isNaN(pI) || pI % 1 != 0) {
  pI = Number(readlineSync.question("Positive Integer: "));
}
while (pI != 0) {
  digits = pI % 10;
  pI = Math.floor(pI / 10);
  if (digits % 2 != 0) {
    s = s + digits
  }
}
console.log("\n" + s + ".\n");
