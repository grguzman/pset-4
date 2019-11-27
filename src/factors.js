const readlineSync = require("readline-sync");

let i = 0;

let y = 0;

let x = 1;

let answer = "";

console.log("");
do {
      i = Number(readlineSync.question("Positive integer: "));
} while (i <= 0 || i > Number.MAX_SAFE_INTEGER || Number.isNaN(i) || !Number.isInteger(i));
while (x <= Math.floor(Math.sqrt(i))) {
    if (x <= i) {
      y = i % x

      if (x === Math.floor(Math.sqrt(i))) {
        answer = answer + x + ". "
        break;
      } else if (y === 0) {
        answer = answer + x + ", " + (i / x) + ", "
      }
      x++
    }
}
  console.log("\n" + answer + "\n")
