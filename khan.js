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


// function binarySearch(myNum, max, min = 1) {
//     const guess = Math.trunc(Math.floor((min + max) / 2));
//     console.log(guess);
//     if (guess === myNum) {
//         return guess;
//     } else if (guess > myNum) {
//         return binarySearch(myNum, guess - 1, min);
//     } else if (guess < myNum) {
//         return binarySearch(myNum, max, guess + 1);
//     }
//     return guess;
// }


// const myNum = 10;
// const max = 100;

// console.log(binarySearch(myNum, max));
// console.log(guessList);

// const array = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

// function findNum(n, max = array.length - 1, min = 0) {
//     const guess = Math.trunc(Math.floor((max + min) / 2));
//     console.log(array[guess]);
//     if (array[guess] === n) {
//         return array[guess];
//     } else if (guess < n) {
//         return findNum(n, max, guess + 1);
//     } else if (guess > n) {
//         return findNum(n, guess - 1, min);
//     } 
// }

// findNum(67)

//binary search
function mergeSort(arr) {
   if (arr === undefined || arr.length === 0) {
    return null;
   }
   if (arr.length < 2) {
    return arr;
   }

   const mid = Math.floor(arr.length / 2);
   const leftHalf = mergeSort(arr.slice(0, mid));
   const rightHalf = mergeSort(arr.slice(mid));

   return mergeFunc(leftHalf, rightHalf);
}

function mergeFunc(leftHalf, rightHalf) {
    let finished = [];

    while (leftHalf.length > 0 && rightHalf.length > 0) {
        const smallest = leftHalf[0] > rightHalf[0] ? rightHalf.shift() : leftHalf.shift();
        finished.push(smallest);
    }

    return finished.concat(leftHalf, rightHalf);
}

console.log(mergeSort([1,5,6,7,8,9,4,7,3,6]));