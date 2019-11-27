const readlineSync = require("readline-sync");

const MAX = 78

const MIN = 1

let i = 0

let initialb = 1.618034

let scndb = -0.618034

console.log("");
do {
  i = Number(readlineSync.question("Positive integer: "));
}
while (i < MIN || i > MAX || !Number.isInteger(i) || Number.isNaN(i))
let e = i

let s = (((Math.pow(initialb, e)) - (Math.pow(scndb, e)))/Math.sqrt(5))


if ((s*10) % 10 < 5){
  Math.floor(s);
}

if ((s*10) % 10 >= 5){
  Math.ceil(s);
}
let fresult = s.toLocaleString("en", {minimumFractionDigits:0, maximumFractionDigits:0})

console.log("\n" + fresult + "." + "\n")
