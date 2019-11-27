const readlineSync = require("readline-sync");

const MAX = 9999999999999999;

const MIN = 1000000000000;

let cN;
console.log();
do {
    cN = Number(readlineSync.question("Number: "));
} while (Number.isNaN(cN) || cN % 1 !== 0 || cN < MIN || cN > MAX);

let cS = String(cN);

let cL = cS.length;

let sC = 0;

for (let i = cL - 2; i >= 0; i = i - 2) {
    let n = cS.charAt(i);

    let nt = Number(n) * 2;

    let ns = String(nt);

    let nsl = ns.length;

    if (nsl > 1) {
        let a = Number(ns.charAt(0));

        let b = Number(ns.charAt(1));
        sC = sC + a + b;
    } else {
        sC = sC + nt;
    }
} for (let i = cL - 1; i >= 0; i = i - 2) {

    let on = cS.charAt(i);
    
    let onn = Number(on);
    sC = sC + onn;
}

const SUM_CHECK = String(sC);

const LAST_NUMBER_MEASURE = SUM_CHECK.length - 1;

const LAST_NUMBER = SUM_CHECK.charAt(LAST_NUMBER_MEASURE);

if (LAST_NUMBER == "0") {
    if (cL == 15 && cS.charAt(0) == "3" && (cS.charAt(1) == "4" || cS.charAt(1) == "7")) {
        console.log("\nAmex. \n");
    } else if (cL == 16 && cS.charAt(0) == "5" && (cS.charAt(1) == "1" || cS.charAt(1) == "2" || cS.charAt(1) == "3" || cS.charAt(1) == "4" || cS.charAt(1) == "5")) {
        console.log("\nMastercard. \n");
    } else if (cL >= 13 && cL <= 16 && cS.charAt(0) == "4") {
        console.log("\nVisa. \n");
    } else {
        console.log("\nInvalid.");
    }
} else {
    console.log("\nInvalid.");
}
