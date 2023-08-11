let guessList = [];

// function binarySearch(num, range) {
//     const guess = Math.trunc(Math.floor((range[0] + range[1]) / 2));
//     guessList.push(guess);
//     console.log(guess);
//     if (guess === num) {
//         return guess;
//     } else if (guess > num) {
//         return binarySearch(num, [range[0], guess - 1])
//     } else if (guess < num) {
//         return binarySearch(num, [guess + 1, range[1]])
//     }
//     return guess;
// }

// binarySearch(100, [0, 100]);


function binarySearch(myNum, max, min = 1) {
    const guess = Math.trunc(Math.floor((min + max) / 2));
    console.log(guess);
    if (guess === myNum) {
        return guess;
    } else if (guess > myNum) {
        return binarySearch(myNum, guess - 1, min);
    } else if (guess < myNum) {
        return binarySearch(myNum, max, guess + 1);
    }
    return guess;
}


const myNum = 10;
const max = 100;

console.log(binarySearch(myNum, max));
console.log(guessList);