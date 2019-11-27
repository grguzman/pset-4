const readlineSync = require("readline-sync");

let min = 1
let max = 24

let h = 0
let lofr = 0
let first = 1;
let scnd = 0

let s = 1;
let result = "\n";

console.log();
do {
  h = Number(readlineSync.question("Height: "));
} while (h < min || h > max || !Number.isInteger(h) || Number.isNaN(h));
scnd = 2
lofr = h + 1
console.log();

for (let v = 0; v < h; v++) {
  while (s <= lofr - scnd) {
    result = result + " ";
    s++;
  }
  while (first <= scnd) {
    result = result + "#";
    first++;
  }
  result = result + " "
  s = 1;
  first = 1;
 while (first <= scnd) {
   result = result + "#";
 first++;
 }
console.log(result);
scnd++;
result = "";
s = 1;
first = 1;
}
console.log();
