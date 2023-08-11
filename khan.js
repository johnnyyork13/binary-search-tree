const alphabet = "abcdefghijklmnopqrstuvwxyz";

function caesar(letter, adjust) {
    let adjustedIndex;
    for (let i = 0; i < alphabet.length; i++) {
        const currentLetter = alphabet[i];
        if (letter === currentLetter) {
            if (i - adjust < 0) {
                adjustedIndex = 26 + (i - adjust);
            } else {
                adjustedIndex = i - adjust;
            }
            return alphabet[adjustedIndex];
        }
    }
}

const cypher = "gluhtlishjrvbadvyyplkaohavbyjpwolypzavvdlhrvuuleatlzzhnlzdpajoavcpnlulyljpwolyrlfdvykpzaolopkkluzftivsvmklhaoputfmhcvypalovsilpuluk";
const cypherTwo = "vwduwljudeehghyhubwklqjlfrxogilqgsohdvhuhwxuqdqbeoxhsulqwviruydxowd qgdodupghvljqedvhgrqzklfkedqnbrxghflghrqldpvhwwlqjxsvdihkrxvhfr";

let decoded = "";
for (let x = 0; x < cypher.length; x++) {
    decoded = decoded + caesar(cypher[x], 7);
}
console.log(decoded);
decoded = "";

for (let x = 0; x < cypherTwo.length; x++) {
    decoded = decoded + caesar(cypherTwo[x], 3);
}
console.log(decoded);




