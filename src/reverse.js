const readlineSync = require("readline-sync");

let MAX = Number.MAX_SAFE_INTEGER;
let MIN = 1;
let pI = -1
console.log();

while (pI <= 0 || Number.isNaN(pI) || !Number.isInteger(pI) || pI < MIN || pI > MAX){
  pI = Number(readlineSync.question("Positive Integer: "));
}
 let str = "";

while(pI > 0){
  let number = (pI % 10);
  pI = Math.floor(pI / 10);
  if (pI > 0) {
    str = str + number + ", ";
  } else {
    str = str + number + "."
  }
}
console.log("\n" + str);
