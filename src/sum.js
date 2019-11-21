const readlineSync = require("readline-sync");

const MIN = Number.MIN_SAFE_INTEGER
const MAX = Number.MAX_SAFE_INTEGER

let sum = 0
console.log ("");

do{
  lowerBound = Number(readlineSync.question("Lower Bound: "));
  upperBound = Number(readlineSync.question("Upper Bound: "))
}
while (lowerBound < MIN || upperBound > MAX || lowerBound >= upperBound || Number.isNaN(lowerBound) || Number.isNaN(upperBound) || lowerBound % 1 != 0 ||upperBound % 1 != 0);
for (let i = lowerBound; i <= upperBound; i++){
  if(i % 2 === 0) {
    for (i = lowerBound; i <= upperBound; i+= 2){
      sum = i + sum
  }
}
  if (i % 2 !== 0) {
    for (i = lowerBound + 1; i <= upperBound; i+=2){
      sum = i + sum
  }
    }
  }
   let sumofbounds = sum.toLocaleString('en');

   console.log("\n" + sumofbounds + ".");
