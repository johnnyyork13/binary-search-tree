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
// function mergeSort(arr) {
//     if (arr === undefined || arr.length === 0) {
//         return null;
//     } 
//     if (arr.length < 2) {
//         return arr;
//     }

//     const mid = Math.floor(arr.length / 2);
//     const leftHalf = mergeSort(arr.slice(0, mid));
//     const rightHalf = mergeSort(arr.slice(mid));

//     return mergeFunc(leftHalf, rightHalf);
// }

// function mergeFunc(leftHalf, rightHalf) {
//     let finishedArr = [];

//     while (leftHalf.length > 0 && rightHalf.length > 0) {
//         const smallest = leftHalf[0] > rightHalf[0] ? rightHalf.shift() : leftHalf.shift() ;
//         finishedArr.push(smallest);
//     }

//     return finishedArr.concat(leftHalf, rightHalf);
// }

//console.log(mergeSort([1,2,4,7,4,78,9,4,7,2]));

/* A Queue object for queue-like functionality over JavaScript arrays. */
var Queue = function() {
    this.items = [];
};
Queue.prototype.enqueue = function(obj) {
    this.items.push(obj);
};
Queue.prototype.dequeue = function() {
    return this.items.shift();
};
Queue.prototype.isEmpty = function() {
    return this.items.length === 0;
};

var doBFS = function(graph, source) {
    var bfsInfo = [];

    for (var i = 0; i < graph.length; i++) {
	    bfsInfo[i] = {
	        distance: null,
	        predecessor: null };
    }

    bfsInfo[source].distance = 0;

    var queue = new Queue();
    queue.enqueue(source);

    console.log(bfsInfo);
    // Traverse the graph
    while (!queue.isEmpty()) {
     var e = queue.dequeue(); 
     for (let i = 0; i < graph[e].length; i++) {
        let edge = graph[e][i];
        if (bfsInfo[edge].distance === null) {
            bfsInfo[edge].predecessor = e;
            bfsInfo[edge].distance = bfsInfo[bfsInfo[edge].predecessor].distance + 1;
            queue.enqueue(edge);
        }
     }

    }
    
    return bfsInfo;
};


var adjList = [
    [1],        //0
    [0, 4, 5],  //1
    [3, 4, 5],  //2
    [2, 6],     //3
    [1, 2],     //4
    [1, 2, 6],  //5
    [3, 5],     //6
    []          //7
    ];
var bfsInfo = doBFS(adjList, 3);
for (var i = 0; i < adjList.length; i++) {
    console.log("vertex " + i + ": distance = " + bfsInfo[i].distance + ", predecessor = " + bfsInfo[i].predecessor);
}

console.log(bfsInfo);

/*
Program.assertEqual(bfsInfo[0], {distance: 4, predecessor: 1});
Program.assertEqual(bfsInfo[1], {distance: 3, predecessor: 4});
Program.assertEqual(bfsInfo[2], {distance: 1, predecessor: 3});
Program.assertEqual(bfsInfo[3], {distance: 0, predecessor: null});
Program.assertEqual(bfsInfo[4], {distance: 2, predecessor: 2});
Program.assertEqual(bfsInfo[5], {distance: 2, predecessor: 2});
Program.assertEqual(bfsInfo[6], {distance: 1, predecessor: 3});
Program.assertEqual(bfsInfo[7], {distance: null, predecessor: null});
*/
