const readlineSync = require("readline-sync");

const MIN = 0

const MAX = Number.MAX_SAFE_INTEGER

console.log("");

ave = 0

let s = 0
do {
  i = Number(readlineSync.question("Non-negative integer: "));
  if (i >= MIN && i < MAX && !Number.isNaN(i) && i % 1 == 0) {
    s = i + s
    ave = ave + 1
  }
}
while ((i >= 0 && i < MAX &&  i % 1 == 0) || Number.isNaN(i) || i == 0)
let result = (s/ave)
let f = Math.round(100*result)/(100)
let fresult = f.toLocaleString("en", {minimumFractionDigits:3, maximumFractionDigits:3})
console.log("\n" + fresult + "." + "\n")
