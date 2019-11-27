const readlineSync = require("readline-sync");

let hpyrmd = 0

let h = Number(readlineSync.question("\nHeight: "));
while (h < 1 || h > 24 || h % 1 != 0 || Number.isNaN(h)) {
    h = Number(readlineSync.question("Height: "));
}
console.log()
let l = h;

while (l > 0) {
    hpyrmd = ""
    for (i = 0; i <= h; i++) {
        hpyrmd = hpyrmd + "#"
    }
    for (i = 0; i < l - 1; i++) {
        hpyrmd = hpyrmd.replace(hpyrmd.charAt(i), " ")
    }
    console.log(hpyrmd)
    l--;
}
console.log()
