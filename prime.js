const readlineSync = require("readline-sync");

let i = 0;

let x = 2;

let input = "";
console.log("");
do {
      i = Number(readlineSync.question("Non-negative integer: "));
} while (i < 0 || i > Number.MAX_SAFE_INTEGER || Number.isNaN(i) || !Number.isInteger(i));
while (x < i) {

    if (i % x === 0 && x !== i) {
        console.log("\nNot prime.\n")
        break;
    } else if (i % x !== 0) {
        x++
    } else {
        break;
    }
}
if (x >= i) {
  console.log("\nPrime.\n");
}
